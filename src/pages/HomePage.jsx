import { Head } from 'vite-react-ssg';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AreasServed from '../components/AreasServed';
import { SITE_URL, SITE_NAME } from '../config/site';

const TITLE = `${SITE_NAME} — Licensed Electricians in MA & NH | Panel Upgrades, Wiring, EV Chargers`;
const DESC = 'Licensed and insured electrician serving the Merrimack Valley and southern New Hampshire. Panel upgrades, rewiring, lighting, EV chargers, and 24/7 emergency repairs in Lowell, Lawrence, Methuen, Haverhill, Salem NH, Nashua, Derry and surrounding towns.';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Head>
      <Hero />
      <Services />
      <AreasServed />
    </>
  );
}
