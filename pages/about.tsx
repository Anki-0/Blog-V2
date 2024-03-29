import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('../src/Layout/Banner/Banner'));

export default function About(): JSX.Element {
  return <Banner heading={'About'} subHeading={''} />;
}
