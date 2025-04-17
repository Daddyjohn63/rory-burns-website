import { InnerHeader } from '@/components/common/Inner-header';
import { ContactRowOne } from '@/components/contact/contact-row-one';

const ContactPage = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <InnerHeader title="Contact" description="" />
        <ContactRowOne />
      </div>
    </div>
  );
};

export default ContactPage;
