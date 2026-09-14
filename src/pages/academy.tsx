import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Code2, Layout, Sparkles, TrendingUp, Paintbrush, Camera,
  ArrowUpRight, BookOpen, Users, Lightbulb, Rocket, CheckCircle,
  GraduationCap, Laptop, Layers, MessageCircle, Star, Globe,
  ChevronRight, Play, Award, Zap
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

const programs = [
  {
    icon: <Code2 size={28} />,
    title: "Coding & Web Development",
    desc: "Learn HTML, CSS, JavaScript, and modern website creation from the ground up.",
    color: "hover:border-[#9CB633]/60",
    accent: "bg-[#9CB633]/10 border-[#9CB633]/25 text-[#9CB633]",
    tag: "Beginner → Pro",
  },
  {
    icon: <Layout size={28} />,
    title: "WordPress & Website Design",
    desc: "Build professional websites without writing a single line of code.",
    color: "hover:border-[#1E0A32]/60",
    accent: "bg-[#1E0A32]/20 border-[#1E0A32]/30 text-[#9CB633]",
    tag: "No-Code",
  },
  {
    icon: <Sparkles size={28} />,
    title: "AI Tools & Digital Productivity",
    desc: "Learn modern AI tools for content, design, automation, and productivity.",
    color: "hover:border-purple-500/50",
    accent: "bg-purple-500/10 border-purple-500/25 text-purple-400",
    tag: "Future Skills",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Digital Marketing",
    desc: "Social media marketing, ads, branding, and online growth strategies.",
    color: "hover:border-[#592C72]/60",
    accent: "bg-[#592C72]/15 border-[#592C72]/30 text-[#b8d93e]",
    tag: "Growth",
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Branding & Graphic Design",
    desc: "Logo design, visual identity, and modern branding systems.",
    color: "hover:border-[#9CB633]/50",
    accent: "bg-[#9CB633]/10 border-[#9CB633]/25 text-[#9CB633]",
    tag: "Creative",
  },
  {
    icon: <Camera size={28} />,
    title: "Content Creation & Photography",
    desc: "Photography, videography, editing, storytelling, and creative production.",
    color: "hover:border-[#9CB633]/50",
    accent: "bg-[#1E0A32]/25 border-[#9CB633]/20 text-[#9CB633]",
    tag: "Media",
  },
];

const learningFeatures = [
  { icon: <Laptop size={20} />, title: "Hands-on Training", desc: "Real projects, not just theory" },
  { icon: <Layers size={20} />, title: "Project-Based Learning", desc: "Build a portfolio from day one" },
  { icon: <Lightbulb size={20} />, title: "Creative Mentorship", desc: "Guided by industry professionals" },
  { icon: <Zap size={20} />, title: "Modern Digital Tools", desc: "Learn the tools used in the real world" },
  { icon: <CheckCircle size={20} />, title: "Beginner-Friendly", desc: "No prior experience required" },
  { icon: <Award size={20} />, title: "Industry-Relevant Skills", desc: "Curriculum built for today's market" },
];

const audienceCards = [
  { icon: <GraduationCap size={24} />, label: "Students", desc: "Build skills that open career doors" },
  { icon: <Rocket size={24} />, label: "Entrepreneurs", desc: "Grow your business with digital tools" },
  { icon: <Camera size={24} />, label: "Creators", desc: "Level up your content and craft" },
  { icon: <Laptop size={24} />, label: "Freelancers", desc: "Expand your service offerings" },
  { icon: <Globe size={24} />, label: "Small Business Owners", desc: "Go digital and reach more customers" },
  { icon: <Sparkles size={24} />, label: "Beginners in Tech", desc: "Start your digital journey today" },
];

