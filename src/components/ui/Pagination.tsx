export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1 mt-6">
      <button className="px-3 py-2 rounded-lg border border-line text-sm text-textSecondary">
        ‹
      </button>
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          className={`px-3 py-2 rounded-lg border text-sm ${
            i === 0
              ? "bg-primary text-white border-primary"
              : "border-line text-textSecondary hover:text-textPrimary"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button className="px-3 py-2 rounded-lg border border-line text-sm text-textSecondary">
        ›
      </button>
    </div>
  );
}
