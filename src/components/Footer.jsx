import logoFooter from '../assets/jb_logo_footer.png';

export default function Footer({ setScreen }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        {/* jb-grid-footer handles responsive columns */}
        <div className="jb-grid-footer jb-section-px" style={styles.inner}>
          <div style={styles.brand}>
            <img src={logoFooter} alt="JB Electric" style={styles.logo} />
            <p style={styles.tagline}>"Wired for Excellence!"</p>
            <p style={styles.desc}>
              Licensed and insured electrical contractor serving residential and commercial clients across Massachusetts.
            </p>
            <div style={styles.badges}>
              {['Fully Insured', 'Licensed', 'Free Quotes'].map(b => (
                <span key={b} style={styles.badge}>{b}</span>
              ))}
            </div>
          </div>

          <div style={styles.col}>
            <div style={styles.colTitle}>Services</div>
            {['Electrical Installations', 'Lighting Solutions', 'Wiring & Rewiring', 'Electrical Repairs'].map(s => (
              <div
                key={s}
                style={styles.link}
                onClick={() => setScreen('services')}
                onMouseEnter={e => e.currentTarget.style.color = '#FFD00E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {s}
              </div>
            ))}
          </div>

          <div style={styles.col}>
            <div style={styles.colTitle}>Company</div>
            {['Home', 'About', 'Contact'].map(p => (
              <div
                key={p}
                style={styles.link}
                onClick={() => setScreen(p.toLowerCase())}
                onMouseEnter={e => e.currentTarget.style.color = '#FFD00E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {p}
              </div>
            ))}
          </div>

          <div style={styles.col}>
            <div style={styles.colTitle}>Contact</div>
            <a href="tel:9783979878" style={styles.phoneBig}>978.397.9878</a>
            <a href="mailto:jhornetbc@gmail.com" style={styles.email}>JHORNETBC@GMAIL.COM</a>
            <div style={styles.serviceArea}>Greater Massachusetts Area</div>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <div className="jb-section-px" style={styles.bottomInner}>
          <span style={styles.copy}>© 2025 JB Electric. All rights reserved.</span>
          <span style={styles.copy}>Residential · Commercial · Massachusetts</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: '#07193A' },
  top: { borderBottom: '1px solid rgba(255,255,255,0.07)' },
  /* grid-template-columns + gap handled by .jb-grid-footer */
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 72,
    paddingBottom: 72,
  },
  brand: {},
  logo: { height: 44, width: 'auto', marginBottom: 18 },
  tagline: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: 17,
    color: '#FFD00E',
    marginBottom: 12,
  },
  desc: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1.7,
    marginBottom: 20,
  },
  badges: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  badge: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    background: 'rgba(255,208,14,0.15)',
    color: '#FFD00E',
    padding: '5px 10px',
    borderRadius: 4,
    border: '1px solid rgba(255,208,14,0.25)',
  },
  col: {},
  colTitle: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: 'rgba(255,255,255,0.30)',
    marginBottom: 20,
  },
  link: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    color: 'rgba(255,255,255,0.55)',
    marginBottom: 12,
    cursor: 'pointer',
    transition: 'color 0.15s',
  },
  phoneBig: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 22,
    color: '#FFD00E',
    textDecoration: 'none',
    display: 'block',
    marginBottom: 10,
    letterSpacing: '-0.01em',
  },
  email: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.50)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: 16,
    letterSpacing: '0.04em',
  },
  serviceArea: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    color: 'rgba(255,255,255,0.35)',
  },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.06)' },
  bottomInner: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  copy: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 12,
    color: 'rgba(255,255,255,0.22)',
  },
};
