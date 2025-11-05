export default function Payments() {
  const rows = [
    ["07-2025","18-07-2025","1500.00","АТ \"УКРСИББАНК\""],
    ["06-2025","11-06-2025","200.00","АТ \"УКРСИББАНК\""],
    ["05-2025","10-05-2025","338.05","АТ \"УКРСИББАНК\""],
    ["04-2025","10-04-2025","466.57","АТ \"УКРСИББАНК\""],
  ];
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">Платежі за період</h2>
      <p className="text-center text-sm text-textSecondary">з вересня 2024 р. по вересень 2025 р.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["Період","Дата платежу","Сума","Вид платежу"].map(h=>(
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

      <p className="mt-3 text-center text-sm text-textSecondary">
        * Платежі проводяться в міру надходження інформації про них в абонвідділ.
      </p>
    </section>
  );
}


