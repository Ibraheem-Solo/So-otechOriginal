import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowRight, Star, Quote } from "lucide-react";
import SeoHead from "@/components/seo-head";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Category = "All" | "Web" | "Brand";

const BASE = import.meta.env.BASE_URL;

interface Project {
  title: string;
  client: string;
  category: Category;
  desc: string;
  longDesc?: string;
  tags: string[];
  image: string;
  imageBg?: string;
  url?: string;
}

interface SalonImage {
  title: string;
  tags: string[];
  image: string;
  colSpan?: 2;
  rowSpan?: 2;
}

const salonImages: SalonImage[] = [
  { title: "Beauty Install — Hair Poster",  tags: ["Braiding", "Frontal Install", "Print"], image: `${BASE}salon-2.jpg`, colSpan: 2, rowSpan: 2 },
  { title: "Posters Installed In-Situ",     tags: ["Print", "Installation"],                image: `${BASE}salon-6.jpg`, rowSpan: 2 },
  { title: "Braiding & Tatoo",              tags: ["Braiding", "Henna", "Print"],           image: `${BASE}salon-5.jpg`, colSpan: 2 },
  { title: "Salon Entrance Display",        tags: ["Print", "Installation", "Photo"],       image: `${BASE}salon-1.jpg`, rowSpan: 2 },
  { title: "Get Makeup That Shine",         tags: ["Makeup", "Nail Fixing", "Print"],       image: `${BASE}salon-3.jpg` },
  { title: "Make-Up Services",              tags: ["Makeup", "Gold Theme", "Print"],        image: `${BASE}salon-4.jpg` },
];

interface EventFlyer {
  title: string;
  client: string;
  tags: string[];
  image: string;
  colSpan?: 2;
  rowSpan?: 2;
}

const eventFlyers: EventFlyer[] = [
  { title: "Qur'anic Recitation Program on JTV",          client: "Juwara TV (JTV) — The Gambia",                tags: ["Event Flyer", "TV Promo", "Islamic"],        image: `${BASE}events/event-01.jpg`, colSpan: 2 },
  { title: "Tadabburul Al-Qur'an — Scholars Edition",     client: "Young Talented Gambian Reciters × Rihla",    tags: ["Event Flyer", "Conference", "Qur'an"],       image: `${BASE}events/event-03.jpg`, rowSpan: 2 },
  { title: "Tadabburul Al-Qur'an — Final Update",         client: "Young Talented Gambian Reciters × Rihla",    tags: ["Event Flyer", "Conference", "Qur'an"],       image: `${BASE}events/event-02.jpg` },
  { title: "Alif Boarding School — Graduation Ceremony",  client: "Alif Quranic Boarding School",               tags: ["Event Flyer", "Graduation", "Education"],    image: `${BASE}events/event-04.jpg` },
  { title: "Plant the Qur'an in Your Heart — Reciters",   client: "SPOT Project",                               tags: ["Event Flyer", "Qur'an", "Competition"],      image: `${BASE}events/event-05.jpg` },
  { title: "Plant the Qur'an — Dr Lo Topic",              client: "SPOT Project",                               tags: ["Event Flyer", "Islamic", "Arabic"],           image: `${BASE}events/event-06.jpg` },
  { title: "Islamic Conference — Masjid Quba Youth",      client: "Shabab Masjid Quba",                         tags: ["Event Flyer", "Conference", "Arabic"],        image: `${BASE}events/event-07.jpg` },
  { title: "Sukuta Week 2025 — 7th Edition",              client: "Sukuta VDC",                                 tags: ["Event Flyer", "Community", "Sports"],         image: `${BASE}events/event-08.jpg` },
  { title: "Dunya to Deen Conference",                    client: "Muslim Hussain Foundation",                  tags: ["Event Flyer", "Conference", "Islamic"],       image: `${BASE}events/event-09.jpg` },
  { title: "Alif Boarding School — Grand Opening",        client: "Alif Quranic Boarding School",               tags: ["Event Flyer", "Grand Opening", "Education"],  image: `${BASE}events/event-10.jpg` },
  { title: "Annual Islamic Conference — Fawzaan Center",  client: "Fawzaan Quranic Memorization Center",        tags: ["Event Flyer", "Conference", "Islamic"],       image: `${BASE}events/event-11.jpg`, colSpan: 2 },
  { title: "Voilez-Vous Group Seminars — Conference",     client: "Voilez-Vous × United Islamic Association",  tags: ["Event Flyer", "Conference", "Gambia"],        image: `${BASE}events/event-12.jpg`, rowSpan: 2 },
  { title: "Keneba Students Union — Annual Workshop",     client: "Keneba Students Union × JTV",                tags: ["Event Flyer", "Workshop", "Education"],       image: `${BASE}events/event-13.jpg` },
  { title: "Kids Quranic Competition — 3rd Edition",      client: "Huffaz in the Gambia (HITG)",                tags: ["Event Flyer", "Competition", "Children"],     image: `${BASE}events/event-14.jpg` },
];

