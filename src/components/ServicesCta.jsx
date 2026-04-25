import { useNavigate } from 'react-router-dom';
import boltIcon from '../assets/bolt-icon.png';

export default function ServicesCta() {
  const navigate = useNavigate();

  return (
    <div style={styles.ctaStrip}>
      {/* jb-cta-strip-inner handles responsive flex direction */}
      <div className="jb-cta-strip-inner jb-section-px" style={styles.ctaInner}>
        <div style={styles.ctaBolt}>
          <img src={boltIcon} alt="" style={{ width: 56, height: 'auto', display: 'block' }} />
        </div>
        <div>
          <div style={styles.ctaTitle}>Ready to get started?</div>
          <div style={styles.ctaSub}>All estimates are completely free. Call or request online.</div>
        </div>
        <div className="jb-cta-actions" style={styles.ctaActions}>
          <button
            className="jb-btn-primary"
            style={styles.ctaBtnPrimary}
            onClick={() => navigate('/contact')}
          >
            Request Free Quote
          </button>
          <a href="tel:9783979878" className="jb-btn-ghost" style={styles.ctaBtnSecondary}>
            978.397.9878
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  ctaStrip: {
    background: '#0E2A5C',
  },
  /* display + flex props handled by .jb-cta-strip-inner */
  ctaInner: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 48,
    paddingBottom: 48,
  },
  ctaBolt: { flexShrink: 0 },
  ctaTitle: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 28,
    color: '#fff',
    letterSpacing: '-0.02em',
    marginBottom: 6,
  },
  ctaSub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15,
    color: 'rgba(255,255,255,0.55)',
  },
  ctaActions: { marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 },
  ctaBtnPrimary: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 8,
    padding: '14px 28px',
    cursor: 'pointer',
    transition: 'transform 0.15s',
    boxShadow: '0 4px 16px rgba(255,208,14,0.25)',
  },
  ctaBtnSecondary: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    border: '1.5px solid rgba(255,255,255,0.20)',
    borderRadius: 8,
    padding: '12px 24px',
  },
};
