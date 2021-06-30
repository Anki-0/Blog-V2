import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('../../src/Banner/Banner'));

export default function privacyPolicy(): JSX.Element {
  return <Banner heading={'Privacy-Policy'} subHeading=' ' />;
}
