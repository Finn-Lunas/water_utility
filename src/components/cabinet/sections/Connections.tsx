export default function Connections() {
  const rows = [
    ["91.224.179.30","Chrome 141.0.0.0","PC","2025-10-02 08:53:42"],
    ["194.88.152.45","Chrome 139.0.0.0","PC","2025-09-01 10:39:18"],
  ];
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">
        Історія підключень по о/рахунку № 244
      </h2>
      <p className="text-center text-sm text-textSecondary">з вересня 2024 р. по вересень 2025 р.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["IP-адреса","Браузер","Тип пристрою","Дата"].map(h=>(
                <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} className="odd:bg-lightBlue/30">
                {r.map((c,ci)=>(
                  <td key={ci} className="px-3 py-2 border-b border-line">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


