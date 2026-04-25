import { Head } from 'vite-react-ssg';
import About from '../components/About';
import { SITE_URL, SITE_NAME } from '../config/site';

const TITLE = `About ${SITE_NAME} | Licensed Electrician Serving MA & NH`;
const DESC = 'Family-run electrical contractor serving the Merrimack Valley and southern New Hampshire. Fully licensed and insured, with permitted residential and commercial work across MA and NH.';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Head>
      <About />
    </>
  );
}