export default function Academy() {
  return (
    <>
      <SeoHead
        title="Solotech Academy — Digital Skills for the Next Generation"
        description="Learn practical creative and technology skills at Solotech Academy. Coding, design, AI tools, digital marketing, and more — designed for students, entrepreneurs, and creators in The Gambia."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(156,182,51,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(156,182,51,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.35) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-8%] w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.22) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.2) 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9CB633]/35 bg-[#9CB633]/8 text-[#9CB633] text-xs font-bold uppercase tracking-widest">
              <BookOpen size={12} />
              Solotech Academy
              <span className="ml-1 bg-[#9CB633]/20 px-2 py-0.5 rounded-full text-[10px]">✦ Now Enrolling</span>
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Digital Skills for the{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #9CB633 0%, #b8d93e 50%, #7a3d9e 100%)" }}>
              Next Generation
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Learn practical creative and technology skills designed to help students, entrepreneurs, and creators thrive in the modern digital world.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a href="#programs">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-9 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                <Play size={16} />
                Explore Programs
              </Button>
            </a>
            <a href={waLink("Hi Solotech Academy! I'd like to enrol in a course.")} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-9 py-4 text-base font-semibold h-auto gap-2">
                <MessageCircle size={16} />
                Enroll Today
              </Button>
            </a>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-white/25 text-xs tracking-wider"
          >
            Learn · Create · Innovate
          </motion.p>

          {/* Floating stat pills */}
          <div className="hidden md:flex items-center justify-center gap-6 mt-14">
            {[
              { label: "Programs", value: "6+" },
              { label: "Skill Levels", value: "All Levels" },
              { label: "Format", value: "Hands-on" },
              { label: "Location", value: "Banjul, Gambia" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.08 }}
                className="glass-panel px-5 py-3 rounded-2xl"
              >
                <div className="text-white font-bold text-lg">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-24 px-6 md:px-12 bg-black/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.15) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">What You'll Learn</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Six practical courses designed to give you real, marketable digital skills.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative glass-panel flex flex-col gap-5 p-7 rounded-2xl ${p.color} transition-all duration-300 cursor-default`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(89,44,114,0.12) 0%, transparent 60%)" }} />

                <div className="flex items-start justify-between gap-3">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 ${p.accent} group-hover:scale-105 transition-transform duration-300`}>
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 border border-white/10 px-2.5 py-1 rounded-full mt-1">
                    {p.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#9CB633] transition-colors duration-300">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex items-center gap-2 text-[#9CB633]/60 group-hover:text-[#9CB633] transition-colors text-sm font-medium mt-auto">
                  <span>Learn more</span>
                  <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING EXPERIENCE ── */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.1) 0%, transparent 70%)", filter: "blur(90px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">The Academy Experience</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Practical Learning for<br />
                <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #9CB633, #7a3d9e)" }}>
                  Real-World Skills
                </span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-10">
                Every course is designed around doing, not just watching. You'll leave with a portfolio, real skills, and the confidence to apply them immediately.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-panel flex items-start gap-4 p-4 rounded-xl hover:border-[#9CB633]/35 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/35 transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{f.title}</div>
                      <div className="text-white/45 text-xs mt-0.5">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — abstract visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative flex items-center justify-center min-h-[420px]"
            >
              {/* Pulsing rings */}
              {[320, 260, 200].map((size, i) => (
                <motion.div
                  key={size}
                  animate={{ scale: [1, 1.04 + i * 0.02, 1], opacity: [0.3 - i * 0.05, 0.55 - i * 0.05, 0.3 - i * 0.05] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size, height: size,
                    border: `1px solid ${i % 2 === 0 ? "rgba(156,182,51,0.25)" : "rgba(89,44,114,0.35)"}`,
                    boxShadow: `0 0 ${30 + i * 10}px ${i % 2 === 0 ? "rgba(156,182,51,0.08)" : "rgba(89,44,114,0.1)"}`,
                  }}
                />
              ))}

              {/* Central icon hub */}
              <div className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(89,44,114,0.5), rgba(156,182,51,0.25))", border: "1px solid rgba(156,182,51,0.35)", boxShadow: "0 0 50px rgba(89,44,114,0.35), 0 0 20px rgba(156,182,51,0.15)" }}>
                <GraduationCap size={44} className="text-[#9CB633]" />
              </div>

              {/* Orbiting icons */}
              {[
                { icon: <Code2 size={16} />, pos: "top-6 left-12", delay: 0 },
                { icon: <Paintbrush size={16} />, pos: "top-6 right-12", delay: 0.4 },
                { icon: <TrendingUp size={16} />, pos: "bottom-6 left-12", delay: 0.8 },
                { icon: <Camera size={16} />, pos: "bottom-6 right-12", delay: 1.2 },
              ].map((o, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
                  className={`absolute ${o.pos} w-10 h-10 rounded-xl flex items-center justify-center text-[#9CB633]`}
                  style={{ background: "rgba(10,10,20,0.9)", border: "1px solid rgba(156,182,51,0.3)", boxShadow: "0 0 20px rgba(89,44,114,0.25)" }}
                >
                  {o.icon}
                </motion.div>
              ))}

              {/* Floating stat cards */}
              {[
                { label: "Practical Courses", value: "6+", pos: "top-4 right-4", color: "border-[#9CB633]/30" },
                { label: "Project-Based", value: "100%", pos: "bottom-4 left-4", color: "border-[#1E0A32]/40" },
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

      {/* ── WHO CAN JOIN ── */}
      <section className="py-24 px-6 md:px-12 bg-black/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Who It's For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Future Creators & Innovators</h2>
            <p className="text-white/50 max-w-xl mx-auto">Solotech Academy welcomes anyone ready to grow. No prior experience required.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {audienceCards.map((a, i) => (
              <motion.div
                key={a.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass-panel flex flex-col items-center text-center gap-4 p-7 rounded-2xl hover:border-[#592C72]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633] group-hover:bg-[#1E0A32]/35 group-hover:scale-105 transition-all duration-300">
                  {a.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-base mb-1">{a.label}</div>
                  <div className="text-white/50 text-sm">{a.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / CREATIVE SHOWCASE ── */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Why Join Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills That Open Doors</h2>
            <p className="text-white/50 max-w-xl mx-auto">Every skill you gain at Solotech Academy is one you can apply immediately — in business, freelancing, or your creative career.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Star size={24} />, title: "Real Portfolio Projects", desc: "Build work you can show employers, clients, and the world — starting from day one." },
              { icon: <Users size={24} />, title: "Community of Creators", desc: "Join a growing network of students, creators, and entrepreneurs from across The Gambia." },
              { icon: <Globe size={24} />, title: "Globally Competitive Skills", desc: "Our curriculum matches international industry standards so you can work anywhere." },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-panel flex flex-col gap-5 p-8 rounded-2xl hover:border-[#9CB633]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#9CB633]/15 border border-[#9CB633]/25 flex items-center justify-center text-[#9CB633] group-hover:bg-[#9CB633]/25 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
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
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <div className="absolute -top-10 left-1/4 w-64 h-40 rounded-full bg-[#1E0A32]/25 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-8 right-1/4 w-56 h-40 rounded-full bg-[#9CB633]/15 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-4">Start Learning</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Your Digital Journey Today</h2>
                <p className="text-white/50 mb-8 text-lg">Join Solotech Academy and gain the skills to create, innovate, and succeed in the digital world.</p>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-xs mx-auto md:max-w-none">
                  <a href={waLink("Hi Solotech Academy! I'd like to enrol in a course.")} target="_blank" rel="noopener noreferrer" className="md:flex-none">
                    <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2 w-full">
                      <MessageCircle size={18} />
                      Enroll Now
                    </Button>
                  </a>
                  <a href={waLink("Hi! I have a question about Solotech Academy.")} target="_blank" rel="noopener noreferrer" className="md:flex-none">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-8 py-4 text-base font-semibold h-auto gap-2 w-full">
                      Contact Academy
                      <ArrowUpRight size={16} />
                    </Button>
                  </a>
                </div>
                <p className="mt-6 text-white/25 text-xs tracking-wider">Creative learning · Modern skills · Future opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
