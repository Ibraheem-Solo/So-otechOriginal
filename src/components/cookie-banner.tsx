import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "solotech-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "120%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2.5rem)] max-w-2xl"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#1E0A32]/30 border border-[#1E0A32]/50 flex items-center justify-center text-[#9CB633] shrink-0">
              <Cookie size={18} />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-0.5">We use cookies</p>
              <p className="text-white/50 text-xs leading-relaxed">
                We use cookies to improve your experience and analyse site traffic.
                See our{" "}
                <Link href="/privacy" className="text-[#9CB633] hover:underline">Privacy Notice</Link>
                {" "}for details.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 rounded-lg text-xs font-medium text-white/60 border border-white/10 hover:border-white/25 hover:text-white transition-colors"
              >
                Reject
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-[#9CB633] text-black hover:bg-[#8aa82d] transition-colors"
              >
                Accept
              </button>
            </div>

            {/* Close */}
            <button
              onClick={reject}
              aria-label="Dismiss"
              className="absolute top-3 right-3 text-white/30 hover:text-white/70 transition-colors sm:hidden"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
