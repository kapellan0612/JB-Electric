import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('Invalid email').max(200),
  phone: z.string().trim().max(50).optional().default(''),
  service: z.string().trim().max(120).optional().default(''),
  address: z.string().trim().max(300).optional().default(''),
  message: z.string().trim().max(5000).optional().default(''),
  website: z.string().optional().default(''),
  turnstileToken: z.string().min(1, 'Verification token missing'),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body || {};

  // Honeypot — bots fill this, humans never see it. Silent success to avoid tipping off the bot.
  if (body?.website && String(body.website).length > 0) {
    return res.status(200).json({ success: true });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Please check the form fields and try again.' });
  }

  const { name, email, phone, service, address, message, turnstileToken } = parsed.data;

  // Verify Turnstile with Cloudflare
  try {
    const remoteip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: turnstileToken,
        ...(remoteip ? { remoteip } : {}),
      }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: 'Verification failed. Please refresh and try again.' });
    }
  } catch {
    return res.status(502).json({ error: 'Verification service unavailable. Please try again.' });
  }

  // Send email via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New quote request from ${name}`,
      html: buildHtml({ name, email, phone, service, address, message }),
    });

    if (sendError) {
      return res.status(502).json({ error: 'Could not send right now. Please call 978.397.9878.' });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: 'Could not send right now. Please call 978.397.9878.' });
  }
}

function safeJsonParse(str) {
  try { return JSON.parse(str); } catch { return {}; }
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function row(label, value) {
  if (!value) return '';
  return `<tr><td style="padding:8px 12px;background:#F4F6FB;font-weight:600;color:#0E2A5C;border-radius:4px 0 0 4px;">${label}</td><td style="padding:8px 12px;color:#0E2A5C;">${escapeHtml(value)}</td></tr>`;
}

function buildHtml({ name, email, phone, service, address, message }) {
  const messageHtml = message ? escapeHtml(message).replace(/\n/g, '<br>') : '';
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
      <h2 style="color:#0E2A5C;border-bottom:3px solid #FFD00E;padding-bottom:12px;">New Quote Request</h2>
      <table style="width:100%;border-collapse:separate;border-spacing:0 6px;">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Service', service)}
        ${row('Address', address)}
      </table>
      ${messageHtml ? `<div style="margin-top:20px;"><div style="font-weight:600;color:#0E2A5C;margin-bottom:8px;">Message:</div><div style="background:#F4F6FB;padding:16px;border-radius:6px;color:#0E2A5C;line-height:1.6;">${messageHtml}</div></div>` : ''}
    </div>
  `;
}
