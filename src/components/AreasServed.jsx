import { useNavigate } from 'react-router-dom';
import { CITIES_MA, CITIES_NH } from '../config/site';

export default function AreasServed() {
  const navigate = useNavigate();

  return (
    <section style={styles.root} aria-labelledby="areas-served-heading">
      <div className="jb-section-px" style={styles.inner}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowLine} />
          Service Area
        </div>
        <h2 id="areas-served-heading" style={styles.title}>
          Serving the Merrimack Valley<br />
          <span style={styles.titleAccent}>&amp; Southern New Hampshire</span>
        </h2>
        <p style={styles.sub}>
          JB Electric is licensed in Massachusetts and New Hampshire, with most jobs within a short drive of Methuen.
          We work with homeowners, landlords, builders, and small businesses across the towns below — and we&rsquo;re happy to travel for the right project.
        </p>

        <div className="jb-grid-2col" style={styles.grid}>
          <div style={styles.col}>
            <div style={styles.colHeader}>
              <span style={styles.colTag}>MA</span>
              <span style={styles.colTitle}>Massachusetts</span>
            </div>
            <ul style={styles.list}>
              {CITIES_MA.map(c => (
                <li key={c} style={styles.item}>
                  <span style={styles.dot} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.col}>
            <div style={styles.colHeader}>
              <span style={styles.colTag}>NH</span>
              <span style={styles.colTitle}>New Hampshire</span>
            </div>
            <ul style={styles.list}>
              {CITIES_NH.map(c => (
                <li key={c} style={styles.item}>
                  <span style={styles.dot} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={styles.footnote}>
          Don&rsquo;t see your town? <button style={styles.inlineBtn} onClick={() => navigate('/contact')}>Reach out</button> &mdash; we likely serve your area.
        </div>
      </div>
    </section>
  );
}

const styles = {
  root: {
    background: '#F4F6FB',
    borderTop: '1px solid rgba(14,42,92,0.06)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 72,
    paddingBottom: 72,
  },
  eyebrow: {
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
  eyebrowLine: {
    display: 'inline-block',
    width: 24, height: 2,
    background: '#FFD00E',
    borderRadius: 1,
  },
  title: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 900,
    fontSize: 40,
    color: '#0E2A5C',
    letterSpacing: '-0.025em',
    lineHeight: 1.05,
    marginBottom: 18,
  },
  titleAccent: {
    background: 'linear-gradient(90deg,#FFD00E,#F7A823)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sub: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 15,
    color: '#6B7A99',
    lineHeight: 1.7,
    maxWidth: 680,
    marginBottom: 36,
  },
  grid: {
    marginBottom: 28,
  },
  col: {
    background: '#fff',
    borderRadius: 10,
    padding: '26px 28px',
    border: '1px solid rgba(14,42,92,0.06)',
    boxShadow: '0 2px 12px rgba(14,42,92,0.04)',
  },
  colHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
    paddingBottom: 14,
    borderBottom: '1px solid rgba(14,42,92,0.07)',
  },
  colTag: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 900,
    fontSize: 11,
    background: '#0E2A5C',
    color: '#FFD00E',
    padding: '4px 8px',
    borderRadius: 4,
    letterSpacing: '0.04em',
  },
  colTitle: {
    fontFamily: "'Archivo',sans-serif",
    fontWeight: 800,
    fontSize: 16,
    color: '#0E2A5C',
    letterSpacing: '-0.01em',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 16,
    rowGap: 10,
  },
  item: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 14,
    color: '#0E2A5C',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 6, height: 6,
    borderRadius: '50%',
    background: '#FFD00E',
    flexShrink: 0,
  },
  footnote: {
    fontFamily: "'Manrope',sans-serif",
    fontSize: 14,
    color: '#6B7A99',
  },
  inlineBtn: {
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: "'Manrope',sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: '#1B3D8F',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};
