import { SERVICES } from './Services';

export default function About({ setScreen }) {
  return (
    <div>
      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroDeco} />
        <div className="jb-section-px" style={styles.heroInner}>
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowLine} />
            About JB Electric
          </div>
          <h1 style={styles.headline}>
            Wired for<br />
            <span style={styles.headlineAccent}>Excellence!</span>
          </h1>
          <p style={styles.sub}>
            JB Electric is a Massachusetts-based electrical contractor specializing in residential and commercial work. We're fully insured, licensed, and committed to quality craftsmanship on every job — big or small.
          </p>
          <button style={styles.cta} onClick={() => setScreen('contact')}>
            Get a Free Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats bar — jb-grid-4col handles responsive columns */}
      <div style={styles.statsBar}>
        <div className="jb-grid-4col jb-section-px" style={styles.statsInner}>
          {[
            { n: 'Fully', l: 'Insured' },
            { n: 'MA', l: 'Licensed' },
            { n: '$0', l: 'Estimate Cost' },
            { n: 'Res +', l: 'Commercial' },
          ].map((s, i) => (
            <div key={i} style={{ ...styles.statItem, ...(i < 3 ? styles.statBorder : {}) }}>
              <div style={styles.statNum}>{s.n}</div>
              <div style={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services grid — jb-grid-2col handles responsive columns */}
      <div className="jb-section-px" style={styles.services}>
        <div style={styles.eyebrowLight}>
          <span style={styles.eyebrowLine} />
          What We Offer
        </div>
        <h2 style={styles.servicesTitle}>Our Core Services</h2>
        <div className="jb-grid-2col" style={styles.grid}>
          {SERVICES.map(s => (
            <div key={s.id} style={styles.card}>
              <div style={styles.cardIcon}>{s.icon}</div>
              <div>
                <div style={styles.cardTitle}>{s.title}</div>
                <div style={styles.cardText}>{s.long}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    background: '#0E2A5C',
    position: 'relative',
    overflow: 'hidden',
  },
  heroDeco: {
    position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%',
    background: 'linear-gradient(135deg, rgba(27,61,143,0.5), transparent)',
    transform: 'skewX(-8deg) translateX(10%)',
  },
  heroInner: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 88,
    paddingBottom: 72,
    position: 'relative',
    zIndex: 2,
  },
  eyebrow: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: 18,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  eyebrowLine: {
    display: 'inline-block',
    width: 24, height: 2,
    background: '#FFD00E',
    borderRadius: 1,
  },
  headline: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 900,
    fontSize: 72,
    color: '#fff',
    letterSpacing: '-0.03em',
    lineHeight: 0.92,
    marginBottom: 28,
  },
  headlineAccent: {
    background: 'linear-gradient(90deg,#FFD00E,#F7A823)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sub: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 18,
    color: 'rgba(255,255,255,0.62)',
    lineHeight: 1.7,
    maxWidth: 560,
    marginBottom: 36,
  },
  cta: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 8,
    padding: '14px 28px',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(255,208,14,0.25)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 0.15s',
  },
  statsBar: {
    background: '#1B3D8F',
    borderBottom: '3px solid #FFD00E',
  },
  /* grid-template-columns handled by .jb-grid-4col */
  statsInner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  statItem: {
    padding: '28px 16px',
    textAlign: 'center',
  },
  statBorder: {
    borderRight: '1px solid rgba(255,255,255,0.10)',
  },
  statNum: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 900,
    fontSize: 36,
    color: '#FFD00E',
    letterSpacing: '-0.02em',
    marginBottom: 4,
    lineHeight: 1.1,
  },
  statLabel: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.50)',
    textTransform: 'uppercase',
    letterSpacing: '0.10em',
    lineHeight: 1.1,
  },
  services: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 72,
    paddingBottom: 72,
  },
  eyebrowLight: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#1B3D8F',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  servicesTitle: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 900,
    fontSize: 44,
    color: '#0E2A5C',
    letterSpacing: '-0.03em',
    marginBottom: 40,
  },
  /* grid-template-columns + gap handled by .jb-grid-2col */
  grid: {},
  card: {
    background: '#fff',
    borderRadius: 10,
    padding: '28px',
    boxShadow: '0 2px 12px rgba(14,42,92,0.08)',
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start',
    border: '1px solid rgba(14,42,92,0.06)',
  },
  cardIcon: {
    width: 52, height: 52,
    background: '#EEF2FA',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1B3D8F',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 700,
    fontSize: 17,
    color: '#0E2A5C',
    marginBottom: 6,
  },
  cardText: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 14,
    color: '#6B7A99',
    lineHeight: 1.65,
  },
};