const projects: Project[] = [
  {
    title: "Al-Ihsan University Website",
    client: "Al-Ihsan University",
    category: "Web",
    desc: "Full university website build for one of The Gambia's leading Islamic academic institutions. Multilingual, responsive, and CMS-powered.",
    longDesc: "Solotech Digital designed and developed a full-featured bilingual university website for Al-Ihsan University. The site features a responsive layout, CMS integration for staff to update content, student information pages, and an enrolment section. Launched at alihsanuniversity.org.",
    tags: ["Web Design", "CMS", "Multilingual"],
    image: `${BASE}portfolio/alihsan-website.jpg`,
    url: "https://alihsanuniversity.org",
  },
  {
    title: "EJC Drilling Company Website",
    client: "EJC Drilling Company",
    category: "Web",
    desc: "Modern website for a borehole drilling & electrical services company — launched within days. Clean layout, mobile-responsive, and conversion-focused.",
    longDesc: "EJC Drilling Company needed a professional web presence fast. We delivered a sleek, mobile-first website showcasing their borehole drilling and electrical services, project gallery, and contact forms — all live within 18 hours. Visit ejcdrilling.com.",
    tags: ["Web Design", "Business", "Responsive"],
    image: `${BASE}portfolio/ejc-website.jpg`,
    url: "https://ejcdrilling.com",
  },
  {
    title: "MJ's Building Essentials",
    client: "MJ's Building Essentials",
    category: "Brand",
    desc: "End-to-end brand identity system — logo, business cards, uniforms, vehicle wrap, signage, and branded merchandise for a construction materials company.",
    longDesc: "A comprehensive brand system built from the ground up. We created the logo, designed branded uniforms, business cards, a vehicle livery, a site signboard, branded mugs, hard hats, and letterheads — everything a growing construction business needs to look the part.",
    tags: ["Branding", "Logo", "Print", "Merchandise"],
    image: `${BASE}portfolio/mjs-building-brand.jpg`,
  },
  {
    title: "Halal Organic — Jar Mockup",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Premium product packaging and 3D label mockup for Halal Organic's skincare line. Nature-inspired design with Gambian roots.",
    longDesc: "Halal Organic Products needed packaging that matched their premium, natural brand. We designed the label system and produced photorealistic 3D mockups that they use across their marketing materials and social media.",
    tags: ["Packaging", "Label Design", "3D Mockup"],
    image: `${BASE}portfolio/halal-jar.jpg`,
  },
  {
    title: "Halal Glow Soap Label",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Cosmetic label design for Halal Organic's Glow Soap — showcasing ingredients, branding, and Gambia-made identity on a premium bottle mockup.",
    longDesc: "Part of the Halal Organic packaging suite, the Glow Soap label was designed to clearly communicate ingredients, product benefits, and the brand's 'Made in The Gambia' identity — all within a clean, trustworthy cosmetic aesthetic.",
    tags: ["Label Design", "Cosmetics", "Print"],
    image: `${BASE}portfolio/halal-bottle.jpg`,
  },
  {
    title: "Regal TV — Brand Identity",
    client: "Regal TV",
    category: "Brand",
    desc: "Corporate brand collateral for a Gambian media brand — letterhead, business cards, and stationery system with bold purple and gold palette.",
    longDesc: "Regal TV is a Gambian media company that needed professional brand stationery to match their on-air presence. We designed a cohesive set of materials — letterhead, business cards, and branded envelopes — using a bold purple-black-gold colour system.",
    tags: ["Branding", "Stationery", "Media"],
    image: `${BASE}portfolio/regal-tv.jpg`,
  },
  {
    title: "N.J. Building Company",
    client: "N.J. Building",
    category: "Brand",
    desc: "Professional stationery and brand identity for a construction company — dark, bold, and built to impress clients at first glance.",
    longDesc: "N.J. Building required a premium, corporate identity to win larger contracts. We delivered a bold red-and-dark brand stationery set including business cards, letterheads, and company profile materials that communicate strength and professionalism.",
    tags: ["Branding", "Stationery", "Construction"],
    image: `${BASE}portfolio/nj-building.jpg`,
  },
  {
    title: "The Loss of Parental Love",
    client: "Fatima Sonko",
    category: "Brand",
    desc: "Book cover design for a Gambian author's debut novel. Emotive, illustration-driven cover that captures the story's heart.",
    longDesc: "Fatima Sonko's debut novel required a cover that would stop readers in their tracks. We created an emotive, AI-illustration-driven cover design that captures the warmth and sorrow at the core of the story — published and available in The Gambia.",
    tags: ["Book Cover", "Print", "Illustration"],
    image: `${BASE}portfolio/book-cover.jpg`,
  },
  {
    title: "Alif Qur'anic Boarding School",
    client: "Alif School",
    category: "Brand",
    desc: "Brand identity for a prestigious Qur'anic boarding school — logo, badge mockups, and brand assets reflecting heritage and excellence.",
    longDesc: "Alif Qur'anic Boarding School needed a brand identity that honoured their Islamic heritage while projecting modern excellence. We designed the crest-style logo, produced branded badge mockups, and built out a full visual identity system.",
    tags: ["Logo", "Education", "Branding"],
    image: `${BASE}portfolio/alif-badge.jpg`,
  },
];

