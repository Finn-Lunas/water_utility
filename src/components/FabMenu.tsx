"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FabMenu() {
  const [open, setOpen] = useState(false);

  // Lottie JSON control
  const iconContainerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<any>(null);
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
        lottieRef.current?.destroy?.();
      } catch {}
    };
  }, []);

  const total = 77;
  const playTo = (from: number, to: number) => {
    const anim = lottieRef.current;
    if (!anim) return;
    targetFrameRef.current = to;
    anim.goToAndStop(from, true);
    anim.playSegments([from, to], true);
  };

  const toggle = () => {
    const nextOpen = !open;
    setOpen(nextOpen); // open/close UI immediately, in parallel with Lottie
    if (nextOpen) playTo(1, 31);
    else playTo(31, 77);
  };

  const items = [
    { label: "Новини", href: "/#news" },
    { label: "Для абонента", href: "/#subscriber" },
    { label: "Про нас", href: "/#about" },
    { label: "Вакансії", href: "/#jobs" },
    { label: "Контакти", href: "/#contacts" },
  ];

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
    <div className="md:hidden">
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
              key="fab-list"
              className="flex flex-col items-end gap-2 origin-bottom-right"
              initial="closed"
              animate="open"
              exit="closed"
              variants={listVariants}
            >
              {items.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-max max-w-[90vw] translate-z-0 will-change-transform inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur border border-line/80 shadow-soft px-3 py-2 text-sm text-textPrimary hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          aria-label="Меню швидких дій"
          aria-expanded={open}
          onClick={toggle}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-soft flex items-center justify-center hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <div ref={iconContainerRef} className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
