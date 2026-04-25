import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX = { name: 100, email: 200, phone: 30, service: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[c]);

const stripControl = (s) => String(s ?? '').replace(/[\x00-\x1f\x7f]/g, ' ').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    console.error('Missing required env vars');
    return res.status(500).json({ error: 'Server not configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  body = body || {};

  // Honeypot — bots fill hidden fields. Pretend success and bail.
  if (body.hp_company) return res.status(200).json({ ok: true });

  const name = stripControl(body.name).slice(0, MAX.name);
  const email = stripControl(body.email).slice(0, MAX.email);
  const phone = stripControl(body.phone).slice(0, MAX.phone);
  const service = stripControl(body.service).slice(0, MAX.service);
  const message = stripControl(body.message).slice(0, MAX.message);

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const subject = `JB Electric — ${service || 'New inquiry'} from ${name}`;
  const text = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || '—'}`,
    `Service: ${service || '—'}`,
    '',
    'Message:',
    message || '(no message)',
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;color:#0E2A5C;line-height:1.6;">
      <h2 style="margin:0 0 16px;font-size:18px;">New contact form submission</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#6B7A99;">Name</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7A99;">Email</td><td style="padding:4px 0;font-weight:600;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7A99;">Phone</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(phone) || '—'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7A99;">Service</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(service) || '—'}</td></tr>
      </table>
      <h3 style="margin:20px 0 6px;font-size:14px;color:#6B7A99;">Message</h3>
      <div style="white-space:pre-wrap;background:#F4F6FB;border-radius:6px;padding:12px 14px;">${escapeHtml(message) || '<em style="color:#6B7A99;">(no message)</em>'}</div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Resend send error:', error);
      return res.status(502).json({ error: 'Could not send your message. Please call us at 978.397.9878.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error. Please call us at 978.397.9878.' });
  }
}
