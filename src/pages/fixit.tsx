import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Wrench, Monitor, Wifi, MessageCircle, ArrowUpRight, Zap,
  Shield, Headphones, CheckCircle, Settings, Globe, Clock,
  ChevronRight, Cpu, ServerCrash, LifeBuoy, PlugZap,
  Laptop, MapPin, AlertTriangle, ThumbsUp
} from "lucide-react";
import SeoHead from "@/components/seo-head";

const WHATSAPP = "2207532757";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const supportServices = [
  {
    icon: <Laptop size={28} />,
    title: "Laptops & Mobiles",
    desc: "Repair, troubleshooting, and servicing for laptops, smartphones, and tablets.",
    color: "hover:border-[#1E0A32]/60",
    accent: "bg-[#1E0A32]/15 border-[#1E0A32]/30 text-[#9CB633]",
  },
  {
    icon: <Wrench size={28} />,
    title: "Website Maintenance",
    desc: "Regular updates, content changes, plugin maintenance, and ongoing site care.",
    color: "hover:border-[#9CB633]/50",
    accent: "bg-[#9CB633]/10 border-[#9CB633]/25 text-[#9CB633]",
  },
  {
    icon: <Monitor size={28} />,
    title: "Device & Software Setup",
    desc: "Setup, configuration, and installation of devices, apps, and software tools.",
    color: "hover:border-purple-500/50",
    accent: "bg-purple-500/10 border-purple-500/25 text-purple-400",
  },
  {
    icon: <Wifi size={28} />,
    title: "Connectivity & Network Support",
    desc: "Internet, Wi-Fi, and networking troubleshooting for homes and businesses.",
    color: "hover:border-[#592C72]/60",
    accent: "bg-[#592C72]/15 border-[#592C72]/30 text-[#b8d93e]",
  },
  {
    icon: <Headphones size={28} />,
    title: "Technical Assistance",
    desc: "Expert hands-on technical help for any digital problem you're facing.",
    color: "hover:border-[#1E0A32]/60",
    accent: "bg-[#1E0A32]/15 border-[#1E0A32]/30 text-[#9CB633]",
  },
  {
    icon: <LifeBuoy size={28} />,
    title: "Digital Consultation",
    desc: "Strategy and guidance on tools, platforms, workflows, and digital transformation.",
    color: "hover:border-amber-500/50",
    accent: "bg-amber-500/10 border-amber-500/25 text-amber-400",
  },
];

const steps = [
  {
    num: "01",
    icon: <MessageCircle size={24} />,
    title: "Tell Us the Issue",
    desc: "Describe the technical problem or support needed — chat with us on WhatsApp or fill out our request form.",
  },
  {
    num: "02",
    icon: <Cpu size={24} />,
    title: "We Diagnose & Solve",
    desc: "Our team quickly identifies the issue and provides the right solution with minimal disruption to your workflow.",
  },
  {
    num: "03",
    icon: <PlugZap size={24} />,
    title: "Stay Productive",
    desc: "Get back to work with reliable support, modern digital solutions, and peace of mind.",
  },
];

const trustPoints = [
  {
    icon: <Zap size={24} />,
    title: "Fast Response",
    desc: "We respond quickly and work efficiently — minimizing downtime and disruption. Service delivered to your doorstep.",
  },
  {
    icon: <Shield size={24} />,
    title: "Professional Assistance",
    desc: "Experienced team with a proven track record across businesses of all sizes.",
  },
  {
    icon: <Settings size={24} />,
    title: "Modern Solutions",
    desc: "We use the latest tools and approaches to solve your technical challenges.",
  },
  {
    icon: <Globe size={24} />,
    title: "Business-Friendly Support",
    desc: "Flexible, affordable support that fits the needs of businesses and individuals.",
  },
];

