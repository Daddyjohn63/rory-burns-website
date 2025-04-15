import { CharitiesRowOne } from '@/components/charities/charities-row-one';
import { InnerHeader } from '@/components/common/Inner-header';
import { CharitiesRowTwo } from '@/components/charities/charities-row-two';
export default function CharitiesPage() {
  return (
    <div className="flex flex-col">
      <InnerHeader
        title="The Charities we are supporting"
        description="An opportunity to make a lasting impact. "
      />
      <CharitiesRowOne />
      <CharitiesRowTwo />
    </div>
  );
}
