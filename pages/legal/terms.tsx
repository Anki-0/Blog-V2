import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('../../src/Banner/Banner'));

export default function Terms(): JSX.Element {
  return <Banner heading={'Terms of Service'} subHeading={''} />;
}
