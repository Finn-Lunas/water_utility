"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};
export default function Accordion({ title, children, defaultOpen }: Props) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div
      className={`rounded-2xl border border-line bg-white ${
        open ? "shadow-soft" : ""
      }`}
    >
      <button
        type="button"
        className="w-full cursor-pointer select-none px-5 py-4 font-medium flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <span
          className={`ml-4 text-textSecondary transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-textSecondary">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
