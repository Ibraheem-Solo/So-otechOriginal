import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/fade-in";
import { ShoppingBag, MessageCircle, Package, Shirt, Coffee, Gift, Star, ArrowUpRight, ChevronDown, Sparkles, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/seo-head";

const BASE = import.meta.env.BASE_URL;

const WHATSAPP_NUMBER = "2207532757";

function whatsappLink(product: string, variant?: string) {
  const msg = encodeURIComponent(
    `Hi Solotech Digital! I'm interested in ordering: *${product}*${variant ? ` (${variant})` : ""}. Please let me know the details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const originals = [
  {
    id: 1,
    name: "Solotech Hoodie",
    tagline: "Signature heavyweight pullover",
    price: "D950",
    badge: "Bestseller",
    image: `${BASE}store-hoodie-real.jpg`,
    imgPosition: "object-top",
    icon: <Shirt size={28} />,
    colors: ["#1a1a1a", "#1E0A32", "#9CB633"],
    colorNames: ["Midnight Black", "Deep Purple", "Lime Edition"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium 400gsm fleece. Embroidered SOLO mark. Dropped shoulders. Built for creators.",
  },
  {
    id: 2,
    name: "SOLO® T-Shirt",
    tagline: "Oversized graphic tee",
    price: "D350",
    badge: "New",
    image: `${BASE}store-tshirt-real.png`,
    imgPosition: "object-[center_55%]",
    icon: <Shirt size={28} />,
    colors: ["#0d0d0d", "#ffffff", "#1E0A32"],
    colorNames: ["Black", "White", "Purple"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "100% organic cotton. Screen-printed SOLO® logo. Relaxed fit for the modern creative.",
  },
  {
    id: 3,
    name: "Canvas Tote Bag",
    tagline: "Heavy-duty carry",
    price: "D250",
    badge: null,
    image: `${BASE}store-tote-real.png`,
    imgPosition: "object-center",
    icon: <ShoppingBag size={28} />,
    colors: ["#1a1a1a", "#592C72"],
    colorNames: ["Black / Lime", "Black / Purple"],
    sizes: null,
    description: "Heavy canvas. Purple strap. Bold Solotech pattern print. Fits a laptop + your daily essentials.",
  },
  {
    id: 4,
    name: "Solotech Mug",
    tagline: "Studio ceramic mug",
    price: "D200",
    badge: null,
    image: `${BASE}store-mug-real.png`,
    imgPosition: "object-center",
    icon: <Coffee size={28} />,
    colors: ["#0d0d0d", "#9CB633", "#592C72", "#ffffff"],
    colorNames: ["Matte Black", "Lime Green", "Deep Purple", "Classic White"],
    sizes: null,
    description: "11oz ceramic. Dishwasher safe. Choose your colourway — each design is unique.",
  },
  {
    id: 5,
    name: "Solotech Cap",
    tagline: "6-panel structured cap",
    price: "D350",
    badge: "Limited",
    image: `${BASE}store-cap-real.png`,
    imgPosition: "object-center",
    icon: <Sparkles size={28} />,
    colors: ["#f0ece3", "#3b1f5e"],
    colorNames: ["Cream / Geometric", "Purple / SOLO Confidence"],
    sizes: ["One Size"],
    description: "Adjustable fit. Embroidered Solotech mark. UV-resistant. Two exclusive colourways.",
  },
  {
    id: 6,
    name: "Solotech Polo",
    tagline: "Premium collar shirt",
    price: "D550",
    badge: "New",
    image: `${BASE}store-polo-real.png`,
    imgPosition: "object-top",
    icon: <Shirt size={28} />,
    colors: ["#1a1a1a", "#ffffff", "#1E0A32", "#9CB633"],
    colorNames: ["Black", "White", "Purple", "Lime"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Piqué cotton. Embroidered chest logo. Ribbed collar and cuffs. Smart-casual ready.",
  },
  {
    id: 7,
    name: "SOLO® Heritage Bomber",
    tagline: "African-print bomber jacket",
    price: "D1,850",
    badge: "Exclusive",
    image: `${BASE}store-heritage-real.png`,
    imgPosition: "object-[center_45%]",
    icon: <Sparkles size={28} />,
    colors: ["#8B4513", "#1a1a1a", "#592C72"],
    colorNames: ["Mudcloth Brown", "All Black", "Purple Edition"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "All-over African mudcloth print. SOLO® Confidence chest badge. Zip-up bomber cut. Heritage meets streetwear.",
  },
];

const customServices = [
  {
    icon: <Package size={22} />,
    image: `${BASE}store-custom-merch.jpg`,
    title: "Company Merchandise",
    desc: "Branded apparel, bags, and accessories for your entire team. Minimum order: 10 units.",
    tag: "From D3,500",
  },
  {
    icon: <Star size={22} />,
    image: `${BASE}store-custom-event.jpg`,
    title: "Event Branding Kits",
    desc: "Custom event merch packages — T-shirts, banners, lanyards, programs. Delivered on time.",
    tag: "Custom Quote",
  },
  {
    icon: <Gift size={22} />,
    image: `${BASE}store-custom-gifts.jpg`,
    title: "Corporate Gift Sets",
    desc: "Premium curated gift sets for clients, partners, and employees. Personalised packaging included.",
    tag: "From D1,200",
  },
  {
    icon: <ShoppingBag size={22} />,
    image: `${BASE}store-custom-packaging.jpg`,
    title: "Branded Packaging",
    desc: "Custom boxes, bags, tissue paper, stickers, and labels for your products. Minimum: 50 units.",
    tag: "Custom Quote",
  },
];


function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ProductCard({ product }: { product: typeof originals[0] }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] ?? product.sizes[0] : null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const orderLabel = `${product.name}${selectedColor !== null ? ` — ${product.colorNames[selectedColor]}` : ""}${selectedSize ? `, Size ${selectedSize}` : ""}`;

  const activeColor = product.colors[selectedColor];
  const isNeutral = ["#1a1a1a", "#0d0d0d", "#ffffff", "#f0ece3"].includes(activeColor);

  return (
    <>
      {lightboxOpen && (
        <ImageLightbox src={product.image} alt={product.name} onClose={() => setLightboxOpen(false)} />
      )}

      <div className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0d0818] hover:border-white/20 transition-colors duration-200">

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#9CB633] text-black">
              {product.badge}
            </span>
          </div>
        )}

        {/* Image area — 1:1 square, click to open lightbox */}
        <div
          className="relative aspect-square bg-[#100c1e] overflow-hidden flex-shrink-0 cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover ${product.imgPosition ?? "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
          />
          {/* Color tint overlay — only for non-neutral / non-dark colors */}
          {!isNeutral && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                backgroundColor: activeColor,
                opacity: 0.22,
                mixBlendMode: "color",
              }}
            />
          )}
          {/* Expand hint */}
          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Maximize2 size={10} className="text-white/70" />
            <span className="text-white/60 text-[9px]">View</span>
          </div>
          <img src={`${BASE}logo.png`} alt="Solotech Digital" className="absolute top-2.5 right-2.5 h-5 w-auto opacity-40" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4 flex-1">
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">{product.tagline}</p>
            <h3 className="text-white text-base font-semibold leading-snug">{product.name}</h3>
            <p className="text-white/40 text-xs mt-1 leading-relaxed line-clamp-2">{product.description}</p>
          </div>

          {/* Color swatches */}
          <div className="flex items-center gap-2">
            <span className="text-white/35 text-xs shrink-0">{product.colorNames[selectedColor]}</span>
            <div className="flex gap-1.5">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  title={product.colorNames[i]}
                  className={`w-5 h-5 rounded-full border transition-all duration-150 ${selectedColor === i ? "border-[#9CB633] ring-1 ring-[#9CB633]/40 ring-offset-1 ring-offset-[#0d0818] scale-110" : "border-white/20 hover:border-white/50"}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          {product.sizes && (
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-medium border transition-all duration-150 ${
                    selectedSize === size
                      ? "border-[#9CB633] text-[#9CB633] bg-[#9CB633]/10"
                      : "border-white/12 text-white/45 hover:border-white/35 hover:text-white/70"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="mt-auto flex items-center justify-between gap-2 pt-3 border-t border-white/8">
            <span className="text-white font-bold text-lg leading-none">{product.price}</span>
            <a href={whatsappLink(orderLabel)} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-1.5 bg-[#9CB633] hover:bg-[#b5d13d] active:scale-95 text-black font-semibold rounded-lg transition-all duration-150 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5">
                <MessageCircle size={12} className="shrink-0" />
                <span className="hidden xs:inline">Order on </span>WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomServiceCard({ service, delay }: { service: typeof customServices[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative glass-panel rounded-2xl hover:border-[#592C72]/50 transition-all duration-300 flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden border-b border-white/5">
          <motion.img
            src={service.image}
            alt={service.title}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <img src={`${BASE}logo.png`} alt="Solotech Digital" className="absolute top-3 left-3 h-6 w-auto opacity-75 drop-shadow-lg" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633] group-hover:bg-[#1E0A32]/30 transition-colors duration-300">
            {service.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">{service.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-[#9CB633] text-xs font-semibold">{service.tag}</span>
            <a href={whatsappLink(service.title)} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition-all duration-200">
                Enquire <ArrowUpRight size={11} />
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Store() {
  return (
    <>
      <SeoHead
        title="Store | Solotech Digital"
        description="Minimal branded merchandise and custom creative products designed for modern creators, businesses, and digital culture."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[8%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.55) 0%, rgba(89,44,114,0.1) 60%, transparent 80%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[5%] right-[5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.45) 0%, rgba(156,182,51,0.08) 60%, transparent 80%)", filter: "blur(55px)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8 text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShoppingBag size={12} />
            Solotech Store
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6" style={{ letterSpacing: "0.02em" }}>
            Creative{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9CB633 0%, #592C72 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Essentials
            </span>
            <br />
            by Solotech
          </h1>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Minimal branded merchandise and custom creative products designed for modern creators, businesses, and digital culture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#originals">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity h-auto">
                Shop Originals
              </Button>
            </a>
            <a href="#custom">
              <Button variant="outline" className="rounded-full border-white/20 text-white/70 hover:text-white hover:border-white/50 px-8 py-3 h-auto">
                Custom Branding <ChevronDown size={15} className="ml-1" />
              </Button>
            </a>
          </div>
        </motion.div>

      </section>

      {/* ── CATEGORY PILLS ── */}
      <section className="py-6 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {["All Products", "Hoodies", "T-Shirts", "Tote Bags", "Mugs", "Caps"].map((cat) => (
                <span
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-default ${
                    cat === "All Products"
                      ? "border-[#9CB633]/50 text-[#9CB633] bg-[#9CB633]/10"
                      : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SOLOTECH ORIGINALS ── */}
      <section id="originals" className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="mb-14">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Solotech Originals</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Wear the Brand</h2>
                <p className="text-white/50 mt-2 max-w-xl">
                  Limited-edition pieces built for creators, founders, and digital natives. Every item ships on demand.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-white/40 text-sm border border-white/10 rounded-full px-4 py-2">
                <MessageCircle size={14} className="text-[#9CB633]" />
                WhatsApp ordering
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {originals.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER BANNER ── */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            {/* Rotating border wrapper */}
            <div className="relative rounded-2xl p-[1.5px] overflow-hidden"
              style={{ boxShadow: "0 0 50px rgba(156,182,51,0.14), 0 0 100px rgba(30,10,50,0.4)" }}>

              {/* Spinning conic-gradient stroke */}
              <div className="animate-cta-spin pointer-events-none" style={{
                position: "absolute", inset: "-150%",
                background: "conic-gradient(from 0deg, transparent 0%, rgba(156,182,51,0.15) 8%, #9CB633 14%, #b8d93e 19%, rgba(156,182,51,0.55) 26%, rgba(168,85,247,0.7) 38%, rgba(30,10,50,0.4) 52%, transparent 62%)",
                zIndex: 0,
              }} />

              {/* Inner card — original design with opaque base to block conic bleed */}
              <div className="relative rounded-[14px] overflow-hidden px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
                style={{ background: 'linear-gradient(to right, rgba(89,44,114,0.35) 0%, rgba(5,2,12,0.98) 25%, rgba(5,2,12,0.98) 75%, rgba(156,182,51,0.18) 100%)', zIndex: 1 }}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTYwIDAgTDAgMCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />
                <div className="relative z-10 text-center md:text-left">
                  <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-2">Bulk & Corporate</p>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Need a larger order?</h3>
                  <p className="text-white/50 mt-1">We handle bulk merch, corporate gifts, and branded drops for teams of any size.</p>
                </div>
                <a href={whatsappLink("Bulk / Corporate Order")} target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0">
                  <Button className="bg-[#9CB633] text-black font-bold hover:bg-[#b5d13d] transition-colors rounded-full px-8 h-12">
                    Get a Quote <ArrowUpRight size={16} className="ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CUSTOM BRANDING ── */}
      <section id="custom" className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Custom Branding</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Brand, Printed</h2>
            <p className="text-white/50 text-lg">
              From company merch to event kits and gifting — we handle everything from design to delivery.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customServices.map((service, i) => (
              <CustomServiceCard key={service.title} service={service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn className="text-center mb-14">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-white">Order in 3 Steps</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Pick Your Item", desc: "Browse the store, choose your colour and size, then tap the WhatsApp button.", icon: <ShoppingBag size={20} /> },
              { step: "02", title: "Chat With Us", desc: "We'll confirm your order, share a payment link, and give you a delivery estimate.", icon: <MessageCircle size={20} /> },
              { step: "03", title: "Receive & Enjoy", desc: "Your order is prepared and ready for collection or local delivery within 1–3 business days.", icon: <Package size={20} /> },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative glass-panel p-8 rounded-2xl flex flex-col gap-5">
                  <div className="absolute top-6 right-6 text-[#1E0A32]/30 font-black text-5xl leading-none select-none">{item.step}</div>
                  <div className="w-11 h-11 rounded-xl bg-[#1E0A32]/20 border border-[#1E0A32]/30 flex items-center justify-center text-[#9CB633]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <FadeIn>
            {/* Rotating border wrapper */}
            <div className="relative rounded-3xl p-[1.5px] overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(156,182,51,0.18), 0 0 120px rgba(30,10,50,0.5)" }}>

              {/* Spinning conic-gradient stroke */}
              <div className="animate-cta-spin pointer-events-none" style={{
                position: "absolute", inset: "-80%",
                background: "conic-gradient(from 0deg, transparent 0%, rgba(156,182,51,0.15) 8%, #9CB633 14%, #b8d93e 19%, rgba(156,182,51,0.55) 26%, rgba(168,85,247,0.7) 38%, rgba(30,10,50,0.4) 52%, transparent 62%)",
                zIndex: 0,
              }} />

              {/* Inner card */}
              <div className="relative rounded-[22px] overflow-hidden p-14" style={{
                background: "linear-gradient(160deg, rgba(10,10,12,0.98) 0%, rgba(8,8,10,0.99) 50%, rgba(9,9,11,0.98) 100%)",
                backdropFilter: "blur(60px) saturate(180%)",
                WebkitBackdropFilter: "blur(60px) saturate(180%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 80px rgba(0,0,0,0.4)",
                zIndex: 1,
              }}>
                <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.10) 30%, rgba(200,240,100,0.18) 55%, rgba(255,255,255,0.06) 80%, transparent 95%)" }} />
                <div className="absolute -top-10 left-1/4 w-64 h-40 rounded-full bg-[#1E0A32]/25 blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-8 right-1/4 w-56 h-40 rounded-full bg-[#9CB633]/15 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-4">Ready to Order?</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Something in mind?</h2>
                  <p className="text-white/50 mb-8 text-lg">Whether it's a single hoodie or 500 corporate kits — we're just a message away.</p>
                  <div className="flex justify-center">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Solotech Digital! I'd like to place a store order or enquire about custom branding.")}`} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-5 sm:px-10 py-2.5 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:opacity-90 transition-opacity h-auto gap-1.5 sm:gap-2">
                        <MessageCircle size={16} className="shrink-0" />
                        <span>Message Us on WhatsApp</span>
                        <ArrowUpRight size={14} className="shrink-0" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