export default function FixIT() {
  return (
    <>
      <SeoHead
        path="/services/fixit"
        title="Solotech FixIT — Modern Tech Support To Your Doorstep"
        description="Fast and reliable technical support, troubleshooting, website fixes, digital setup, and modern IT solutions for businesses and individuals in The Gambia."
      />
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24 pb-16">
        {/* Orbs */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 25, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[6%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.45) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -35, 0], scale: [0.9, 1.1, 1, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[8%] right-[6%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.4) 0%, rgba(156,182,51,0.06) 60%, transparent 80%)", filter: "blur(55px)" }}
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(156,182,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(156,182,51,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8 mb-6">
            <Zap size={12} className="text-[#9CB633]" />
            <span className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Solotech FixIT</span>
            <span className="ml-1 text-[10px] bg-[#9CB633]/20 text-[#9CB633] px-2 py-0.5 rounded-full font-semibold">⚡ Fast Support</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-[0.01em]">
            Modern Tech Support To Your Doorstep{" "}
            <span style={{ background: "linear-gradient(135deg, #9CB633 0%, #592C72 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Businesses & Individuals
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">We deliver tech support, troubleshooting, maintenance, and digital assistance right to your doorstep — so you can stay productive, connected, and online without the hassle.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink("Hi Solotech FixIT! I need technical support.")} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-3 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                <MessageCircle size={18} />
                Request Support
              </Button>
            </a>
            <a href={waLink("Hi! I'd like to chat about Solotech FixIT services.")} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-8 py-3 text-base font-semibold h-auto gap-2">
                <MessageCircle size={16} className="text-[#9CB633]" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          <p className="mt-6 text-white/25 text-xs tracking-wider">Fast response · Reliable support · Modern solutions</p>
        </motion.div>
      </section>
      {/* ── CASE SCENARIO ── */}
      <section className="py-24 px-6 md:px-12 bg-black/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.15) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Real Scenario</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Here's How It Works</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Your device breaks down. We come to you. Simple as that.</p>
          </motion.div>

          {/* Timeline steps */}
          <div className="relative">
            {/* Connecting line — solid green, desktop only */}
            <div className="hidden lg:block absolute left-[10%] right-[10%] z-0 rounded-full" style={{ top: 'calc(3rem - 1px)', height: '2px', background: 'linear-gradient(90deg, #1E0A32 0%, #9CB633 35%, #b8d93e 55%, #9CB633 75%, #592C72 100%)', opacity: 0.7 }} />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
              {[
                {
                  icon: <AlertTriangle size={30} />,
                  step: "01",
                  title: "Device Malfunctions",
                  desc: "Your laptop, phone, or any device breaks down, slows up, or stops working.",
                  accent: "border-[#9CB633]/30 text-[#9CB633]",
                  glow: "rgba(156,182,51,0.12)",
                },
                {
                  icon: <Globe size={30} />,
                  step: "02",
                  title: "Visit Our Website",
                  desc: "Go to solotechdigital.com and head to Solotech FixIT — contact support in seconds.",
                  accent: "border-[#592C72]/40 text-[#b8d93e]",
                  glow: "rgba(89,44,114,0.18)",
                },
                {
                  icon: <Wrench size={30} />,
                  step: "03",
                  title: "Request a Fix",
                  desc: "Tell us the problem via WhatsApp or our contact form. We respond fast.",
                  accent: "border-[#1E0A32]/40 text-purple-400",
                  glow: "rgba(89,44,114,0.22)",
                },
                {
                  icon: <MapPin size={30} />,
                  step: "04",
                  title: "We Come to You",
                  desc: "A Solotech FixIT technician visits your location at a time that works for you.",
                  accent: "border-[#9CB633]/30 text-[#9CB633]",
                  glow: "rgba(156,182,51,0.15)",
                },
                {
                  icon: <ThumbsUp size={30} />,
                  step: "05",
                  title: "Fixed or Replaced",
                  desc: "We fix it on the spot, or give you an honest recommendation for repair or replacement.",
                  accent: "border-emerald-500/30 text-emerald-400",
                  glow: "rgba(16,185,129,0.15)",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center lg:items-center lg:text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-5">
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                      style={{ background: s.glow }} />
                    <div className={`relative w-24 h-24 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${s.accent}`}
                      style={{ backgroundColor: '#0d0d1a', boxShadow: `0 0 28px ${s.glow}` }}>
                      {s.icon}
                    </div>
                    {/* Step badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#9CB633] flex items-center justify-center text-[9px] font-black text-[#0d0d1a]">
                      {s.step}
                    </div>
                    {/* Left connector dot — where line arrives (all except first) */}
                    {i > 0 && (
                      <motion.div
                        className="hidden lg:block absolute z-20 w-2 h-2 rounded-full bg-[#9CB633]/60"
                        style={{ top: 'calc(50% - 4px)', left: '-4px' }}
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
                      />
                    )}
                    {/* Right connector dot — where line departs (all except last) */}
                    {i < 4 && (
                      <motion.div
                        className="hidden lg:block absolute z-20 w-2 h-2 rounded-full bg-[#9CB633]/60"
                        style={{ top: 'calc(50% - 4px)', right: '-4px' }}
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35 + 0.17, ease: 'easeInOut' }}
                      />
                    )}
                  </div>

                  <h3 className="text-white font-bold text-base mb-2 leading-snug">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[180px] lg:max-w-none">{s.desc}</p>

                  {/* Arrow between steps — mobile only */}
                  {i < 4 && (
                    <div className="lg:hidden mt-4 text-[#1E0A32]/50 text-2xl">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-panel mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <Laptop size={20} className="text-[#9CB633] shrink-0" />
              <p className="text-white/60 text-sm">Device broken? Don't stress — <span className="text-white font-semibold">we come to you.</span></p>
            </div>
            <a href={waLink("Hi Solotech FixIT! My device has a problem and I need support.")} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                <MessageCircle size={15} /> Request a Fix Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SUPPORT SERVICES ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">What We Fix</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Services</h2>
            <p className="text-white/50 text-lg">From websites to devices and networks — we handle the technical so you can focus on what matters.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportServices.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative glass-panel p-7 rounded-2xl flex flex-col gap-4 transition-all duration-300 ${s.color}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${s.accent} group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={16} className="text-[#9CB633]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── HOW FIXIT WORKS ── */}
      <section className="py-24 px-6 md:px-12 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">How FixIT Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="absolute top-[2.75rem] left-[16.5%] right-[16.5%] h-px hidden md:block pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(156,182,51,0.4), rgba(89,44,114,0.4), transparent)" }} />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center gap-5 group"
              >
                {/* Step icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-[#9CB633]/40 bg-[#0a0a14] flex items-center justify-center text-[#9CB633] group-hover:border-[#9CB633] group-hover:bg-[#9CB633]/10 transition-all duration-300 shadow-[0_0_20px_rgba(156,182,51,0.1)] group-hover:shadow-[0_0_30px_rgba(156,182,51,0.25)]">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-6 text-[#1E0A32]/20 font-black text-4xl leading-none select-none">{step.num}</div>
                <div className="glass-panel p-6 rounded-2xl hover:border-[#592C72]/40 transition-colors w-full">
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── WHY CHOOSE FIXIT ── */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Why FixIT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Reliable Digital Support<br />When You Need It</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-panel flex items-start gap-5 p-7 rounded-2xl hover:border-[#592C72]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E0A32]/20 border border-[#1E0A32]/35 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/30 transition-colors">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{t.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div
              className="relative rounded-3xl overflow-hidden p-14"
              style={{
                background: 'linear-gradient(135deg, rgba(89,44,114,0.18) 0%, rgba(255,255,255,0.04) 50%, rgba(156,182,51,0.10) 100%)',
                backdropFilter: 'blur(48px) saturate(180%)',
                WebkitBackdropFilter: 'blur(48px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 48px rgba(0,0,0,0.35)',
              }}
            >
              {/* Top specular highlight — glass edge light refraction */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              {/* Ambient color orbs behind glass */}
              <div className="absolute -top-10 left-1/4 w-64 h-40 rounded-full bg-[#1E0A32]/25 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-8 right-1/4 w-56 h-40 rounded-full bg-[#9CB633]/15 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-4">Get Help Now</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
                <p className="text-white/50 mb-8 text-lg">Our team is ready to help you solve technical issues quickly and professionally.</p>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-xs mx-auto md:max-w-none">
                  <a href={waLink("Hi Solotech FixIT! I need immediate technical support.")} target="_blank" rel="noopener noreferrer" className="md:flex-none">
                    <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2 w-full">
                      <MessageCircle size={18} />
                      Request Support
                    </Button>
                  </a>
                  <a href={waLink("Hi! I'd like to chat with Solotech FixIT.")} target="_blank" rel="noopener noreferrer" className="md:flex-none">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-10 py-4 text-base font-semibold h-auto gap-2 w-full">
                      Chat on WhatsApp
                      <ArrowUpRight size={16} />
                    </Button>
                  </a>
                </div>
                <p className="mt-6 text-white/25 text-xs tracking-wider">Fast response · Reliable support · Modern solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
