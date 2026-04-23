// Contact.jsx — JB Electric Contact Screen v2
const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [focused, setFocused] = React.useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 1800);
  };

  const inputStyle = (name) => ({
    ...ctStyles.input,
    ...(focused === name ? ctStyles.inputFocused : {}),
  });

  return (
    <div style={ctStyles.root}>
      {/* Top strip */}
      <div style={ctStyles.topStrip}>
        <div style={ctStyles.topInner}>
          <div>
            <img src={window.ASSETS?.['jb_logo_contact.png'] || 'jb_logo_contact.png'} alt="JB Electric" style={ctStyles.topLogo}/>
            <div style={ctStyles.eyebrow}><span style={ctStyles.eyebrowLine}/>Get in Touch</div>
            <h1 style={ctStyles.title}>Request a<br/><span style={ctStyles.titleAccent}>Free Quote</span></h1>
          </div>
          <div style={ctStyles.topContact}>
            <a href="tel:9783979878" style={ctStyles.topPhone}>978.397.9878</a>
            <div style={ctStyles.topEmail}>JHORNETBC@GMAIL.COM</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={ctStyles.body}>
        <div style={ctStyles.inner}>
          {/* Form */}
          <div style={ctStyles.formCol}>
            <p style={ctStyles.sub}>Tell us about your project and we'll get back to you within one business day. All estimates are free.</p>

            {sent ? (
              <div className="jb-success-flash" style={ctStyles.success}>
                <div className="jb-success-bolt" style={ctStyles.successIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0E2A5C" stroke="none"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                </div>
                <div style={ctStyles.successTitle}>Request Sent!</div>
                <div style={ctStyles.successSub}>We'll be in touch within one business day. For urgent needs, call 978.397.9878.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={ctStyles.form}>
                <div style={ctStyles.row}>
                  <div style={ctStyles.field}>
                    <label style={ctStyles.label}>Full Name</label>
                    <input className="jb-input" name="name" value={form.name} onChange={handleChange}
                      style={inputStyle('name')} placeholder="Jane Smith"
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} required />
                  </div>
                  <div style={ctStyles.field}>
                    <label style={ctStyles.label}>Phone</label>
                    <input className="jb-input" name="phone" value={form.phone} onChange={handleChange}
                      style={inputStyle('phone')} placeholder="978.000.0000"
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                  </div>
                </div>
                <div style={ctStyles.field}>
                  <label style={ctStyles.label}>Email Address</label>
                  <input className="jb-input" name="email" type="email" value={form.email} onChange={handleChange}
                    style={inputStyle('email')} placeholder="you@example.com"
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} required />
                </div>
                <div style={ctStyles.field}>
                  <label style={ctStyles.label}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} style={inputStyle('service')}
                    onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}>
                    <option value="">Select a service…</option>
                    <option>Electrical Installations</option>
                    <option>Lighting Solutions</option>
                    <option>Wiring & Rewiring</option>
                    <option>Electrical Repairs</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div style={ctStyles.field}>
                  <label style={ctStyles.label}>Message</label>
                  <textarea className="jb-input" name="message" value={form.message} onChange={handleChange}
                    style={{ ...inputStyle('message'), height: 120, resize: 'vertical' }}
                    placeholder="Describe your project or issue…"
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`jb-submit-btn ${submitting ? 'is-loading' : ''}`}
                  style={ctStyles.submit}
                >
                  <span className="jb-submit-label">
                    Send Request
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                  <span className="jb-submit-progress"/>
                  <span className="jb-submit-loading">Sending…</span>
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div style={ctStyles.sidebar}>
            <div style={ctStyles.infoCard}>
              <div style={ctStyles.infoGradientBar}/>
              <div style={ctStyles.infoSection}>
                <div style={ctStyles.infoLabel}>Call Us</div>
                <a href="tel:9783979878" style={ctStyles.phoneBig}>978.397.9878</a>
              </div>
              <div style={ctStyles.infoSection}>
                <div style={ctStyles.infoLabel}>Email</div>
                <a href="mailto:jhornetbc@gmail.com" style={ctStyles.infoValue}>JHORNETBC@GMAIL.COM</a>
              </div>
              <div style={ctStyles.divider}/>
              <div style={ctStyles.infoSection}>
                <div style={ctStyles.infoLabel}>Service Area</div>
                <div style={ctStyles.infoValue}>Greater Massachusetts</div>
              </div>
              <div style={ctStyles.infoSection}>
                <div style={ctStyles.infoLabel}>Hours</div>
                <div style={ctStyles.infoValue}>Mon–Fri · 7am–6pm<br/><span style={{ color: '#F7A823' }}>Emergency callouts available</span></div>
              </div>
              <div style={ctStyles.divider}/>
              <div style={ctStyles.trustGrid}>
                {['Fully Insured', 'Licensed', 'Free Quotes', 'Res + Com'].map(b => (
                  <div key={b} style={ctStyles.trustItem}>
                    <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><polyline points="2,7 5,10 11,3" stroke="#FFD00E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ctStyles = {
  root: { background: '#F4F6FB', minHeight: 600 },
  topStrip: {
    background: '#0E2A5C',
    borderBottom: '3px solid #FFD00E',
  },
  topInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '56px 40px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  eyebrow: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.40)',
    marginBottom: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  topLogo: { height: 52, width:'auto', display:'block', marginBottom: 22 },
  eyebrowLine: {
    display: 'inline-block',
    width: 24,
    height: 2,
    background: '#FFD00E',
    borderRadius: 1,
  },
  title: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 56,
    fontWeight: 900,
    color: '#fff',
    letterSpacing: '-0.03em',
    lineHeight: 0.95,
  },
  titleAccent: {
    background: 'linear-gradient(90deg, #FFD00E, #F7A823)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  topContact: { textAlign: 'right' },
  topPhone: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 32,
    color: '#FFD00E',
    textDecoration: 'none',
    display: 'block',
    marginBottom: 6,
    letterSpacing: '-0.01em',
  },
  topEmail: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.40)',
    letterSpacing: '0.06em',
  },
  body: { padding: '56px 0 80px' },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: 48,
    alignItems: 'start',
  },
  formCol: {},
  sub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16,
    color: '#6B7A99',
    lineHeight: 1.7,
    marginBottom: 32,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 20 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  field: { display: 'flex', flexDirection: 'column', gap: 7 },
  label: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    color: '#0E2A5C',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  input: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15,
    color: '#0E2A5C',
    background: '#fff',
    border: '2px solid rgba(14,42,92,0.12)',
    borderRadius: 8,
    padding: '12px 16px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  },
  inputFocused: {
    borderColor: '#FFD00E',
    boxShadow: '0 0 0 3px rgba(255,208,14,0.15)',
  },
  submit: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 8,
    padding: '14px 28px',
    cursor: 'pointer',
    transition: 'all 0.15s',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0 4px 16px rgba(255,208,14,0.25)',
  },
  success: {
    background: '#fff',
    border: '2px solid #FFD00E',
    borderRadius: 12,
    padding: '52px 40px',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(255,208,14,0.12)',
  },
  successIcon: {
    width: 64,
    height: 64,
    background: '#FFD00E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  successTitle: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 28,
    color: '#0E2A5C',
    marginBottom: 10,
  },
  successSub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15,
    color: '#6B7A99',
    lineHeight: 1.6,
  },
  sidebar: {},
  infoCard: {
    background: '#0E2A5C',
    borderRadius: 12,
    padding: '32px 28px',
    boxShadow: '0 16px 48px rgba(14,42,92,0.22)',
  },
  infoGradientBar: {
    height: 4,
    background: 'linear-gradient(90deg, #FFD00E, #F7A823, #F26A21)',
    borderRadius: 2,
    marginBottom: 28,
  },
  infoSection: { marginBottom: 22 },
  infoLabel: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: 'rgba(255,255,255,0.30)',
    marginBottom: 5,
  },
  phoneBig: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 30,
    color: '#FFD00E',
    textDecoration: 'none',
    display: 'block',
    letterSpacing: '-0.01em',
  },
  infoValue: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.72)',
    textDecoration: 'none',
    display: 'block',
    lineHeight: 1.6,
  },
  divider: { height: 1, background: 'rgba(255,255,255,0.08)', margin: '20px 0' },
  trustGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  trustItem: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.55)',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
};

Object.assign(window, { Contact });
