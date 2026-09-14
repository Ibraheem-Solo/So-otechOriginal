import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Share2, Camera, TrendingUp, CheckCircle, Star, Zap, Award, Heart, Globe, Quote, ChevronDown, X, Shield, Headphones, Globe2, Palette, MessageSquare, BarChart3, RefreshCw, Lock, ArrowUpRight, Check, Monitor, Settings, BookOpen, Code2, Layout, Sparkles, GraduationCap } from "lucide-react";
import SeoHead from "@/components/seo-head";
import SocialLinks from "@/components/social-links";

const BASE = import.meta.env.BASE_URL;

const featuredProjects = [
  {
    title: "Al-Ihsan University Website",
    client: "Al-Ihsan University",
    tag: "Web Design",
    color: "from-[#1E0A32]/70 to-[#0a0612]/50",
    accent: "bg-[#1E0A32]/25 text-[#9CB633] border-[#1E0A32]/40",
    image: `${BASE}portfolio/alihsan-website.jpg`,
    url: "https://alihsanuniversity.org",
  },
  {
    title: "MJ's Building Essentials",
    client: "MJ's Building",
    tag: "Brand Identity",
    color: "from-orange-900/50 to-red-900/40",
    accent: "bg-[#592C72]/20 text-[#b8d93e] border-[#592C72]/40",
    image: `${BASE}portfolio/mjs-building-brand.jpg`,
  },
  {
    title: "Regal TV Brand Identity",
    client: "Regal TV",
    tag: "Branding",
    color: "from-yellow-900/50 to-purple-900/40",
    accent: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    image: `${BASE}portfolio/regal-tv.jpg`,
  },
  {
    title: "EJC Drilling Company",
    client: "EJC Drilling Co.",
    tag: "Web Design",
    color: "from-[#1E0A32]/70 to-[#05050f]/50",
    accent: "bg-[#1E0A32]/30 text-[#9CB633] border-[#9CB633]/30",
    image: `${BASE}portfolio/ejc-website.jpg`,
    url: "https://ejcdrilling.com",
  },
];

const PRO_MONTHLY_PRICE = 2000;
const PRO_ANNUAL_PRICE = 18000;
const PRO_ANNUAL_MONTHLY_EQUIV = Math.round(PRO_ANNUAL_PRICE / 12);
const ANNUAL_SAVINGS = PRO_MONTHLY_PRICE * 12 - PRO_ANNUAL_PRICE;

const proDetails = [
  { icon: <Globe2 size={18} />, label: "Custom Domain", desc: "We register and connect a professional .com or .gm domain for your brand." },
  { icon: <Palette size={18} />, label: "Multi-Page Premium Website", desc: "Home, About, Services, Portfolio, Contact — up to 8 custom pages." },
  { icon: <MessageSquare size={18} />, label: "Copywriting & Branding", desc: "Professional copy for every page plus a basic brand colour & font system." },
  { icon: <MessageSquare size={18} />, label: "WhatsApp Integration", desc: "Floating WhatsApp button + click-to-chat linked to your business number." },
  { icon: <RefreshCw size={18} />, label: "Ongoing Support & Edits", desc: "Up to 4 content or design change requests per month included." },
  { icon: <Shield size={18} />, label: "SSL Security Certificate", desc: "Your site ships with HTTPS encryption — trusted by browsers and Google." },
  { icon: <BarChart3 size={18} />, label: "Basic SEO Setup", desc: "Meta titles, descriptions, sitemap, and Google Analytics integration." },
  { icon: <Headphones size={18} />, label: "Priority Support", desc: "Dedicated WhatsApp support line with next-day response guarantee." },
  { icon: <Lock size={18} />, label: "Hosting Included", desc: "Fast, reliable managed hosting on our servers for the full year." },
];

