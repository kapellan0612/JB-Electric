import { useState } from 'react';
import logoWhite from '../assets/jb_logo_white.png';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentScreen, setScreen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => { setScreen(id); setMenuOpen(false); };

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <img
          src={logoWhite}
          alt="JB Electric"
          className="jb-logo"
          style={styles.logo}
          onClick={() => handleNav('home')}
        />

        {/* Desktop nav */}
        <nav className="jb-nav-desktop">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              className={`jb-nav-link ${currentScreen === link.id ? 'is-active' : ''}`}
              onClick={() => handleNav(link.id)}
              style={{ ...styles.navLink, ...(currentScreen === link.id ? styles.navLinkActive : {}) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="jb-header-acts">
          <a href="tel:9783979878" className="jb-phone" style={styles.phone}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.79 19.79 19.79 0 01.43 2.18 2 2 0 012.4 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            978.397.9878
          </a>
          <button
            className="jb-btn-primary jb-btn-inverse-white"
            style={styles.cta}
            onClick={() => handleNav('contact')}
          >
            Free Quote
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="jb-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="jb-mobile-menu">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              onClick={() => handleNav(link.id)}
              style={{
                ...styles.mobileLink,
                ...(currentScreen === link.id ? styles.mobileLinkActive : {}),
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={styles.mobileDivider} />
          <a href="tel:9783979878" style={styles.mobilePhone}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.79 19.79 19.79 0 01.43 2.18 2 2 0 012.4 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            978.397.9878
          </a>
          <button
            style={styles.mobileCta}
            onClick={() => handleNav('contact')}
          >
            Get a Free Quote →
          </button>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    background: 'rgba(14,42,92,0.97)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid rgba(255,208,14,0.15)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px',
    height: 72,
    display: 'flex',
    alignItems: 'center',
    gap: 48,
  },
  logo: { height: 56, width: 'auto', cursor: 'pointer', flexShrink: 0 },
  navLink: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.55)',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
  },
  navLinkActive: { color: '#FFD00E' },
  phone: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    letterSpacing: '0.02em',
  },
  cta: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 6,
    padding: '10px 22px',
    cursor: 'pointer',
    transition: 'all 0.15s',
    letterSpacing: '0.02em',
  },
  /* Mobile menu styles */
  mobileLink: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    display: 'block',
  },
  mobileLinkActive: { color: '#FFD00E' },
  mobileDivider: { height: 1, background: 'rgba(255,208,14,0.15)', margin: '8px 0' },
  mobilePhone: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 0',
  },
  mobileCta: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 8,
    padding: '14px 20px',
    cursor: 'pointer',
    marginTop: 8,
    width: '100%',
  },
};
