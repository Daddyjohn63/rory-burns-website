export const PrivacyRowOne = () => {
  return (
    <section className="container mx-auto">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold mb-8">Privacy Policy</h2>
          <div className="space-y-6 text-left">
            <p className="text-lg">
              Your privacy matters to us. Here&apos;s what you need to know:
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. No Cookies 🍪</h3>
              <p>
                We do not use cookies on this website. We don&apos;t track you,
                analyse your behaviour, or collect any data behind your back.
                You can browse freely without any pop-ups or consent banners —
                because we don&apos;t collect anything.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. If You Contact Us</h3>
              <p>
                If you choose to contact us — whether through email, a contact
                form, or social media — we may receive personal information like
                your name, email address, or social media handle.
              </p>
              <p>We promise:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We will only use your information to respond to your inquiry.
                </li>
                <li>
                  We will not share, sell, or misuse your details in any way.
                </li>
                <li>Your information stays private — just between us.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                3. No Third-Party Tracking
              </h3>
              <p>
                We don&apos;t use any analytics, ads, or embedded content that
                would track you. Just a simple link to our Instagram — no hidden
                cookies there.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">4. Updates</h3>
              <p>
                If we ever change how we handle privacy, we&apos;ll update this
                page. But for now, things are simple and cookie-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
