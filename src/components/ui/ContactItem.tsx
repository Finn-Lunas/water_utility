import type { ReactNode } from "react";

type Props = { title: string; lines: ReactNode[]; className?: string };
export default function ContactItem({ title, lines, className = "" }: Props) {
  return (
    <div
      className={
        "rounded-2xl bg-white border border-line/60 shadow-soft p-5 " +
        className
      }
    >
      <div className="font-medium text-textPrimary">{title}</div>
      <div className="mt-3 text-sm text-textSecondary space-y-1">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
