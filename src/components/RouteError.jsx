import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

const RELOAD_KEY = 'jb_route_error_reload_at';
const RELOAD_COOLDOWN_MS = 30_000;

// Detects the symptom of a stale browser bundle after a fresh deploy: the JS asks
// for a hashed manifest/asset that no longer exists, gets a 404 HTML page back,
// and JSON.parse blows up on the leading "<!DOCTYPE html>" / "The page could not
// be found".
function isStaleBundleError(error) {
  if (!(error instanceof SyntaxError)) return false;
  const msg = String(error.message || '');
  return /not valid JSON|Unexpected token/i.test(msg);
}

export default function RouteError() {
  const error = useRouteError();
  const stale = isStaleBundleError(error);

  useEffect(() => {
    if (typeof window === 'undefined' || !stale) return;
    const lastReload = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - lastReload < RELOAD_COOLDOWN_MS) return; // already tried — don't loop
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
    window.location.reload();
  }, [stale]);

  if (stale) return null; // reload is firing — render nothing in the gap

  return (
    <div style={styles.root}>
      <h1 style={styles.title}>Something went wrong</h1>
      <p style={styles.body}>
        Please refresh the page. If the problem keeps happening, give us a call at{' '}
        <a href="tel:9783979878" style={styles.phone}>978.397.9878</a>.
      </p>
      <button onClick={() => window.location.reload()} style={styles.btn}>
        Reload page
      </button>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'Manrope', sans-serif",
    padding: '80px 24px',
    textAlign: 'center',
    maxWidth: 520,
    margin: '0 auto',
  },
  title: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 32,
    color: '#0E2A5C',
    letterSpacing: '-0.02em',
    marginBottom: 12,
  },
  body: {
    fontSize: 15,
    color: '#6B7A99',
    lineHeight: 1.7,
    marginBottom: 28,
  },
  phone: { color: '#0E2A5C', fontWeight: 700 },
  btn: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 8,
    padding: '14px 28px',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(255,208,14,0.25)',
  },
};
