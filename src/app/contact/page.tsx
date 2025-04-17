import { InnerHeader } from '@/components/common/Inner-header';
import { ContactRowOne } from '@/components/contact/contact-row-one';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <InnerHeader title="Contact" description="" />
        <ContactRowOne />
      </div>
    </div>
  );
};

export default ContactPage;
