import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, ChevronDown } from "lucide-react";

const WA_NUMBER = "2207532757";

const QUICK_MESSAGES = [
  { label: "Web Design & Development", msg: "Hi! I'm interested in getting a website designed and developed for my business. Can we talk?" },
  { label: "Branding & Graphic Design", msg: "Hi! I need help with branding and graphic design for my business. Can we discuss?" },
  { label: "Social Media Management", msg: "Hi! I'm looking for social media management services. Can we chat about what's available?" },
  { label: "Photography & Videography", msg: "Hi! I'd like to book a photography or videography session. Can we discuss availability?" },
  { label: "Digital Marketing", msg: "Hi! I need help with digital marketing for my business. Can we talk about how Solotech can help?" },
  { label: "Solotech LaunchPad (Website in 24hrs)", msg: "Hi! I'm interested in the Solotech LaunchPad — I want to launch my website fast. Can you help?" },
  { label: "General Enquiry", msg: "Hi! I'd like to learn more about Solotech Digital's services. Can we chat?" },
];

function buildWaUrl(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  // Show attention bubble after 4 seconds if widget hasn't been opened
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function handleOpen() {
    setOpen(true);
    setShowBubble(false);
  }

  function handleCustomSend() {
    if (!custom.trim()) return;
    window.open(buildWaUrl(custom.trim()), "_blank", "noopener,noreferrer");
    setCustom("");
    setOpen(false);
  }

  return (
    <>
      {/* Attention bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 max-w-[200px]"
          >
            <div className="bg-white text-gray-800 text-sm px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl font-medium leading-snug">
              Need help? Chat with us now 👋
            </div>
            <div className="w-3 h-3 bg-white absolute -bottom-1.5 right-4 rotate-45 rounded-sm shadow-sm" />
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X size={10} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight">Solotech Digital</div>
                  <div className="text-green-300 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9CB633] inline-block" />
                    Typically replies fast
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                data-testid="whatsapp-widget-close"
                className="text-white/70 hover:text-white transition-colors"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#ECE5DD] p-4 space-y-3 max-h-[320px] overflow-y-auto">
              {/* Greeting bubble */}
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center shrink-0 mb-0.5">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-gray-800 shadow-sm max-w-[260px]">
                  Hi there! 👋 How can Solotech Digital help you today? Pick a topic to start chatting.
                </div>
              </div>

              {/* Quick message options */}
              <div className="space-y-2 pl-9">
                {QUICK_MESSAGES.map((item, i) => (
                  <a
                    key={i}
                    href={buildWaUrl(item.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`wa-quick-${i}`}
                    onClick={() => setOpen(false)}
                    className="block bg-white border border-[#25D366]/40 text-[#075E54] rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Custom message input */}
            <div className="bg-[#F0F0F0] px-3 py-3 flex items-center gap-2 border-t border-gray-200">
              <input
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCustomSend()}
                placeholder="Type a custom message..."
                data-testid="wa-custom-input"
                className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 outline-none border border-gray-200 focus:border-[#25D366]"
              />
              <button
                onClick={handleCustomSend}
                data-testid="wa-custom-send"
                disabled={!custom.trim()}
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#22C55E] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="whatsapp-fab"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
