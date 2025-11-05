export default function Turnover() {
  const rows = [
    ["08-2025","-887.27","203.77","0.00","0.00","0.00","-683.50"],
    ["07-2025","341.82","270.91","0.00","1500.00","0.00","-887.27"],
  ];
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-lightBlue rounded-lg" />
        <div className="font-medium">Друк</div>
      </div>

      <h2 className="mt-2 text-center text-lg font-semibold">Обіг за період</h2>
      <p className="text-center text-sm text-textSecondary">з вересня 2024 р. по серпень 2025 р.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[880px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["Період","Сальдо початок","Нараховано","Пільга","Оплата","Монетизація","Сальдо кінець"].map(h=>(
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

      <p className="mt-3 text-sm text-textSecondary">
        Примітка: Сальдо кінець = Сальдо початок + Нарахування - Пільга - Оплата - Монетизація
      </p>
    </section>
  );
}


