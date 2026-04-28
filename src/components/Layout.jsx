import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [pathname, key]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const intersection = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('jb-in');
          intersection.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = root => {
      root.querySelectorAll('.jb-rise:not(.jb-in)').forEach(el => intersection.observe(el));
    };

    observe(document);

    const mutation = new MutationObserver(records => {
      for (const r of records) {
        r.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          if (node.classList?.contains('jb-rise') && !node.classList.contains('jb-in')) {
            intersection.observe(node);
          }
          observe(node);
        });
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => { mutation.disconnect(); intersection.disconnect(); };
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main key={pathname} className="jb-page" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
