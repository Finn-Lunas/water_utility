export default function ReadingsHistory() {
  const rows = [
    ["08-2025","7315704","31-08-2025","315.00","2.00","Інтернет"],
    ["07-2025","7315704","31-07-2025","313.00","3.00","Інтернет"],
    ["06-2025","7315704","30-06-2025","310.00","3.00","Інтернет"],
  ];
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">
        Історія показників приладів обліку холодної води
      </h2>
      <p className="text-center text-sm text-textSecondary">з вересня 2024 р. по вересень 2025 р.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[880px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["Місяць","Період","№ лічильника","Дата показників","Показники","Спожито","Спосіб зняття"].map(h=>(
                <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} className="odd:bg-lightBlue/30">
                {["",...r].map((c,ci)=>(
                  <td key={ci} className="px-3 py-2 border-b border-line">{c || r[0]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


