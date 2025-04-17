import { InnerHeader } from '@/components/common/Inner-header';
import { PrivacyRowOne } from '@/components/common/privacy';
import { ContactRowOne } from '@/components/contact/contact-row-one';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <InnerHeader title="Privacy Policy" description="" />
        <PrivacyRowOne />
      </div>
    </div>
  );
};

export default PrivacyPage;
