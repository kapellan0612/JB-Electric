import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [screen, setScreen] = useState(() => {
    try { return localStorage.getItem('jb_screen') || 'home'; } catch { return 'home'; }
  });

  useEffect(() => {
    try { localStorage.setItem('jb_screen', screen); } catch {}
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [screen]);

  // IntersectionObserver for scroll-rise animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('jb-in');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const scan = () => {
      document.querySelectorAll('.jb-rise:not(.jb-in)').forEach(el => observer.observe(el));
    };

    scan();
    const interval = setInterval(scan, 300);
    return () => { clearInterval(interval); observer.disconnect(); };
  }, [screen]);

  const renderScreen = () => {
    switch (screen) {
      case 'home':     return <><Hero setScreen={setScreen} /><Services setScreen={setScreen} /></>;
      case 'services': return <Services setScreen={setScreen} />;
      case 'about':    return <About setScreen={setScreen} />;
      case 'contact':  return <Contact />;
      default:         return <><Hero setScreen={setScreen} /><Services setScreen={setScreen} /></>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentScreen={screen} setScreen={setScreen} />
      <main key={screen} className="jb-page" style={{ flex: 1 }}>
        {renderScreen()}
      </main>
      <Footer setScreen={setScreen} />
    </div>
  );
}
