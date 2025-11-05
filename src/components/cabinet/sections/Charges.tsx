export default function Charges() {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft space-y-8">
      <div>
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <label className="text-sm">Оберіть місяць та рік</label>
          <select className="h-10 rounded-lg border border-line px-3 outline-none focus:border-primary">
            <option>08-2025</option>
            <option>07-2025</option>
          </select>
          <button className="h-10 rounded-lg bg-primary px-4 text-white hover:bg-primary-600">Показати</button>
        </div>

        <h3 className="mt-4 text-center font-semibold">Зведена відомість за серпень 2025 р.</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm border-separate border-spacing-0">
            <thead>
              <tr className="bg-primary text-white">
                {["Найменування","Сума"].map(h=>(
                  <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Сальдо на початок місяця","-887.27"],
                ["Нараховано 100%","203.77"],
                ["Відшкодовано за пільгою","0.00"],
                ["Оплачено","0.00"],
                ["Монетизація","0.00"],
                ["Сальдо на кінець місяця","-683.50"],
              ].map((r,i)=>(
                <tr key={i} className="odd:bg-lightBlue/30">
                  <td className="px-3 py-2 border-b border-line">{r[0]}</td>
                  <td className="px-3 py-2 border-b border-line">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-center font-semibold">Нарахування по абоненту за серпень 2025 р.</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm border-separate border-spacing-0">
            <thead>
              <tr className="bg-primary text-white">
                {["Найменування нарахування","Тариф","Кількість","Сума","Пільга"].map(h=>(
                  <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["ХВП Лічильник","41.880 грн/м³","2 м³","83.76","0.00"],
                ["ХВВ Лічильник","25.260 грн/м³","2 м³","50.52","0.00"],
                ["Абонентське обслуговування","34.740","—","34.74","0.00"],
              ].map((r,i)=>(
                <tr key={i} className="odd:bg-lightBlue/30">
                  {r.map((c,ci)=>(
                    <td key={ci} className="px-3 py-2 border-b border-line">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 text-sm text-textSecondary space-y-1">
          <p>Примітка №1: Тарифи вказані станом на кінець місяця.</p>
          <p>Примітка №2: Тарифи не враховують, в разі перерахунку…</p>
          <p>Примітка №3: Сума = Тариф × Кількість, якщо тариф не змінювався серед місяця.</p>
        </div>
      </div>
    </section>
  );
}


