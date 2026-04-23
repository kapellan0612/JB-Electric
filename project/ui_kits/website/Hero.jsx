// Hero.jsx — JB Electric Homepage Hero v4 (Bold navy + photo)
const Hero = ({ setScreen }) => {
  const [photoLoaded, setPhotoLoaded] = React.useState(false);
  return (
    <div style={heroStyles.root}>
      <div style={heroStyles.hero}>

        {/* Full-bleed electrician photo */}
        <div style={{ ...heroStyles.photoWrap, ...(photoLoaded ? {} : { background: '#0E2A5C' }) }} className={photoLoaded ? '' : 'jb-img-shimmer'}>
          <img
            className={`jb-hero-photo ${photoLoaded ? 'jb-img-loaded' : ''}`}
            src={window.ASSETS?.['hero-electrician.png'] || 'hero-electrician.png'}
            alt=""
            style={{ ...heroStyles.photoImg, opacity: photoLoaded ? undefined : 0 }}
            onLoad={() => setPhotoLoaded(true)}
          />
        </div>

        {/* Left navy gradient overlay for text legibility */}
        <div style={heroStyles.leftFade}/>

        <div style={heroStyles.inner}>
          {/* Left: Content */}
          <div style={heroStyles.content}>
            <div className="jb-hero-pop d1" style={heroStyles.eyebrow}>
              LICENSED &amp; INSURED · MA + NH
            </div>

            <h1 style={heroStyles.headline}>
              <span className="jb-hero-line d2" style={heroStyles.lineWhite}>No Surprises.</span><br/>
              <span className="jb-hero-line d3" style={heroStyles.lineWhite}>No Guesswork.</span><br/>
              <span className="jb-hero-line d4" style={{...heroStyles.lineYellow, whiteSpace:'nowrap'}}>Just Electrical</span><br/>
              <span className="jb-hero-line d5" style={{...heroStyles.lineYellow, position:'relative', display:'inline-block', whiteSpace:'nowrap'}}>
                Work Done Right.
                <span className="jb-underline-draw zu1" style={{position:'absolute', left:0, right:0, bottom:-8, height:7, borderRadius:3, background:'#FFD00E', transform:'scaleX(0)', transformOrigin:'left center'}}/>
              </span>
            </h1>

            <p className="jb-hero-fade d7" style={heroStyles.sub}>
              Serving homes and businesses across MA &amp; NH. We show up when we say we will, do the job right, and leave you with work you can trust. Licensed and insured.
            </p>

            <div className="jb-hero-fade d8" style={heroStyles.actions}>
              <button
                className="jb-btn-primary jb-btn-inverse-white jb-btn-arrow"
                style={heroStyles.btnPrimary}
                onClick={() => setScreen('contact')}
              >
                Get My Free Estimate
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button className="jb-btn-arrow" style={heroStyles.btnSecondary} onClick={() => setScreen('services')}>
                Or see our services →
              </button>
            </div>

            <div style={heroStyles.trust}>
              <div className="jb-hero-trust dt1" style={heroStyles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Fully Insured
              </div>
              <div className="jb-hero-trust dt2" style={heroStyles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                MA + NH Licensed
              </div>
              <div className="jb-hero-trust dt3" style={heroStyles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                Fixed Price Upfront
              </div>
              <div className="jb-hero-trust dt4" style={heroStyles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD00E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>
                Permitted Work
              </div>
            </div>
          </div>

          {/* Right: Service checklist card */}
          <div style={heroStyles.cardWrap}>
            <div className="jb-hero-card-in d9" style={heroStyles.card}>
              <div style={heroStyles.cardHeader}>
                <div style={heroStyles.cardTitle}>Our Services</div>
                <div style={heroStyles.cardSub}>TAP TO LEARN MORE</div>
              </div>
              <ul style={heroStyles.list}>
                {['Electrical Installations','Lighting Solutions','Wiring & Rewiring','EV Charger Installs','Panel Upgrades','Electrical Repairs'].map((svc, i) => (
                  <li key={svc} className={`jb-hero-check dc${i+1}`} style={heroStyles.listItem}
                    onClick={() => setScreen('services')}
                    onMouseEnter={e => e.currentTarget.style.background = '#F4F8FF'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={heroStyles.check}>
                      <svg width="12" height="12" viewBox="0 0 13 13" fill="none"><polyline points="2,7 5,10 11,3" stroke="#0E2A5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {svc}
                  </li>
                ))}
              </ul>
              <button className="jb-btn-lift jb-btn-arrow" style={heroStyles.cardCta} onClick={() => setScreen('contact')}>
                Schedule Service →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const heroStyles = {
  root: {},
  hero: {
    background: '#0E2A5C',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 680,
  },
  photoWrap: {
    position:'absolute', inset:0,
    pointerEvents:'none',
  },
  photoImg: {
    width:'100%', height:'100%', objectFit:'cover', objectPosition:'center',
    display:'block',
  },
  leftFade: {
    position:'absolute', inset:0,
    background: 'linear-gradient(90deg, #0E2A5C 0%, rgba(14,42,92,0.78) 20%, rgba(14,42,92,0.35) 38%, rgba(14,42,92,0) 55%)',
    pointerEvents:'none',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '72px 40px 88px',
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 48,
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  content: { position:'relative' },
  eyebrow: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '0.10em',
    color: '#0E2A5C',
    marginBottom: 22,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#FFD00E',
    padding: '9px 18px',
    borderRadius: 999,
    boxShadow: '0 4px 18px rgba(255,208,14,0.35)',
    textTransform:'uppercase',
  },
  headline: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 900,
    fontSize: 66,
    lineHeight: 1.02,
    letterSpacing: '-0.025em',
    marginBottom: 24,
    textShadow: '0 2px 20px rgba(0,0,0,0.15)',
  },
  lineWhite: { color: '#FFFFFF' },
  lineYellow: { color: '#FFD00E' },
  sub: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 15,
    fontWeight: 400,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.7,
    marginBottom: 32,
    maxWidth: 480,
  },
  actions: { display: 'flex', gap: 18, marginBottom: 34, alignItems: 'center', flexWrap:'wrap' },
  btnPrimary: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 800,
    fontSize: 15,
    background: '#FFD00E',
    color: '#0E2A5C',
    border: 'none',
    borderRadius: 10,
    padding: '16px 24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    boxShadow: '0 6px 18px rgba(255,208,14,0.35)',
    transition: 'all 0.2s',
  },
  btnIcon: {
    width: 22, height: 22, borderRadius: '50%',
    background: '#0E2A5C', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    marginRight: -2,
  },
  btnSecondary: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    background: 'transparent',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px 4px',
    cursor: 'pointer',
    borderBottom: '2px solid #FFD00E',
  },
  trust: { display: 'flex', gap: 22, flexWrap: 'wrap', alignItems:'center' },
  trustItem: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.95)',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  cardWrap: { display:'flex', justifyContent:'flex-end' },
  card: {
    background:'#fff',
    borderRadius:12,
    padding:'26px 28px 24px',
    boxShadow:'0 20px 50px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.12)',
    width: '100%',
    maxWidth: 400,
  },
  cardHeader: {
    display:'flex', justifyContent:'space-between', alignItems:'baseline',
    paddingBottom:14, marginBottom:4,
    borderBottom:'1px solid rgba(14,42,92,0.08)',
  },
  cardTitle: {
    fontFamily:"'Archivo',sans-serif", fontWeight:800, fontSize:20,
    color:'#0E2A5C', letterSpacing:'-0.01em',
  },
  cardSub: {
    fontFamily:"'Manrope',sans-serif", fontSize:10, fontWeight:700,
    color:'#2E5AAA', textTransform:'uppercase', letterSpacing:'0.12em',
  },
  list: { listStyle:'none', margin:0, padding:'6px 0' },
  listItem: {
    display:'flex', alignItems:'center', gap:12,
    padding:'10px 6px',
    fontFamily:"'Archivo',sans-serif", fontSize:15, fontWeight:700,
    color:'#0E2A5C', cursor:'pointer',
    borderRadius:6,
    transition:'background 0.15s',
  },
  check: {
    width:22, height:22, borderRadius:'50%', background:'#FFD00E',
    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
  },
  cardCta: {
    width:'100%', marginTop:14,
    fontFamily:"'Archivo',sans-serif", fontWeight:800, fontSize:14,
    background:'#0E2A5C', color:'#FFD00E',
    border:'none', borderRadius:8,
    padding:'14px 16px', cursor:'pointer',
    letterSpacing:'0.02em',
  },
};

Object.assign(window, { Hero });
