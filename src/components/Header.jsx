import { useState } from 'react';
import logoWhite from '../assets/jb_logo_white.png';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentScreen, setScreen }) {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <img
          src={logoWhite}
          alt="JB Electric"
          className="jb-logo"
          style={styles.logo}
          onClick={() => setScreen('home')}
        />
        <nav style={styles.nav}>
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              className={`jb-nav-link ${currentScreen === link.id ? 'is-active' : ''}`}
              onClick={() => setScreen(link.id)}
              style={{
                ...styles.navLink,
                ...(currentScreen === link.id ? styles.navLinkActive : {}),
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div style={styles.actions}>
          <a href="tel:9783979878" className="jb-phone" style={styles.phone}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.79 19.79 19.79 0 01.43 2.18 2 2 0 012.4 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            978.397.9878
          </a>
          <button
            className="jb-btn-primary jb-btn-inverse-white"
            style={styles.cta}
            onClick={() => setScreen('contact')}
          >
            Free Quote
          </button>
        </div>
      </div>
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
  nav: { display: 'flex', gap: 32, flex: 1 },
  navLink: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.55)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.15s',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  navLinkActive: { color: '#FFD00E' },
  actions: { display: 'flex', alignItems: 'center', gap: 24 },
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
};
