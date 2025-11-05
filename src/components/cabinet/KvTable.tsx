type Row = [label: string, value: string, emphasize?: boolean];

export default function KvTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-line">
      {/* заголовок як синя плашка */}
      <div className="bg-primary text-white px-4 py-3 font-medium">{title}</div>

      <div className="divide-y divide-line">
        {rows.map(([k, v, strong], idx) => (
          <div key={idx} className={`flex items-center px-4 py-3 bg-white`}>
            <div className="w-2/3 pr-3 text-sm md:text-base">{k}</div>
            <div className={`w-1/3 text-right font-medium ${strong ? "text-primary" : ""}`}>
              {v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