function WorkSection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Work</h2>
            <p className="text-white/50 mt-2 text-sm">A selection of recent projects we're proud of</p>
          </div>
          <Link href="/work">
            <Button variant="outline" className="rounded-full border-[#9CB633]/60 text-[#9CB633] hover:bg-[#9CB633]/10 hover:border-[#9CB633] gap-2 hidden md:flex">
              View All Work <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 3).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden glass-panel group border border-white/10 hover:border-[#1E0A32]/50 transition-colors duration-300"
            >
              <div className={`relative h-56 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0.3"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${project.accent} backdrop-blur-sm`}>
                  {project.tag}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </a>
                )}
              </div>
              <div className="p-6">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{project.client}</p>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#9CB633] transition-colors">{project.title}</h3>
                <Link href="/work">
                  <span className="text-sm text-[#9CB633] hover:text-[#9CB633] font-medium inline-flex items-center gap-1 transition-colors">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/work">
            <Button className="rounded-full bg-gradient-solotech hover:opacity-90 px-8 py-3 gap-2">
              See All Our Work <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessInfographic() {
  const circleRef = useRef(null);
  const inView = useInView(circleRef, { once: true, margin: "-80px" });

  const nodeStyle = {
    background: "rgba(10,10,20,0.88)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  return (
    <div ref={circleRef} className="flex flex-col items-center gap-5">
      <div className="relative w-[460px] h-[460px] scale-[0.65] md:scale-100 origin-top -mb-[161px] md:mb-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 460 460" fill="none">
          {/* Outer orbit ring */}
          <motion.circle cx="230" cy="230" r="210" stroke="#1E0A32" strokeWidth="1.5" strokeOpacity="0.45"
            initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }} style={{ transformOrigin: "230px 230px" }} />
          {/* Inner dashed ring */}
          <motion.circle cx="230" cy="230" r="148" stroke="#9CB633" strokeWidth="1" strokeOpacity="0.20" strokeDasharray="5 4"
            initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} style={{ transformOrigin: "230px 230px" }} />
          {/* Spoke lines */}
          {[
            { x1: 230, y1: 182, x2: 230, y2: 42 },
            { x1: 278, y1: 230, x2: 418, y2: 230 },
            { x1: 230, y1: 278, x2: 230, y2: 418 },
            { x1: 182, y1: 230, x2: 42,  y2: 230 },
          ].map((l, i) => (
            <motion.line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="#9CB633" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.22"
              initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75 + i * 0.08, ease: "easeOut" }} />
          ))}
        </svg>

        {/* Center icon — matches FixIT shield style */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl flex items-center justify-center z-20"
          style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.45), rgba(156,182,51,0.18))", border: "1px solid rgba(156,182,51,0.28)", boxShadow: "0 0 40px rgba(89,44,114,0.35), 0 0 16px rgba(156,182,51,0.12)" }}
          initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}>
          <Zap size={34} className="text-[#9CB633]" />
        </motion.div>

        {/* 01 Discovery — top */}
        <motion.div className="absolute top-[6px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
          initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#9CB633]"
            style={{ ...nodeStyle, border: "1px solid rgba(156,182,51,0.30)" }}>
            <MessageSquare size={22} />
          </div>
          <span className="text-white text-sm font-bold whitespace-nowrap mt-1">Discovery</span>
          <span className="text-[#9CB633] text-xs font-bold tracking-widest">01</span>
        </motion.div>

        {/* 02 Strategy — right */}
        <motion.div className="absolute top-1/2 right-[6px] -translate-y-1/2 flex flex-col items-center gap-1.5 z-10"
          initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#9CB633]"
            style={{ ...nodeStyle, border: "1px solid rgba(89,44,114,0.45)" }}>
            <BarChart3 size={22} />
          </div>
          <span className="text-white text-sm font-bold whitespace-nowrap mt-1">Strategy</span>
          <span className="text-[#9CB633] text-xs font-bold tracking-widest">02</span>
        </motion.div>

        {/* 03 Design & Build — bottom */}
        <motion.div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}>
          <span className="text-[#9CB633] text-xs font-bold tracking-widest">03</span>
          <span className="text-white text-sm font-bold whitespace-nowrap mb-1">Design & Build</span>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#9CB633]"
            style={{ ...nodeStyle, border: "1px solid rgba(156,182,51,0.30)" }}>
            <Palette size={22} />
          </div>
        </motion.div>

        {/* 04 Launch & Growth — left */}
        <motion.div className="absolute top-1/2 left-[6px] -translate-y-1/2 flex flex-col items-center gap-1.5 z-10"
          initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.3 }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#9CB633]"
            style={{ ...nodeStyle, border: "1px solid rgba(89,44,114,0.45)" }}>
            <TrendingUp size={22} />
          </div>
          <span className="text-white text-sm font-bold whitespace-nowrap mt-1">Launch &</span>
          <span className="text-white text-sm font-bold whitespace-nowrap">Growth</span>
          <span className="text-[#9CB633] text-xs font-bold tracking-widest">04</span>
        </motion.div>
      </div>

      <motion.p className="text-white/35 text-xs text-center max-w-xs tracking-wide"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}>
        Our process is: <span className="text-white/55">Discovery · Strategy · Design & Build · Launch & Growth</span>
      </motion.p>
    </div>
  );
}

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showProDetails, setShowProDetails] = useState(false);

  const proPrice = isAnnual ? PRO_ANNUAL_PRICE : PRO_MONTHLY_PRICE;
  const proLabel = isAnnual ? "/year" : "/month";

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        path="/"
        title={undefined}
        description="Solotech Digital designs websites, brands, and digital content that help businesses in The Gambia and West Africa stand out, attract customers, and grow online."
      />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] px-6 md:px-12 overflow-hidden">
        {/* Purple glow */}
        <div className="absolute right-0 bottom-0 w-[55%] h-[90%] bg-[#1E0A32]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[92vh]">

            {/* Left — Text, vertically centred */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col justify-center py-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-8 w-fit">
                <span className="text-yellow-400">⚡</span>
                <span className="text-white/90">Launch Your Website in 24 Hours</span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-[0.03em] mb-6 leading-[1.05]">
                Web, Media &amp;<br />
                Branding That Helps<br />
                <span className="text-gradient">Businesses Grow</span>
              </h1>

              <p className="text-lg md:text-xl text-white/65 max-w-xl mb-10 leading-relaxed">
                Solotech Digital crafts websites, brands, and content that help businesses across The Gambia and West Africa stand out, attract customers, and grow online.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base border-0 hover:scale-105 transition-transform">
                    Start a Project
                  </Button>
                </Link>
                <Link href="/work">
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base border-[#9CB633]/60 text-[#9CB633] hover:bg-[#9CB633]/10 hover:border-[#9CB633]">
                    View Our Work
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">120+</div>
                  <div className="text-white/50 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">40+</div>
                  <div className="text-white/50 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1"><Star className="text-yellow-400 fill-yellow-400 w-6 h-6" /> 5.0</div>
                  <div className="text-white/50 text-sm">Client Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Person image absolutely anchored to bottom */}
            <div className="relative hidden lg:block">
              {/* Subtle ring at bottom centre */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[#1E0A32]/15 border border-[#1E0A32]/30 blur-sm" />

              {/* Floating badge — top area */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.6, delay: 0.4 }, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
                className="absolute top-[18%] left-4 bg-white/5 backdrop-blur-xl border border-[#1E0A32]/40 shadow-2xl px-4 py-3 rounded-2xl z-20"
              >
                <div className="text-xs text-white/50 mb-0.5">Latest project</div>
                <div className="text-sm font-semibold text-white">Delivered in 18hrs ⚡</div>
              </motion.div>

              {/* Floating badge — mid-right */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                transition={{ opacity: { duration: 0.6, delay: 0.6 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 } }}
                className="absolute bottom-[22%] right-0 bg-white/5 backdrop-blur-xl border border-[#9CB633]/30 shadow-2xl px-4 py-3 rounded-2xl z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#9CB633]/20 flex items-center justify-center">
                    <Star size={14} className="text-[#9CB633] fill-[#9CB633]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Client review</div>
                    <div className="text-sm font-semibold text-white">5 Stars ✨</div>
                  </div>
                </div>
              </motion.div>

              {/* Person — absolutely pinned to bottom, full visible height */}
              <motion.img
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                src={`${import.meta.env.BASE_URL}hero-person.png`}
                alt="Solotech Digital team member"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto"
                style={{
                  height: "100%",
                  maxHeight: "820px",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 0 60px rgba(123,47,190,0.4))",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-14 border-y border-white/[0.06] overflow-hidden relative" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="text-center mb-10">
          <p className="text-white/20 font-semibold tracking-[0.35em] text-[16px]">
            Trusted by organisations across The Gambia &amp; beyond
          </p>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #06060f 10%, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #06060f 10%, transparent)" }} />

        <div
          className="flex items-center animate-marquee"
          style={{ width: "max-content" }}
        >
          {/* 3 identical sets — animation moves exactly 1/3 (–33.33%), seamlessly looping */}
          {[...Array(3)].flatMap((_, setIdx) =>
            [
              { src: `${import.meta.env.BASE_URL}client-alif.png`,              name: "Alif Qur'anic Boarding School"         },
              { src: `${import.meta.env.BASE_URL}client-gambia-islamic.png`,  name: "Gambia Islamic Institute"              },
              { src: `${import.meta.env.BASE_URL}client-inicio-ubuntu.png`,   name: "Inicio Ubuntu Health & Wealth Network" },
              { src: `${import.meta.env.BASE_URL}client-alihsan.png`,         name: "Al-Ihsan University"                   },
              { src: `${import.meta.env.BASE_URL}client-halal.png`,           name: "Halal Organic Products"                },
              { src: `${import.meta.env.BASE_URL}client-greenafrique.png`,    name: "Greenafrique"                          },
              { src: `${import.meta.env.BASE_URL}client-spot-project.png`,   name: "SPOT Project"                          },
              { src: `${import.meta.env.BASE_URL}client-plant-quran.png`,    name: "Plant the Qur'an in Your Heart",  scale: 1.6 },
              { src: `${import.meta.env.BASE_URL}client-hitg.png`,           name: "Hufaaz in the Gambia"                  },
            ].map((logo, i) => (
              <div
                key={`${setIdx}-${i}`}
                title={logo.name}
                className="shrink-0 flex items-center justify-center h-20"
                style={{ marginRight: "4rem" }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-auto object-contain"
                  style={{
                    height: `${(logo.scale ?? 1) * 100}%`,
                    opacity: logo.opacity ?? 1,
                    filter: "grayscale(1) brightness(0.6) contrast(1.1)",
                    transition: "filter 0.3s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0) brightness(1) contrast(1)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1) brightness(0.6) contrast(1.1)")}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* LaunchPad Section */}
      <section className="py-24 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9CB633] inline-block" />
              <span className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Promo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Solotech LaunchPad</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Need a professional website fast? We build clean, modern business websites in just 24 hours.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-white/40"}`}>Monthly</span>
            <button
              data-testid="billing-toggle"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? "bg-[#9CB633]" : "bg-white/15"}`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                animate={{ left: isAnnual ? "calc(100% - 28px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-white/40"}`}>Annual</span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#9CB633]/20 text-[#9CB633] border border-[#9CB633]/30"
                >
                  Save D{ANNUAL_SAVINGS.toLocaleString()}
                </motion.span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(30,10,50,0.95) 0%, rgba(8,4,20,0.98) 60%, rgba(20,8,40,0.95) 100%)",
                border: "1px solid rgba(138,80,200,0.22)",
                boxShadow: "0 0 0 1px rgba(89,44,114,0.12), 0 0 40px rgba(89,44,114,0.10), inset 0 1px 0 rgba(160,100,255,0.10)",
              }}
            >
              {/* Top glowing stroke accent */}
              <div className="absolute top-0 left-8 right-8 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(138,80,200,0.6), transparent)" }} />
              {/* Subtle corner glow */}
              <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none rounded-full" style={{ background: "radial-gradient(circle, rgba(89,44,114,0.18) 0%, transparent 70%)", filter: "blur(30px)" }} />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-1 text-white/90">
                  <em className="not-italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: "rgba(200,170,255,0.9)" }}>Starter</em>{" "}
                  <span className="not-italic font-semibold text-white/80">Package</span>
                </h3>
                <p className="text-purple-300/40 text-sm mb-6">One-time fee — no subscription</p>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-4xl font-bold" style={{ color: "rgba(180,140,255,0.95)", textShadow: "0 0 30px rgba(138,80,200,0.4)" }}>D5,000</span>
                </div>
                <p className="text-purple-400/40 text-sm mb-8">One-time payment</p>

                {/* Thin divider */}
                <div className="h-px mb-6 w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(138,80,200,0.3), transparent)" }} />

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "1-page professional website",
                    "Mobile responsive design",
                    "Delivered in 24 hours",
                    "Perfect for startups & small businesses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center" style={{ border: "1px solid rgba(138,80,200,0.5)", boxShadow: "0 0 8px rgba(138,80,200,0.25)" }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(180,140,255,0.8)" }} />
                      </div>
                      <span className="text-white/65 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full rounded-full py-3 px-8 text-sm font-semibold transition-all hover:scale-[1.02]" style={{ background: "transparent", border: "1px solid rgba(138,80,200,0.45)", color: "rgba(200,170,255,0.9)", boxShadow: "0 0 16px rgba(89,44,114,0.15), inset 0 1px 0 rgba(160,100,255,0.08)" }}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Pro Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl flex flex-col overflow-hidden md:-mt-8"
              style={{
                background: "linear-gradient(160deg, rgba(55,20,90,0.97) 0%, rgba(15,6,35,0.99) 55%, rgba(35,12,65,0.97) 100%)",
                border: "1px solid rgba(160,80,220,0.45)",
                boxShadow: "0 0 0 1px rgba(120,50,180,0.22), 0 0 70px rgba(100,30,160,0.45), 0 0 140px rgba(89,44,114,0.25), inset 0 1px 0 rgba(200,150,255,0.18)",
              }}
            >
              {/* Top glowing stroke — brighter on pro */}
              <div className="absolute top-0 left-6 right-6 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(200,120,255,0.95), transparent)" }} />
              {/* Deep purple neon — top-right bloom */}
              <div className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(140,50,200,0.55) 0%, rgba(100,30,160,0.28) 40%, transparent 70%)", filter: "blur(30px)" }} />
              {/* Deep purple neon — centre ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(100,30,160,0.18) 0%, transparent 65%)", filter: "blur(20px)" }} />
              {/* Bottom corner glow */}
              <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(120,40,180,0.30) 0%, transparent 70%)", filter: "blur(28px)" }} />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-1 text-white/90">
                  <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: "rgba(210,180,255,0.95)" }}>Pro</em>{" "}
                  <span className="font-semibold text-white/85">Package</span>
                </h3>
                <p className="text-purple-300/40 text-sm mb-6">Full website + ongoing support</p>

                {/* Animated Price */}
                <div className="mb-1 flex items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={proPrice}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold"
                      style={{ color: "rgba(200,165,255,0.98)", textShadow: "0 0 40px rgba(138,80,200,0.55)" }}
                    >
                      D{proPrice.toLocaleString()}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-purple-300/50 text-lg font-normal mb-1">{proLabel}</span>
                </div>

                {/* Savings */}
                <div className="h-6 mb-6">
                  <AnimatePresence mode="wait">
                    {isAnnual ? (
                      <motion.div key="annual-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                        <span className="text-purple-400/40 text-sm line-through">D{(PRO_MONTHLY_PRICE * 12).toLocaleString()}/year</span>
                        <span className="text-purple-300/80 text-sm font-semibold">Save D{ANNUAL_SAVINGS.toLocaleString()}</span>
                      </motion.div>
                    ) : (
                      <motion.p key="monthly-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-purple-400/40 text-sm">
                        Switch to annual to save D{ANNUAL_SAVINGS.toLocaleString()}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Thin divider */}
                <div className="h-px mb-6 w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(180,120,255,0.4), transparent)" }} />

                <ul className="space-y-3 mb-6 flex-1">
                  {[
                    "Custom domain included",
                    "Multi-page premium website",
                    "Copywriting & branding assistance",
                    "WhatsApp integration",
                    "Ongoing support & edits",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center" style={{ border: "1px solid rgba(180,120,255,0.55)", boxShadow: "0 0 10px rgba(138,80,200,0.35)" }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(210,170,255,0.9)" }} />
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* What's included toggle */}
                <button
                  data-testid="pro-details-toggle"
                  onClick={() => setShowProDetails(true)}
                  className="flex items-center gap-2 text-sm transition-colors mb-4 font-medium"
                  style={{ color: "rgba(180,140,255,0.7)" }}
                >
                  <ChevronDown size={16} />
                  See everything that's included
                </button>

                <Link href="/contact">
                  <Button className="w-full rounded-full py-3 px-8 text-sm font-semibold transition-all hover:scale-[1.02] border-0" style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.85) 0%, rgba(60,20,100,0.9) 100%)", color: "rgba(230,210,255,0.98)", boxShadow: "0 0 24px rgba(138,80,200,0.35), inset 0 1px 0 rgba(200,160,255,0.15)", border: "1px solid rgba(180,120,255,0.3)" }}>
                    Get Pro — D{proPrice.toLocaleString()}{proLabel}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pro Details Modal */}
      <AnimatePresence>
        {showProDetails && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProDetails(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="fixed bottom-0 left-0 right-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full z-50 glass-panel rounded-t-3xl md:rounded-3xl border border-[#1E0A32]/40 max-h-[85vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#0a0a14]/90 backdrop-blur-xl p-6 border-b border-white/10 flex items-start justify-between rounded-t-3xl">
                <div>
                  <div className="text-xs font-semibold text-[#9CB633] uppercase tracking-wider mb-1">Pro Package</div>
                  <h3 className="text-2xl font-bold text-white">Everything That's Included</h3>
                  <p className="text-white/50 text-sm mt-1">
                    {isAnnual
                      ? `D${PRO_ANNUAL_PRICE.toLocaleString()}/year — saving you D${ANNUAL_SAVINGS.toLocaleString()} vs monthly`
                      : `D${PRO_MONTHLY_PRICE.toLocaleString()}/month — switch to annual to save D${ANNUAL_SAVINGS.toLocaleString()}`}
                  </p>
                </div>
                <button
                  data-testid="pro-details-close"
                  onClick={() => setShowProDetails(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0 ml-4"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {proDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#1E0A32]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1E0A32]/25 flex items-center justify-center text-[#9CB633] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{item.label}</div>
                      <div className="text-white/55 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="sticky bottom-0 bg-[#0a0a14]/90 backdrop-blur-xl p-6 border-t border-white/10">
                <Link href="/contact" onClick={() => setShowProDetails(false)}>
                  <Button className="w-full bg-gradient-solotech text-white rounded-full py-3 px-8 text-base hover:opacity-90 transition-all hover:scale-[1.02]">
                    Get Pro — D{proPrice.toLocaleString()}{proLabel}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-white/60">Comprehensive digital solutions for modern brands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code size={32} />, title: "Web Development", desc: "Websites designed to convert visitors into paying customers." },
              { icon: <Paintbrush size={32} />, title: "Branding & Design", desc: "Identities that make your brand impossible to forget." },
              { icon: <Share2 size={32} />, title: "Social Media", desc: "Content that builds communities and drives engagement." },
              { icon: <Camera size={32} />, title: "Photo & Video", desc: "Visual storytelling that captivates and converts." },
              { icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Campaigns that bring the right customers to your door." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl group hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <div className="mb-6 text-[#9CB633] group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FixIT Featured Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/30">
        {/* Background orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT — Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-7"
            >
              <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8">
                <Zap size={12} className="text-[#9CB633]" />
                <span className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Solotech FixIT</span>
                <span className="ml-1 text-[10px] bg-[#9CB633]/20 text-[#9CB633] px-2 py-0.5 rounded-full font-semibold">⚡ Fast Support</span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Modern Tech Support<br />To Your Doorstep
                </h2>
                <p className="text-white/55 text-lg leading-relaxed">
                  Solotech FixIT delivers tech support, troubleshooting, setup, and digital assistance right to your doorstep — keeping businesses and individuals productive, connected, and online.
                </p>
              </div>

              {/* Feature pills */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Globe size={16} />, label: "Website Fixes" },
                  { icon: <Monitor size={16} />, label: "Device Support" },
                  { icon: <Settings size={16} />, label: "Digital Setup" },
                  { icon: <Headphones size={16} />, label: "Tech Assistance" },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-[#9CB633]/40 hover:bg-[#9CB633]/5 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/30 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{f.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/services/fixit">
                  <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-7 py-3 rounded-full font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                    Explore FixIT <ArrowUpRight size={16} />
                  </Button>
                </Link>
                <a href={`https://wa.me/2207532757?text=${encodeURIComponent("Hi Solotech FixIT! I need technical support.")}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-7 py-3 font-semibold h-auto gap-2">
                    <MessageSquare size={15} className="text-[#9CB633]" /> Request Support
                  </Button>
                </a>
              </div>

              <p className="text-white/25 text-[10px] md:text-xs tracking-wide">Fast response · Reliable support · Modern solutions</p>
            </motion.div>

            {/* RIGHT — Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative flex items-center justify-center min-h-[340px] md:min-h-[380px]"
            >
              {/* Outer ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full pointer-events-none"
                style={{ border: "2px solid rgba(156,182,51,0.25)", boxShadow: "0 0 60px rgba(156,182,51,0.1)" }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full pointer-events-none"
                style={{ border: "2px solid rgba(89,44,114,0.35)", boxShadow: "0 0 40px rgba(89,44,114,0.15)" }}
              />

              {/* Central icon */}
              <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.4), rgba(156,182,51,0.2))", border: "1px solid rgba(156,182,51,0.3)", boxShadow: "0 0 40px rgba(89,44,114,0.3)" }}>
                <Shield size={40} className="text-[#9CB633] md:w-12 md:h-12" />
              </div>

              {/* Floating stat cards — spaced to not overflow on mobile */}
              {[
                { label: "Response Time", value: "< 1hr",  pos: "top-2 left-2 md:top-4 md:left-0",     color: "border-[#9CB633]/30" },
                { label: "Issues Resolved", value: "100%", pos: "top-2 right-2 md:top-4 md:right-0",   color: "border-[#1E0A32]/40" },
                { label: "Support Types", value: "6+",     pos: "bottom-2 left-2 md:bottom-4 md:left-4", color: "border-[#1E0A32]/40" },
                { label: "Satisfaction", value: "⭐ 5.0",  pos: "bottom-2 right-2 md:bottom-4 md:right-4", color: "border-[#9CB633]/30" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className={`absolute ${card.pos} px-3 py-2 md:px-4 md:py-2.5 rounded-xl border ${card.color} backdrop-blur-sm`}
                  style={{ background: "rgba(10,10,20,0.88)" }}
                >
                  <div className="text-white/40 text-[9px] md:text-[10px] font-medium uppercase tracking-wide">{card.label}</div>
                  <div className="text-white font-bold text-sm md:text-base">{card.value}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Work — scroll-driven horizontal */}
      <WorkSection />

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Solotech?</h2>
            <p className="text-xl text-white/60">Built different. Delivering results.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={28} />, title: "Fast Delivery", desc: "We move quickly without cutting corners. Most projects delivered ahead of schedule — including websites in 24 hours." },
              { icon: <Award size={28} />, title: "Creative Excellence", desc: "We hold our work to a global standard. Every pixel, every word, every interaction is considered and crafted." },
              { icon: <Heart size={28} />, title: "Affordable Professional Solutions", desc: "World-class quality doesn't have to break the bank. We price fairly so every ambitious business can access premium digital services." },
              { icon: <Globe size={28} />, title: "Built for African Businesses", desc: "We understand the African market deeply — the culture, the customers, the platforms. We design for real people in real contexts." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex gap-6 items-start group hover:border-[#1E0A32]/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1E0A32]/25 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/35 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: heading + list */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-white/50 text-lg mb-10">A clear, structured process that keeps you in the loop and delivers results, maximizing your business's potential for growth.</p>

              <ul className="divide-y divide-white/8">
                {[
                  { title: "Discovery",       desc: "We learn about your business, goals, and audience to make sure everything we build is aligned with what you need." },
                  { title: "Strategy",        desc: "We plan the right approach — choosing the tools, platforms, and design direction that will drive real results."    },
                  { title: "Design & Build",  desc: "We bring your vision to life with pixel-perfect design and clean, fast development — always on time."             },
                  { title: "Launch & Growth", desc: "We go live, then stay close — monitoring performance and helping your digital presence grow over time."           },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 py-4"
                  >
                    <div className="w-5 h-5 rounded-full border border-[#9CB633] bg-[#9CB633]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#9CB633]" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-0.5">{item.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: animated circle infographic */}
            <ProcessInfographic />

          </div>
        </div>
      </section>

      {/* Who We Work With + Founder Split Section */}
      <section className="py-28 px-6 md:px-12 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT — Who We Work With */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Who We Work With</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ lineHeight: 1.1 }}>Built for Ambitious <span style={{ background: "linear-gradient(135deg, #9CB633 0%, #592C72 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block" }}>Brands</span></h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  We partner with businesses, startups, organizations, and individuals looking to build powerful digital presence and stand out in a competitive world.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  { icon: Globe2,      label: "Small & Medium-Sized Businesses (SMEs)" },
                  { icon: Zap,         label: "Startups & Emerging Brands"             },
                  { icon: Heart,       label: "NGOs & Impact Organizations"            },
                  { icon: Award,       label: "Entrepreneurs & Founders"               },
                  { icon: Share2,      label: "Personal Brands & Creators"             },
                  { icon: TrendingUp,  label: "B2B & Consumer-Focused Companies"       },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-[#1E0A32]/50 hover:bg-[#1E0A32]/8 transition-all duration-300 cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1E0A32]/15 border border-[#1E0A32]/25 flex items-center justify-center shrink-0 group-hover:bg-[#1E0A32]/25 transition-colors">
                      <item.icon size={16} className="text-[#9CB633]" />
                    </div>
                    <span className="text-white/75 text-sm font-medium group-hover:text-white transition-colors">{item.label}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/contact">
                  <Button variant="outline" className="border-[#9CB633]/50 text-[#9CB633] hover:bg-[#9CB633]/10 hover:border-[#9CB633] rounded-full px-8 py-3 font-semibold flex items-center gap-2 group">
                    Book a Free Consultation
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Founder Profile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(89,44,114,0.3)", background: "rgba(89,44,114,0.06)" }}>

                {/* Photo */}
                <div className="relative overflow-hidden">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-25 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 100%, #1E0A32 0%, transparent 70%)" }} />
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    src={`${BASE}founder-ibraheem.png`}
                    alt="Ibraheem Al Jatta — Founder & Creative Director"
                    className="w-full object-cover"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(8,8,12,0.95) 0%, transparent 100%)" }} />
                </div>

                {/* Text content inside card */}
                <div className="px-7 pb-7 pt-2 flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Meet the Founder</p>
                    <h3 className="text-2xl font-bold text-white leading-snug">Building Digital Experiences With Purpose</h3>
                  </div>

                  <p className="text-white/55 text-sm leading-relaxed">
                    Solotech Digital was founded with a vision to help businesses, brands, and organizations create meaningful digital experiences through creativity, technology, and strategy.
                  </p>

                  <blockquote className="border-l-2 border-[#9CB633] pl-4 italic text-white/60 text-sm">
                    "We believe every brand deserves a digital presence that feels world-class."
                  </blockquote>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-[#1E0A32] shrink-0" />
                      <div>
                        <p className="text-white font-bold text-base leading-tight">Ibraheem Al Jatta</p>
                        <p className="text-[#9CB633] text-xs">Founder & Creative Director</p>
                      </div>
                    </div>
                    <Link href="/contact" className="sm:w-fit flex justify-center">
                      <Button size="sm" className="text-white rounded-full px-5 font-semibold flex items-center gap-1.5 group w-fit border-0" style={{ background: "linear-gradient(160deg, rgba(30,10,50,0.95) 0%, rgba(8,4,20,0.98) 60%, rgba(20,8,40,0.95) 100%)", border: "1px solid rgba(138,80,200,0.35)", boxShadow: "0 0 20px rgba(89,44,114,0.25)" }}>
                        Start a Project
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sh.Dr Baba Sankung Ceesay", role: "President, Al-Ihsan University", avatar: "BSC", review: "Solotech Digital brought our university into the digital age. They built us a bilingual website that our students, staff, and international partners are proud to share. The quality was world-class." },
              { name: "Abdoulie Ebrima Jammeh", role: "CEO, EJC Drilling Company", avatar: "AEJ", review: "I needed a professional website fast and Solotech delivered within 18 hours. The site is clean, loads fast, and has already brought us new clients who found us online." },
              { name: "Fatima Sonko", role: "Founder, Halal Organic Products", avatar: "FS", review: "Our product packaging went from homemade to premium overnight. The mockups Solotech created look so professional that customers think we're an international brand." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col gap-6"
              >
                <Quote size={32} className="text-[#9CB633]/50" />
                <p className="text-white/75 leading-relaxed flex-1">"{t.review}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#9CB633] flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="container mx-auto max-w-6xl">
          {/* Rotating border wrapper — 1.5px padding acts as the border */}
          <div className="relative rounded-3xl p-[1.5px] overflow-hidden"
            style={{ boxShadow: "0 0 60px rgba(156,182,51,0.18), 0 0 120px rgba(30,10,50,0.5)" }}>

            {/* Spinning conic-gradient layer — this IS the glowing stroke */}
            <div
              className="animate-cta-spin pointer-events-none"
              style={{
                position: "absolute",
                inset: "-80%",
                background: "conic-gradient(from 0deg, transparent 0%, rgba(156,182,51,0.15) 8%, #9CB633 14%, #b8d93e 19%, rgba(156,182,51,0.55) 26%, rgba(168,85,247,0.7) 38%, rgba(30,10,50,0.4) 52%, transparent 62%)",
                zIndex: 0,
              }}
            />

            {/* Inner card */}
            <div
              className="relative rounded-[22px] overflow-hidden p-12 md:p-16 text-center"
              style={{
                background: "linear-gradient(160deg, rgba(10,10,12,0.98) 0%, rgba(8,8,10,0.99) 50%, rgba(9,9,11,0.98) 100%)",
                backdropFilter: "blur(60px) saturate(180%)",
                WebkitBackdropFilter: "blur(60px) saturate(180%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 80px rgba(0,0,0,0.4)",
                zIndex: 1,
              }}
            >
              {/* Apple-glass top edge specular */}
              <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.10) 30%, rgba(200,240,100,0.18) 55%, rgba(255,255,255,0.06) 80%, transparent 95%)" }} />

              {/* Aurora — primary neon green body, anchored top-right */}
              <div className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: "60%", height: "70%",
                  background: "radial-gradient(ellipse at 100% 0%, rgba(156,182,51,0.52) 0%, rgba(140,190,60,0.26) 30%, rgba(100,155,45,0.08) 58%, transparent 75%)",
                  filter: "blur(58px)",
                }}
              />
              {/* Aurora — bright core at the corner */}
              <div className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: "28%", height: "38%",
                  background: "radial-gradient(ellipse at 100% 0%, rgba(210,245,100,0.68) 0%, rgba(156,182,51,0.34) 38%, transparent 65%)",
                  filter: "blur(26px)",
                }}
              />

              {/* Deep purple — bottom-left only */}
              <div className="absolute bottom-0 left-0 pointer-events-none"
                style={{
                  width: "50%", height: "80%",
                  background: "radial-gradient(ellipse at 0% 100%, rgba(60,20,90,0.72) 0%, rgba(35,10,60,0.40) 35%, rgba(20,6,38,0.15) 60%, transparent 78%)",
                  filter: "blur(50px)",
                }}
              />
              {/* Purple inner accent — tighter hot spot at corner */}
              <div className="absolute bottom-0 left-0 pointer-events-none"
                style={{
                  width: "22%", height: "50%",
                  background: "radial-gradient(ellipse at 0% 100%, rgba(90,30,130,0.60) 0%, rgba(55,15,85,0.28) 45%, transparent 70%)",
                  filter: "blur(28px)",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                  Ready to Grow Your Business{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9CB633] via-[#b8d93e] to-[#d4e87a]">Online?</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-10 drop-shadow">Let's build something powerful together.</p>
                <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
                  <Link href="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" className="bg-[#9CB633] hover:bg-[#8aa82d] text-white rounded-full px-10 py-3 text-base w-full font-semibold border-0 transition-colors">
                      Start a Project
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base w-full border-[#9CB633]/40 text-white/80 hover:border-[#9CB633] hover:text-[#9CB633] bg-black/50 backdrop-blur-sm transition-colors">
                      Launch My Website
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* ── Academy Featured Section ── */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT — Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-7"
            >
              <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8">
                <BookOpen size={12} className="text-[#9CB633]" />
                <span className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Solotech Academy</span>
                <span className="ml-1 text-[10px] bg-[#9CB633]/20 text-[#9CB633] px-2 py-0.5 rounded-full font-semibold">✦ Now Enrolling</span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Learn Digital Skills<br />for the Future
                </h2>
                <p className="text-white/55 text-lg leading-relaxed">
                  Solotech Academy empowers students, creators, and future innovators with practical digital skills in coding, design, marketing, AI tools, multimedia, and content creation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Code2 size={15} />, label: "Coding & Web Dev" },
                  { icon: <Layout size={15} />, label: "WordPress Design" },
                  { icon: <Sparkles size={15} />, label: "AI Tools" },
                  { icon: <TrendingUp size={15} />, label: "Digital Marketing" },
                  { icon: <Paintbrush size={15} />, label: "Graphic Design" },
                  { icon: <Camera size={15} />, label: "Content Creation" },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-[#9CB633]/40 hover:bg-[#9CB633]/5 transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/35 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-white/65 text-sm font-medium group-hover:text-white transition-colors">{f.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/academy">
                  <Button className="bg-gradient-to-r from-[#9CB633] to-[#592C72] text-white border-0 px-7 py-3 rounded-full font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                    Explore Academy <ArrowUpRight size={16} />
                  </Button>
                </Link>
                <a href={`https://wa.me/2207532757?text=${encodeURIComponent("Hi Solotech Academy! I'd like to enrol in a course.")}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-7 py-3 font-semibold h-auto gap-2">
                    <GraduationCap size={15} className="text-[#9CB633]" /> Enroll Now
                  </Button>
                </a>
              </div>

              <p className="text-white/25 text-xs tracking-wider">Practical skills · Creative learning · Future-ready training</p>
            </motion.div>

            {/* RIGHT — Futuristic visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative flex items-center justify-center min-h-[400px]"
            >
              {[300, 240, 180].map((size, i) => (
                <motion.div
                  key={size}
                  animate={{ scale: [1, 1.05 + i * 0.02, 1], opacity: [0.29 - i * 0.04, 0.51 - i * 0.04, 0.29 - i * 0.04] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size, height: size,
                    border: `2px solid ${i % 2 === 0 ? "rgba(156,182,51,0.29)" : "rgba(89,44,114,0.39)"}`,
                    boxShadow: `0 0 ${30 + i * 10}px ${i % 2 === 0 ? "rgba(156,182,51,0.08)" : "rgba(89,44,114,0.11)"}`,
                  }}
                />
              ))}

              <div className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(156,182,51,0.35), rgba(89,44,114,0.35))", border: "1px solid rgba(156,182,51,0.35)", boxShadow: "0 0 50px rgba(156,182,51,0.2), 0 0 20px rgba(89,44,114,0.2)" }}>
                <GraduationCap size={44} className="text-[#9CB633]" />
              </div>

              {[
                { icon: <Code2 size={15} />, pos: "top-8 left-10", delay: 0 },
                { icon: <Paintbrush size={15} />, pos: "top-8 right-10", delay: 0.5 },
                { icon: <Sparkles size={15} />, pos: "bottom-8 left-10", delay: 1 },
                { icon: <Camera size={15} />, pos: "bottom-8 right-10", delay: 1.5 },
              ].map((o, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
                  className={`absolute ${o.pos} w-10 h-10 rounded-xl flex items-center justify-center text-[#9CB633]`}
                  style={{ background: "rgba(8,8,18,0.92)", border: "1px solid rgba(156,182,51,0.3)", boxShadow: "0 0 18px rgba(156,182,51,0.12)" }}
                >
                  {o.icon}
                </motion.div>
              ))}

              {[
                { label: "Programs", value: "6+", pos: "top-4 right-2", color: "border-[#9CB633]/30" },
                { label: "Skill Level", value: "All Levels", pos: "bottom-4 left-2", color: "border-[#1E0A32]/40" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className={`absolute ${card.pos} px-4 py-2.5 rounded-xl border ${card.color} backdrop-blur-sm`}
                  style={{ background: "rgba(10,10,20,0.88)" }}
                >
                  <div className="text-white/40 text-[10px] font-medium uppercase tracking-wide">{card.label}</div>
                  <div className="text-white font-bold text-base">{card.value}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
