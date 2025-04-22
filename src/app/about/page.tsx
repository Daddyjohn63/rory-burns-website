import { AboutRowOne } from '@/components/about/about-row-one';
import { AboutRowTwo } from '@/components/about/about-row-two';
import { InnerHeader } from '@/components/common/Inner-header';
import { CTAAbout } from '@/components/about/cta-about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Rory Burns Testimonial Year',
  description:
    'Rory Burns is a name synonymous with resilience, leadership, and skill on the cricket field.'
};
const About = () => {
  return (
    <div>
      <InnerHeader title="About" description="Rory Burns Testimonial Year" />
      <AboutRowOne />
      <AboutRowTwo />
      <CTAAbout />
    </div>
  );
};

export default About;
