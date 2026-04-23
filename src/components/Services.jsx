import { useState } from 'react';
import boltIcon from '../assets/bolt-icon.png';

export const SERVICES = [
  {
    id: 'installations',
    title: 'Electrical Installations',
    short: 'New construction, additions, upgrades.',
    long: 'From new builds to major renovations, we handle panel upgrades, outlet installation, fixture wiring, and full code compliance for residential and commercial properties.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    number: '01',
  },
  {
    id: 'lighting',
    title: 'Lighting Solutions',
    short: 'Indoor, outdoor, landscape, commercial.',
    long: 'We design and install lighting systems for every application — recessed indoor, exterior security, landscape accent lighting, and commercial LED retrofits.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    number: '02',
  },
  {
    id: 'wiring',
    title: 'Wiring & Rewiring',
    short: 'Knob-and-tube replacement, service upgrades.',
    long: 'Older wiring is a safety hazard. We replace knob-and-tube, add new circuits, perform service upgrades, and troubleshoot any wiring issues — all to current code.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    number: '03',
  },
  {
    id: 'repairs',
    title: 'Electrical Repairs',
    short: 'Diagnostics, breaker issues, emergency callouts.',
    long: 'Something not working right? We diagnose and repair outlets, breakers, panels, switches, and more. Emergency callouts available — call us anytime.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    number: '04',
  },
];

export default function Services({ setScreen }) {
  const [active, setActive] = useState(null);

  return (
    <div style={styles.root}>
      {/* Section header — jb-grid-svc-hdr handles responsive columns */}
      <div className="jb-grid-svc-hdr jb-section-px" style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowLine} />
            What We Do
          </div>
          <h2 style={styles.title}>Expert Electrical<br />Services</h2>
        </div>
        <div style={styles.headerRight}>
          <p style={styles.sub}>
            Residential and commercial electrical work done right — on time, on budget, to code. Licensed and fully insured for your peace of mind.
          </p>
          <button
            className="jb-btn-primary jb-btn-inverse"
            style={styles.headerCta}
            onClick={() => setScreen('contact')}
          >
            Request a Free Quote →
          </button>
        </div>
      </div>

      {/* Service cards — jb-grid-svc-crd handles responsive columns */}
      <div className="jb-grid-svc-crd jb-section-px" style={styles.grid}>
        {SERVICES.map((svc, idx) => {
          const isActive = active === svc.id;
          return (
            <div
              key={svc.id}
              className={`jb-service-card jb-rise s${idx + 1}`}
              style={{ ...styles.card, ...(isActive ? styles.cardActive : {}) }}
              onClick={() => setActive(isActive ? null : svc.id)}
            >
              <div style={styles.cardTop}>
                <div style={{ ...styles.num, ...(isActive ? { color: 'rgba(255,208,14,0.25)' } : {}) }}>{svc.number}</div>
                <div className="jb-icon-wrap" style={{ ...styles.iconWrap, ...(isActive ? styles.iconWrapActive : {}) }}>
                  {svc.icon}
                </div>
              </div>
              <h3 style={{ ...styles.cardTitle, ...(isActive ? { color: '#fff' } : {}) }}>{svc.title}</h3>
              <p style={{ ...styles.cardText, ...(isActive ? { color: 'rgba(255,255,255,0.65)' } : {}) }}>
                {isActive ? svc.long : svc.short}
              </p>
              <div style={{ ...styles.cardFooter, ...(isActive ? { borderTopColor: 'rgba(255,208,14,0.15)' } : {}) }}>
                {isActive ? (
                  <button
                    className="jb-btn-primary"
                    style={styles.quoteBtn}
                    onClick={e => { e.stopPropagation(); setScreen('contact'); }}
                  >
                    Get a Quote →
                  </button>
                ) : (
                  <span className="jb-learn-more" style={styles.learnMore}>Learn more →</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bold CTA strip */}
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
              onClick={() => setScreen('contact')}
            >
              Request Free Quote
            </button>
            <a href="tel:9783979878" className="jb-btn-ghost" style={styles.ctaBtnSecondary}>
              978.397.9878
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: { background: '#fff' },
  /* grid-template-columns + gap + align-items handled by .jb-grid-svc-hdr */
  header: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 80,
    paddingBottom: 56,
    borderBottom: '1px solid rgba(14,42,92,0.08)',
  },
  headerLeft: {},
  eyebrow: {
    fontFamily: "'Manrope', sans-serif",
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
    width: 24,
    height: 2,
    background: '#FFD00E',
    borderRadius: 1,
  },
  title: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 52,
    fontWeight: 900,
    color: '#0E2A5C',
    letterSpacing: '-0.03em',
    lineHeight: 0.95,
  },
  headerRight: { display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 4 },
  sub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 16,
    color: '#6B7A99',
    lineHeight: 1.7,
  },
  headerCta: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 7,
    padding: '12px 22px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'all 0.15s',
  },
  /* grid-template-columns handled by .jb-grid-svc-crd */
  grid: {
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 48,
    paddingBottom: 0,
    borderBottom: '1px solid rgba(14,42,92,0.08)',
  },
  card: {
    padding: '36px 28px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderRight: '1px solid rgba(14,42,92,0.08)',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  cardActive: {
    background: '#0E2A5C',
    boxShadow: 'inset 0 4px 0 0 #FFD00E',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  num: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 36,
    color: 'rgba(14,42,92,0.08)',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  iconWrap: {
    width: 48, height: 48,
    background: '#EEF2FA',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1B3D8F',
    transition: 'all 0.2s',
  },
  iconWrapActive: {
    background: '#FFD00E',
    color: '#0E2A5C',
  },
  cardTitle: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 17,
    color: '#0E2A5C',
    lineHeight: 1.2,
    transition: 'color 0.2s',
  },
  cardText: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    color: '#6B7A99',
    lineHeight: 1.65,
    flex: 1,
    transition: 'color 0.2s',
  },
  cardFooter: {
    borderTop: '1px solid rgba(14,42,92,0.07)',
    paddingTop: 14,
    marginTop: 4,
    transition: 'border-color 0.2s',
  },
  learnMore: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: '#1B3D8F',
  },
  quoteBtn: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 6,
    padding: '9px 18px',
    cursor: 'pointer',
  },
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
