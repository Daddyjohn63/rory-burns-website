import { InnerHeader } from '@/components/common/Inner-header';
import { ContactRowOne } from '@/components/contact/contact-row-one';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Rory Burns Testimonial Year',
  description: 'Contact us for more information'
};

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
