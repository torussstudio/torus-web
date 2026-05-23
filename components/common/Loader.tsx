"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  loading: boolean;
  text?: string;
};

export default function Loader({
  loading,
  text = "Loading",
}: Props) {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-black"
        >
          {/* Background Glow */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            />
          </div>

          {/* Premium Grain */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "8px 8px",
            }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.75))]" />

          {/* Center Content */}
          <div className="relative flex h-full flex-col items-center justify-center">
            {/* Apple Spinner */}
            <div className="relative h-16 w-16">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.15 }}
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                  style={{
                    rotate: `${i * 30}deg`,
                    transformOrigin: "center",
                  }}
                  className="absolute left-1/2 top-1/2 block h-4 w-[2.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 flex items-center gap-1"
            >
              <span className="text-sm font-medium tracking-[0.35em] text-white/80 uppercase">
                {text}
              </span>

              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay,
                  }}
                  className="text-white/60"
                >
                  .
                </motion.span>
              ))}
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-[11px] tracking-[0.3em] text-white/30 uppercase"
            >
              Please wait
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}