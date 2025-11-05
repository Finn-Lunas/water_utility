"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabId } from "./CabinetApp";

export default function Sidebar({
  items,
  active,
  onChange,
}: {
  items: { id: TabId; label: string; icon: string }[];
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  const [open, setOpen] = useState(false);
  
  // Lottie JSON control
  const iconContainerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<unknown>(null);
  const targetFrameRef = useRef<number>(1);

  useEffect(() => {
    let destroyed = false;
    (async () => {
      const lottie = (await import("lottie-web")).default;
      if (destroyed || !iconContainerRef.current) return;
      const anim = lottie.loadAnimation({
        container: iconContainerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/fabMenuAnimation.json",
      });
      lottieRef.current = anim;
      anim.goToAndStop(1, true);
      const onComplete = () => {
        // Snap to the target frame to avoid overshoot
        anim.goToAndStop(targetFrameRef.current, true);
      };
      anim.addEventListener("complete", onComplete);
      return () => {
        anim.removeEventListener("complete", onComplete);
      };
    })();
    return () => {
      destroyed = true;
      try {
        const anim = lottieRef.current as any;
        anim?.destroy?.();
      } catch {}
    };
  }, []);

  const playTo = (from: number, to: number) => {
    const anim = lottieRef.current as any;
    if (!anim) return;
    targetFrameRef.current = to;
    anim.goToAndStop(from, true);
    anim.playSegments([from, to], true);
  };

  const toggle = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
    if (nextOpen) playTo(1, 31);
    else playTo(31, 77);
  };

  const listVariants = {
    closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.05, staggerChildren: 0.06 } },
  } as const;

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 16,
      scale: 0.96,
      transition: { duration: 0.12, ease: "easeIn" },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1.04,
      transition: { type: "spring", stiffness: 520, damping: 24, mass: 0.6 },
    },
    settle: {
      scale: 1,
      transition: { type: "spring", stiffness: 380, damping: 26 },
    },
  } as const;

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block rounded-2xl border border-line bg-white shadow-soft">
        <div className="p-4 font-medium">Інформація по абоненту</div>
        <nav>
          <ul className="px-2 pb-3 space-y-1">
            {items.map((it) => (
              <li key={it.id}>
                <button
                  onClick={() => onChange(it.id)}
                  className={`w-full text-left flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-lightBlue/50 transition
                              ${active === it.id ? "bg-lightBlue/70 font-medium" : "text-textPrimary"}`}
                >
                  <span className="w-6 text-center">{it.icon}</span>
                  <span className="truncate">{it.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile FAB menu */}
      <div className="lg:hidden">
        <AnimatePresence>
          {open && (
            <motion.button
              aria-label="Закрити меню"
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 [@supports(padding:max(0px))]:pb-[max(0px,env(safe-area-inset-bottom))]">
          <AnimatePresence>
            {open && (
              <motion.div
                key="sidebar-fab-list"
                className="flex flex-col items-end gap-2 origin-bottom-right"
                initial="closed"
                animate="open"
                exit="closed"
                variants={listVariants}
              >
                {items.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onChange(item.id);
                      setOpen(false);
                    }}
                    className="w-max max-w-[90vw] translate-z-0 will-change-transform inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur border border-line/80 shadow-soft px-3 py-2 text-sm text-textPrimary hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            aria-label="Меню кабінету"
            aria-expanded={open}
            onClick={toggle}
            className="w-14 h-14 rounded-full bg-primary text-white shadow-soft flex items-center justify-center hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <div ref={iconContainerRef} className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  );
}

