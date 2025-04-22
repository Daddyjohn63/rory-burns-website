import { CharitiesRowOne } from '@/components/charities/charities-row-one';
import { InnerHeader } from '@/components/common/Inner-header';
import { CharitiesRowTwo } from '@/components/charities/charities-row-two';
import { CharitiesRowThree } from '@/components/charities/charities-row-three';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Charities | Rory Burns Testimonial Year',
  description: 'An opportunity to make a lasting impact.'
};

export default function CharitiesPage() {
  return (
    <div className="flex flex-col">
      <InnerHeader
        title="Our Charities"
        description="An opportunity to make a lasting impact. "
      />
      <CharitiesRowOne />
      <CharitiesRowTwo />
      <CharitiesRowThree />
    </div>
  );
}
