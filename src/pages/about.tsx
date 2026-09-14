import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Globe, Zap, Award } from "lucide-react";
import SeoHead from "@/components/seo-head";
import SocialLinks from "@/components/social-links";

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const team = [
  {
    name: "Ebrima Jallow",
    role: "Founder & Creative Director",
    bio: "A visionary designer with 8+ years crafting digital experiences for brands across West Africa and beyond.",
    avatar: "EJ",
  },
  {
    name: "Mariama Ceesay",
    role: "Lead Web Developer",
    bio: "Full-stack engineer passionate about building fast, conversion-focused websites that actually work for clients.",
    avatar: "MC",
  },
  {
    name: "Omar Touray",
    role: "Brand Strategist",
    bio: "Helps businesses find their voice and visual identity in a crowded market — with precision and creativity.",
    avatar: "OT",
  },
  {
    name: "Fatima Bah",
    role: "Social Media Manager",
    bio: "Builds communities and drives engagement for brands across Instagram, Facebook, LinkedIn and beyond.",
    avatar: "FB",
  },
];

const values = [
  {
    icon: <Zap size={28} />,
    title: "Speed Without Compromise",
    desc: "We move fast — but never at the expense of quality. Every deliverable is built to last.",
  },
  {
    icon: <Award size={28} />,
    title: "Creative Excellence",
    desc: "We hold our work to a global standard. Our designs compete with the best in the world.",
  },
  {
    icon: <Heart size={28} />,
    title: "Client-First Always",
    desc: "Every decision we make is in service of your growth. Your success is literally our business.",
  },
  {
    icon: <Globe size={28} />,
    title: "Built for Africa, Built for the World",
    desc: "We understand the African market deeply — and we design experiences that resonate globally.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="About Us"
        path="/about"
        description="Learn about Solotech Digital LLC — a next-generation creative agency based in Banjul, The Gambia. Our story, mission, vision, values, and team."
      />
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Africa's Next-Generation{" "}
              <span className="text-gradient">Creative Agency</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              We are a team of designers, developers, and storytellers united by one mission — to help African businesses compete and win in the digital age.
            </p>
            <SocialLinks className="justify-center" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Story
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p>
                  Solotech Digital was born out of a simple frustration — too many talented African businesses were being held back by poor digital presence. Local businesses with world-class products and services were invisible online.
                </p>
                <p>
                  Founded in Banjul, The Gambia, we set out to change that. We built a studio that combines the precision of global design standards with a deep understanding of the African market.
                </p>
                <p>
                  Today, we have delivered over 120 projects for clients across The Gambia, Senegal, and beyond — from small startups to established NGOs and enterprise brands.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "120+", label: "Projects Delivered" },
                { num: "40+", label: "Happy Clients" },
                { num: "5★", label: "Average Rating" },
                { num: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.num}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              className="glass-panel p-10 rounded-3xl border-[#1E0A32]/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1E0A32]/25 flex items-center justify-center mb-6">
                <Target size={24} className="text-[#9CB633]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To empower African businesses with world-class digital tools — websites, brands, and content — that help them compete globally, attract more customers, and grow sustainably online.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="glass-panel p-10 rounded-3xl border-[#592C72]/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#592C72]/25 flex items-center justify-center mb-6">
                <Eye size={24} className="text-[#b8d93e]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                A future where every African business has a premium digital presence — where innovation and creativity from The Gambia and beyond shape the global digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-white/60">The principles that guide everything we build.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex gap-6 items-start group hover:border-[#1E0A32]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E0A32]/25 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#1E0A32]/35 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/60">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-white/60">The creative minds behind Solotech Digital.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl text-center group hover:border-[#1E0A32]/50 transition-colors"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#9CB633] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <div className="text-sm text-[#9CB633] mb-4 font-medium">{member.role}</div>
                <p className="text-white/55 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-white/60 mb-10">Let's build something that sets your business apart.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base hover:scale-105 transition-transform">
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
