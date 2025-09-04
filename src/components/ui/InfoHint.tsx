"use client";

import { useEffect, useRef, useState } from "react";

export default function InfoHint() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) =>
      !ref.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div ref={ref} className="relative z-10 group">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-line bg-white px-3 py-1.5 text-sm hover:border-primary"
        title="Довідка по сторінці"
      >
        <span
          aria-hidden
          className="grid place-items-center w-5 h-5 rounded-full bg-primary text-white text-[12px] font-bold"
        >
          ?
        </span>
        Довідка по сторінці
      </button>

      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(520px,calc(100vw-24px))] max-h-[80vh] md:absolute md:left-full md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:ml-3 md:w-[560px] md:max-w-[min(80vw,640px)] md:max-h-[70vh] z-[60] rounded-2xl border border-line bg-white p-4 shadow-soft text-sm text-textSecondary ${
          open ? "block" : "hidden"
        } md:group-hover:block`}
        role="dialog"
        aria-label="Довідкова інформація"
      >
        <div className="space-y-2 break-words">
          <p>
            При введенні особового рахунку за наявності знаку «-» в рахунку,
            його необхідно внести. <strong>Наприклад:</strong> 123456-7.
          </p>
          <p>
            Введіть прізвище українською мовою. Перша буква прізвища —
            заголовна. <strong>Наприклад:</strong> Іваненко.
          </p>
          <p>
            Якщо в прізвищі є апостроф, його можна набрати двома способами:
            <code className="mx-1">"</code> або <code className="mx-1">'</code>
            (у англійській розкладці, де українська «є»).{" "}
            <strong>Наприклад:</strong> Водоп'янов.
          </p>
          <p>
            Якщо ви не можете увійти в свій кабінет, зверніться в абонентський
            відділ.
          </p>
          <div className="pt-3 border-t border-line/60 mt-3">
            <div className="text-sm font-medium text-textPrimary">
              Абонентський відділ:
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="tel:+380501930207"
                className="inline-flex items-center rounded-xl border border-line px-3 py-1.5 text-sm hover:border-primary"
              >
                Дзвінок: +380501930207
              </a>
              <a
                href="viber://chat?number=%2B380509983798"
                className="inline-flex items-center rounded-xl border border-line px-3 py-1.5 text-sm hover:border-primary"
              >
                Viber: +380509983798
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
