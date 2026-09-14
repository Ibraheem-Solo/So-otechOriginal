import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        opacity: { duration: 0.5, delay, ease: "easeOut" },
        y: { type: "spring", stiffness: 70, damping: 20, mass: 0.8, delay },
        filter: { duration: 0.5, delay, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
