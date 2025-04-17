import { Link, Mail } from 'lucide-react';

export const ContactRowOne = () => {
  return (
    <section className="container mx-auto">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className=" font-bold mb-4 ">
            For general enquires, please contact
          </h2>

          <div className="flex flex-col gap-6">
            <h3 className="mx-auto mt-6  text-pretty ">Lucy Donovan </h3>
            <div className="flex items-center justify-center gap-2">
              <Link href="mailto:me@lucydonovan.com">
                <Mail className="w-6 h-6 text-[#866908]" />
                <p className="text-xl">me@lucydonovan.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
