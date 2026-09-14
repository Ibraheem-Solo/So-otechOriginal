import { Link } from "wouter";
import SeoHead from "@/components/seo-head";

const LAST_UPDATED = "May 11, 2026";

export default function Privacy() {
  return (
    <>
      <SeoHead path="/privacy" title="Privacy Notice" description="Solotech Digital LLC Privacy Notice." />
      <div className="min-h-screen py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="text-[#9CB633] text-sm hover:underline mb-8 inline-block">← Back to Home</Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Notice</h1>
          <p className="text-white/40 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
              <p>Solotech Digital LLC is a creative digital agency based in Banjul, The Gambia. We can be reached at <a href="mailto:info@solotechdigital.com" className="text-[#9CB633] hover:underline">info@solotechdigital.com</a> or <a href="tel:+2207532757" className="text-[#9CB633] hover:underline">+220 753 2757</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white/90">Contact information</strong> — name, email address, phone number provided through our contact form.</li>
                <li><strong className="text-white/90">Project information</strong> — details you share about your business and project needs.</li>
                <li><strong className="text-white/90">Usage data</strong> — pages visited, time spent, referring URLs, collected via cookies (with your consent).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Respond to your enquiries and deliver project services.</li>
                <li>Improve the performance and content of our website.</li>
                <li>Send project updates and relevant communications (you may opt out at any time).</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
              <p>Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie preferences via the cookie banner displayed on your first visit. See our cookie section below for more detail.</p>
              <p className="mt-3"><strong className="text-white/90">Essential cookies</strong> are required for the website to function and cannot be disabled. <strong className="text-white/90">Analytics cookies</strong> are optional and only set with your consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
              <p>We retain contact and project information for as long as necessary to fulfil the purposes outlined above, or as required by law. You may request deletion of your data at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, email us at <a href="mailto:info@solotechdigital.com" className="text-[#9CB633] hover:underline">info@solotechdigital.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Services</h2>
              <p>Our website may link to third-party platforms (e.g. social media, payment processors). We are not responsible for the privacy practices of those services and encourage you to review their policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Notice</h2>
              <p>We may update this Privacy Notice from time to time. The date at the top of this page indicates when it was last revised.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