const categories: Category[] = ["All", "Web", "Brand"];

const categoryCounts: Record<string, number> = {
  All: projects.length,
  Web: projects.filter((p) => p.category === "Web").length,
  Brand: projects.filter((p) => p.category === "Brand").length,
};

function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  index,
  total,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  index: number;
  total: number;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      key="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        key={project.title}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image panel */}
        <div className={`relative md:w-3/5 flex-shrink-0 ${project.imageBg ?? "bg-[#0d0d1a]"} flex items-center justify-center min-h-[280px] md:min-h-0`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[50vh] md:max-h-[90vh]"
          />

          {/* Nav arrows on image */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            disabled={!hasPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            disabled={!hasNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-xs border border-white/10">
            {index + 1} / {total}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 bg-[#0e0e1c] flex flex-col overflow-y-auto">
          {/* Close */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/8 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E0A32]/25 text-[#9CB633] border border-[#1E0A32]/40">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-5 flex flex-col gap-4 flex-1">
            <div>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{project.client}</p>
              <h2 className="text-2xl font-bold text-white leading-snug">{project.title}</h2>
            </div>

            <p className="text-white/65 text-sm leading-relaxed">
              {project.longDesc ?? project.desc}
            </p>

            <div>
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/55 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 flex flex-col gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#592C72] to-[#7a3d9e] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Visit Live Site <ArrowUpRight size={15} />
                </a>
              )}
              <Link href="/contact">
                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-white/8 hover:text-white transition-all"
                >
                  Start a Similar Project <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 text-xs hidden md:block">
        ← → to navigate · Esc to close
      </div>
    </motion.div>
  );
}

function SalonLightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: SalonImage;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      key="salon-lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/88 backdrop-blur-md" />

      <motion.div
        key={item.title}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image panel */}
        <div className="relative md:w-3/5 flex-shrink-0 bg-[#0d0d1a] flex items-center justify-center min-h-[280px] md:min-h-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[90vh]"
          />
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            disabled={!hasPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            disabled={!hasNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-xs border border-white/10">
            {index + 1} / {total}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 bg-[#0e0e1c] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/8 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E0A32]/25 text-[#9CB633] border border-[#1E0A32]/40">
              Print Design
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-5 flex flex-col gap-4 flex-1">
            <div>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">Lima's Glow Elegance Shine</p>
              <h2 className="text-2xl font-bold text-white leading-snug">{item.title}</h2>
            </div>

            <div>
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/55 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4">
              <Link href="/contact">
                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-white/8 hover:text-white transition-all"
                >
                  Start a Similar Project <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 text-xs hidden md:block">
        ← → to navigate · Esc to close
      </div>
    </motion.div>
  );
}

function EventFlyerLightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: EventFlyer;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      key="event-lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/88 backdrop-blur-md" />

      <motion.div
        key={item.title}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative md:w-3/5 flex-shrink-0 bg-[#0d0d1a] flex items-center justify-center min-h-[280px] md:min-h-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-contain max-h-[60vh] md:max-h-[90vh]" />
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} disabled={!hasPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} disabled={!hasNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-xs border border-white/10">
            {index + 1} / {total}
          </div>
        </div>

        <div className="flex-1 bg-[#0e0e1c] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/8 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E0A32]/25 text-[#9CB633] border border-[#1E0A32]/40">
              Event Flyer
            </span>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-5 flex flex-col gap-4 flex-1">
            <div>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{item.client}</p>
              <h2 className="text-2xl font-bold text-white leading-snug">{item.title}</h2>
            </div>
            <div>
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/55 text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link href="/contact">
                <button onClick={onClose} className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-white/8 hover:text-white transition-all">
                  Start a Similar Project <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 text-xs hidden md:block">
        ← → to navigate · Esc to close
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [salonIndex, setSalonIndex] = useState<number | null>(null);
  const [eventIndex, setEventIndex] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));
  }, [filtered.length]);

  const lightboxProject = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const openSalon = useCallback((i: number) => setSalonIndex(i), []);
  const closeSalon = useCallback(() => setSalonIndex(null), []);
  const prevSalon = useCallback(() => {
    setSalonIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);
  const nextSalon = useCallback(() => {
    setSalonIndex((i) => (i !== null && i < salonImages.length - 1 ? i + 1 : i));
  }, []);

  const openEvent = useCallback((i: number) => setEventIndex(i), []);
  const closeEvent = useCallback(() => setEventIndex(null), []);
  const prevEvent = useCallback(() => {
    setEventIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);
  const nextEvent = useCallback(() => {
    setEventIndex((i) => (i !== null && i < eventFlyers.length - 1 ? i + 1 : i));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Our Work"
        path="/work"
        description="Browse Solotech Digital's portfolio — websites, brand identities, packaging, book covers, and NGO logos for clients across The Gambia and West Africa."
      />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && lightboxIndex !== null && (
          <Lightbox
            project={lightboxProject}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filtered.length - 1}
            index={lightboxIndex}
            total={filtered.length}
          />
        )}
        {salonIndex !== null && (
          <SalonLightbox
            item={salonImages[salonIndex]}
            index={salonIndex}
            total={salonImages.length}
            onClose={closeSalon}
            onPrev={prevSalon}
            onNext={nextSalon}
            hasPrev={salonIndex > 0}
            hasNext={salonIndex < salonImages.length - 1}
          />
        )}
        {eventIndex !== null && (
          <EventFlyerLightbox
            item={eventFlyers[eventIndex]}
            index={eventIndex}
            total={eventFlyers.length}
            onClose={closeEvent}
            onPrev={prevEvent}
            onNext={nextEvent}
            hasPrev={eventIndex > 0}
            hasNext={eventIndex < eventFlyers.length - 1}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Work We're{" "}
              <span className="text-gradient">Proud Of</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Real work for real businesses. Here's a selection of the digital products, brands, and websites we've delivered for clients across The Gambia and West Africa.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { label: "Projects Delivered", value: "120+" },
              { label: "Happy Clients", value: "40+" },
              { label: "Countries", value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 pb-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightboxIndex(null); }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  active === cat
                    ? "bg-gradient-solotech text-white scale-105"
                    : "glass-panel text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
                <span className={`text-xs px-2 py-0.5 rounded-full ${active === cat ? "bg-white/20" : "bg-white/10"}`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-4 px-6 md:px-12 pb-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="glass-panel rounded-2xl overflow-hidden group hover:border-[#1E0A32]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  {/* Image */}
                  <div className={`relative h-52 overflow-hidden ${project.imageBg ?? "bg-[#0d0d1a]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <span className="flex items-center gap-1.5 px-5 py-2 bg-white text-black text-xs font-semibold rounded-full">
                          View Project <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* External link indicator for web projects */}
                    {project.url && (
                      <div className="absolute top-3 right-3">
                        <div className="w-7 h-7 rounded-full bg-[#9CB633]/20 backdrop-blur-sm flex items-center justify-center border border-[#9CB633]/30">
                          <ExternalLink size={13} className="text-[#9CB633]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{project.client}</p>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#9CB633] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/55 text-sm mb-4 leading-relaxed line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/45 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Print Design — Salon Poster Gallery */}
      <section className="py-4 px-6 md:px-12 pb-24">
        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-2">Print Design</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Salon Poster</h2>
            <p className="text-white/45 text-sm mt-2">Lima's Glow Elegance Shine — Sanyang WCR</p>
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            style={{ gridAutoRows: "260px" }}
          >
            {salonImages.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                style={{
                  gridColumn: item.colSpan === 2 ? "span 2" : "span 1",
                  gridRow: item.rowSpan === 2 ? "span 2" : "span 1",
                }}
                onClick={() => openSalon(i)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Purple glow ring */}
                <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-[#1E0A32]/60 group-hover:shadow-[inset_0_0_50px_rgba(89,44,114,0.3)] transition-all duration-300" />
                {/* Info panel — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Lima's Glow Elegance Shine</p>
                  <p className="text-white font-bold text-sm leading-snug mb-3">{item.title}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full bg-[#9CB633]/20 border border-[#9CB633]/30 text-[#9CB633] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); openSalon(i); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#9CB633] transition-colors duration-200"
                  >
                    View Full Poster <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Flyers Gallery */}
      <section className="py-4 px-6 md:px-12 pb-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-2">Event Design</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Event Flyers</h2>
            <p className="text-white/45 text-sm mt-2">Recent Designs — Most Recent First</p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            style={{ gridAutoRows: "260px" }}
          >
            {eventFlyers.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                style={{
                  gridColumn: item.colSpan === 2 ? "span 2" : "span 1",
                  gridRow: item.rowSpan === 2 ? "span 2" : "span 1",
                }}
                onClick={() => openEvent(i)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-[#1E0A32]/60 group-hover:shadow-[inset_0_0_50px_rgba(89,44,114,0.3)] transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">{item.client}</p>
                  <p className="text-white font-bold text-sm leading-snug mb-3">{item.title}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full bg-[#9CB633]/20 border border-[#9CB633]/30 text-[#9CB633] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); openEvent(i); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#9CB633] transition-colors duration-200"
                  >
                    View Full Flyer <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">

          {/* Header */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-5">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients <span className="text-gradient">Say About Us</span>
            </h2>
            {/* Aggregate rating */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-white/40 text-sm">· 120+ projects delivered</span>
            </div>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-3xl overflow-hidden mb-6 group hover:border-purple-500/25 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project thumbnail */}
              <div className="md:w-80 flex-shrink-0 h-56 md:h-auto relative overflow-hidden bg-[#0d0d1a]">
                <img
                  src={`${BASE}portfolio/alihsan-website.jpg`}
                  alt="Al-Ihsan University"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e0e1c]/60 md:to-[#0e0e1c]/80" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-sm text-white border border-white/10">
                    Web Project
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <Quote size={36} className="text-[#9CB633]/40 mb-5" />
                  <p className="text-white/85 text-lg md:text-xl leading-relaxed italic">
                    "Solotech Digital brought our university into the digital age. They built us a bilingual website that our students, staff, and international partners are proud to share. The turnaround was incredibly fast and the quality was world-class."
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#9CB633] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      BSC
                    </div>
                    <div>
                      <div className="text-white font-semibold">Sh.Dr Baba Sankung Ceesay</div>
                      <div className="text-white/45 text-sm">President, Al-Ihsan University</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Abdoulie Ebrima Jammeh",
                role: "CEO, EJC Drilling Company",
                avatar: "AEJ",
                avatarGrad: "from-[#9CB633] to-[#592C72]",
                project: "EJC Website",
                img: `${BASE}portfolio/ejc-website.jpg`,
                review: "I needed a professional website fast and Solotech delivered within 18 hours. The site is clean, loads fast, and has already brought us new clients who found us online.",
              },
              {
                name: "Illyas Trawally",
                role: "Owner, MJ's Building Essentials",
                avatar: "IT",
                avatarGrad: "from-[#592C72] to-[#9CB633]",
                project: "Full Brand System",
                img: `${BASE}portfolio/mjs-building-brand.jpg`,
                review: "From our logo to our vehicle wrap — Solotech designed everything. Customers now recognise our brand everywhere they see it. The whole team was impressed from day one.",
              },
              {
                name: "Fatima Sonko",
                role: "Founder, Halal Organic Products",
                avatar: "FS",
                avatarGrad: "from-[#1E0A32] to-[#9CB633]",
                project: "Brand & Packaging",
                img: `${BASE}portfolio/halal-jar.jpg`,
                review: "Our product packaging went from homemade to premium overnight. The mockups Solotech created look so professional that customers think we're an international brand.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-panel rounded-2xl p-6 flex flex-col gap-5 hover:border-purple-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project thumbnail strip */}
                <div className="h-28 rounded-xl overflow-hidden bg-[#0d0d1a] relative">
                  <img
                    src={t.img}
                    alt={t.project}
                    className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm text-white/80">
                      {t.project}
                    </span>
                  </div>
                </div>

                <Quote size={24} className="text-[#9CB633]/40 -mb-1" />
                <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.review}"</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#9CB633] flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Ready to work together?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-white/60 mb-10">
              Join 40+ happy clients that have trusted Solotech Digital to grow their presence online. We deliver fast — most projects within 18 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base border-0 hover:scale-105 transition-transform">
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base border-[#9CB633]/60 text-[#9CB633] hover:bg-[#9CB633]/10 hover:border-[#9CB633]">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
