import { Head } from 'vite-react-ssg';
import Contact from '../components/Contact';
import { SITE_URL, SITE_NAME, PHONE } from '../config/site';

const TITLE = `Contact ${SITE_NAME} | Free Electrical Estimates — MA & NH`;
const DESC = `Request a free electrical estimate from ${SITE_NAME}. Call ${PHONE} or send a message — we serve homes and businesses across the Merrimack Valley and southern New Hampshire. Same-day response on most requests.`;

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Head>
      <Contact />
    </>
  );
}
