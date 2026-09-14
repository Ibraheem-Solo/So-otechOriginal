import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import SocialLinks from "@/components/social-links";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppWidget from "@/components/whatsapp-widget";
import CookieBanner from "@/components/cookie-banner";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Academy", href: "/academy" },
  { label: "Store", href: "/store" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  // Set dark mode manually since the entire app is dark theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans">
      {/* Global Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#9CB633]/15 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#1E0A32]/25 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] left-[-15%] w-[35%] h-[35%] rounded-full bg-[#9CB633]/8 blur-[100px] pointer-events-none" />
      
      {/* Top info bar — slides up and hides on scroll */}
      <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5 transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="container mx-auto px-6 md:px-12 py-2 flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9CB633] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9CB633]" />
            </span>
            <span className="text-white/60">We're online — ready to start your project</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+2207532757" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} />
              <span>+220 753 2757</span>
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="mailto:info@solotechdigital.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} />
              <span className="hidden md:inline">info@solotechdigital.com</span>
              <span className="md:hidden">Email us</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
            : "top-0 md:top-8 bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center">
          {/* Logo — left */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center gap-3 z-50">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Solotech Digital" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav — always centered */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location === link.href ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle — right */}
          <div className="flex-1 flex items-center justify-end gap-3 z-50">
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-gradient-solotech text-white border-0 hover:opacity-90 transition-opacity">
                Start a Project
              </Button>
            </Link>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium py-2 ${
                    location === link.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-4">
                <Button className="w-full bg-gradient-solotech text-white">Start a Project</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 w-full z-10 pt-[7.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{
              opacity: { duration: 0.35, ease: "easeOut" },
              y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 bg-black/50 z-10 relative">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Solotech Digital" className="h-14 w-auto mb-6 brightness-0 invert" />
              <p className="text-white/60 max-w-md mb-6">
                Solotech Digital is a next-generation creative agency based in The Gambia. We build digital experiences that drive growth for ambitious African businesses.
              </p>
              <SocialLinks />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Our Work", href: "/work" },
                  { label: "Academy", href: "/academy" },
                  { label: "Store", href: "/store" },
                  { label: "Solotech FixIT", href: "/services/fixit" },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-white/60">
                <li>Banjul, The Gambia</li>
                <li>info@solotechdigital.com</li>
                <li>+220 753 2757</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Solotech Digital LLC. All rights reserved.</p>
            <div className="flex items-center gap-5 text-center">
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Notice</Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
      <CookieBanner />
    </div>
  );
}
