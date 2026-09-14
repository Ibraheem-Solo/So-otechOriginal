import { Link } from "wouter";
import SeoHead from "@/components/seo-head";

const LAST_UPDATED = "May 11, 2026";

export default function Terms() {
  return (
    <>
      <SeoHead path="/terms" title="Terms of Service" description="Solotech Digital LLC Terms of Service." />
      <div className="min-h-screen py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="text-[#9CB633] text-sm hover:underline mb-8 inline-block">← Back to Home</Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the website and services of Solotech Digital LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
              <p>Solotech Digital LLC provides web design, branding, digital marketing, content creation, and related creative digital services. Specific deliverables, timelines, and payment terms for individual projects are defined in separate project agreements or proposals.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Payments</h2>
              <p>Payment terms are outlined in individual project proposals. A deposit may be required before work begins. Final deliverables are released upon receipt of full payment. Late payments may result in project delays or suspension of work.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
              <p>Upon receipt of full payment, ownership of the final deliverables transfers to the client. We retain the right to display completed work in our portfolio unless otherwise agreed in writing. Any third-party assets (fonts, stock images, plugins) remain subject to their respective licenses.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate information, timely feedback, and any content required to complete the project. Delays caused by the client may affect delivery timelines.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
              <p>Solotech Digital LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid for the specific project.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Termination</h2>
              <p>Either party may terminate a project agreement with written notice. Work completed up to the termination date will be invoiced accordingly. Deposits are non-refundable unless otherwise stated in the project agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
              <p>For any questions regarding these Terms, contact us at <a href="mailto:info@solotechdigital.com" className="text-[#9CB633] hover:underline">info@solotechdigital.com</a>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
