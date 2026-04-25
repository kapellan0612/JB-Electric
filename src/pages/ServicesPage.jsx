import { Head } from 'vite-react-ssg';
import Services from '../components/Services';
import AreasServed from '../components/AreasServed';
import { SITE_URL, SITE_NAME } from '../config/site';

const TITLE = `Electrical Services in MA & NH | ${SITE_NAME}`;
const DESC = 'Full-service residential and commercial electrical work across Massachusetts and southern New Hampshire — panel upgrades, rewiring, lighting design, EV charger installs, and emergency repairs. Licensed, insured, and permitted.';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Head>
      <Services />
      <AreasServed />
    </>
  );
}
