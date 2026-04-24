import { Resend } from 'resend';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().max(40).optional().default(''),
  email: z.string().trim().email().max(200),
  service: z.string().trim().max(120).optional().default(''),
  message: z.string().trim().max(5000).optional().default(''),
  website: z.string().optional().default(''),
  turnstileToken: z.string().min(1),
});

async function verifyTurnstile(token, ip) {
  const params = new URLSearchParams();
  params.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
  params.append('response', token);
  if (ip) params.append('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: params,
    });
    const data = await res.json();
    return data?.success === true;
  } catch {
    return false;
  }
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtml(data) {
  const row = (label, value) =>
    `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#6B7A99;"><strong>${label}</strong></td><td style="padding:6px 0;color:#0E2A5C;">${value}</td></tr>`;

  const messageHtml = data.message
    ? escapeHtml(data.message).replace(/\n/g, '<br>')
    : '&mdash;';

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0E2A5C; max-width: 560px;">
      <h2 style="margin:0 0 16px 0; font-size:20px;">New quote request from ${escapeHtml(data.name)}</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
        ${row('Name', escapeHtml(data.name))}
        ${row('Email', `<a href="mailto:${escapeHtml(data.email)}" style="color:#0E2A5C;">${escapeHtml(data.email)}</a>`)}
        ${row('Phone', escapeHtml(data.phone) || '&mdash;')}
        ${row('Service', escapeHtml(data.service) || '&mdash;')}
        ${row('Message', messageHtml)}
      </table>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  if (!body || typeof body !== 'object') body = {};

  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return res.status(200).json({ success: true });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Please check the form fields and try again.' });
  }

  const data = parsed.data;
  const ip =
    (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() ||
    req.socket?.remoteAddress;

  const tokenOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!tokenOk) {
    return res.status(400).json({ error: 'Verification failed. Please try again.' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.NOTIFICATION_EMAIL) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject: `New quote request from ${data.name}`,
      html: buildHtml(data),
    });

    if (result.error) {
      return res.status(502).json({ error: 'Email could not be sent. Please call us at 978.397.9878.' });
    }
    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({ error: 'Email could not be sent. Please call us at 978.397.9878.' });
  }
}
