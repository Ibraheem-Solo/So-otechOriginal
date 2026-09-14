import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Share2, Camera, TrendingUp, CheckCircle, ArrowRight, Wrench, Zap } from "lucide-react";
import SeoHead from "@/components/seo-head";

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const services = [
  {
    id: "web-design",
    icon: <Code size={36} />,
    title: "Web Design & Development",
    tagline: "Websites designed to convert visitors into paying customers.",
    color: "from-[#592C72]/20 to-[#9CB633]/10",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-[#9CB633]",
    benefits: [
      "Custom-designed for your brand and audience",
      "Mobile-first, blazing fast performance",
      "SEO-optimized from the ground up",
      "Conversion-focused layouts and CTAs",
      "WhatsApp and social media integrations",
    ],
    process: ["Discovery & Strategy", "Wireframe & Design", "Development", "Testing & QA", "Launch & Handoff"],
    deliverables: ["Complete website (all pages)", "Mobile responsive design", "Basic SEO setup", "1 month of post-launch support", "Source files & documentation"],
  },
  {
    id: "branding",
    icon: <Paintbrush size={36} />,
    title: "Branding & Graphic Design",
    tagline: "Identities that make your brand impossible to forget.",
    color: "from-pink-600/20 to-[#592C72]/10",
    borderColor: "hover:border-[#9CB633]/50",
    iconColor: "text-[#9CB633]",
    benefits: [
      "Logo design that stands out in any context",
      "Complete brand identity system",
      "Brand guidelines document",
      "Print and digital collateral",
      "Consistent visual language across all touchpoints",
    ],
    process: ["Brand Discovery", "Research & Concept", "Design Concepts", "Revisions", "Final Delivery"],
    deliverables: ["Primary & secondary logo (all formats)", "Color palette & typography", "Brand guidelines PDF", "Business cards & letterhead", "Social media templates"],
  },
  {
    id: "social-media",
    icon: <Share2 size={36} />,
    title: "Social Media Management",
    tagline: "Content that builds communities and drives engagement.",
    color: "from-[#9CB633]/20 to-[#592C72]/10",
    borderColor: "hover:border-[#592C72]/50",
    iconColor: "text-[#9CB633]",
    benefits: [
      "Strategic content planning and calendars",
      "Professional post design and copywriting",
      "Community management and response",
      "Monthly analytics and performance reports",
      "Paid ad campaign management",
    ],
    process: ["Strategy Session", "Content Planning", "Design & Copy", "Scheduling & Posting", "Reporting & Optimization"],
    deliverables: ["Monthly content calendar", "Branded post designs", "Captions and hashtags", "Analytics report", "Platform management"],
  },
  {
    id: "photography",
    icon: <Camera size={36} />,
    title: "Photography & Videography",
    tagline: "Visual storytelling that captivates and converts.",
    color: "from-amber-600/20 to-orange-600/10",
    borderColor: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
    benefits: [
      "Professional product and brand photography",
      "Drone aerial shots across The Gambia",
      "Corporate video production",
      "Social media short-form video content",
      "Event coverage and documentation",
    ],
    process: ["Brief & Location Scout", "Pre-production Planning", "Shoot Day(s)", "Post-production & Editing", "Final Delivery"],
    deliverables: ["High-resolution edited photos", "Edited video files (multiple formats)", "Raw footage archive", "Licensed music where applicable", "Social-ready cut-downs"],
  },
  {
    id: "digital-marketing",
    icon: <TrendingUp size={36} />,
    title: "Digital Marketing",
    tagline: "Campaigns that bring the right customers to your door.",
    color: "from-[#9CB633]/15 to-[#1E0A32]/20",
    borderColor: "hover:border-[#9CB633]/50",
    iconColor: "text-[#9CB633]",
    benefits: [
      "Google Ads and Meta Ads campaigns",
      "SEO strategy and implementation",
      "Email marketing and automation",
      "Lead generation funnels",
      "Monthly ROI reporting",
    ],
    process: ["Audit & Strategy", "Campaign Setup", "Creative Production", "Launch & Monitor", "Optimize & Report"],
    deliverables: ["Marketing strategy document", "Ad creatives and copy", "Campaign setup and management", "Monthly performance reports", "Lead tracking dashboard"],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Services"
        path="/services"
        description="Web design, branding, social media management, photography, videography, and digital marketing services in The Gambia. Results-focused digital solutions for African businesses."
      />
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Services Built for{" "}
              <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every service we offer is designed with one goal in mind — to help your business grow online. No fluff, no filler. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              id={service.id}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className={`glass-panel rounded-3xl overflow-hidden border border-white/5 ${service.borderColor} transition-all duration-300 scroll-mt-24`}
            >
              <div className={`bg-gradient-to-r ${service.color} p-10`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center ${service.iconColor} shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-white/70 text-lg">{service.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/75 text-sm">
                          <CheckCircle size={16} className={`${service.iconColor} shrink-0 mt-0.5`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Our Process</h4>
                    <ol className="space-y-3">
                      {service.process.map((step, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/75 text-sm">
                          <span className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold ${service.iconColor} shrink-0`}>
                            {j + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Deliverables</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/75 text-sm">
                          <ArrowRight size={16} className={`${service.iconColor} shrink-0 mt-0.5`} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/contact">
                    <Button className="bg-transparent hover:bg-[#9CB633]/10 text-[#9CB633] border border-[#9CB633]/60 hover:border-[#9CB633] rounded-full px-8 py-2.5 transition-all hover:scale-105">
                      Get a Quote for This Service
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FixIT Featured Card */}
      <section className="py-6 px-6 md:px-12 pb-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-[#9CB633]/25 hover:border-[#9CB633]/50 transition-all duration-300 group"
            style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.2) 0%, rgba(10,10,20,0.9) 50%, rgba(156,182,51,0.1) 100%)" }}
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
              style={{ background: "radial-gradient(circle, rgba(89,44,114,0.5) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ background: "radial-gradient(circle, rgba(156,182,51,0.4) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <div className="relative z-10 p-10 flex flex-col md:flex-row md:items-center gap-8 justify-between">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.5), rgba(156,182,51,0.3))", border: "1px solid rgba(156,182,51,0.35)" }}>
                  <Wrench size={32} className="text-[#9CB633]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-white">Solotech FixIT</h2>
                    <span className="text-[10px] bg-[#9CB633]/20 text-[#9CB633] px-2 py-0.5 rounded-full font-bold border border-[#9CB633]/30 flex items-center gap-1">
                      <Zap size={9} /> Fast Support
                    </span>
                  </div>
                  <p className="text-white/60 max-w-xl">Fast and reliable technical support, troubleshooting, website fixes, digital setup, and modern IT solutions for businesses and individuals.</p>
                </div>
              </div>
              <Link href="/services/fixit" className="shrink-0 self-start md:self-auto">
                <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity h-auto gap-2 whitespace-nowrap">
                  Explore FixIT <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure What You Need?</h2>
            <p className="text-xl text-white/60 mb-10">
              Book a free 30-minute strategy call. We'll help you figure out exactly what will move the needle for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base hover:scale-105 transition-transform">
                Book a Free Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
