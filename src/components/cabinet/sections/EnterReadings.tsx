export default function EnterReadings() {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">
        Введення показників по воді за поточний місяць
      </h2>
      <p className="text-center text-sm text-textSecondary">станом на 30 вересня 2025 р.</p>

      <div className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm">
        <p className="text-center font-semibold underline">УВАГА!</p>
        <p className="mt-2">Лічильник, номер якого виділено червоним кольором, вимагає повірки!</p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["Місце","№ лічильника","Дата повірки","Дата занесення","Попередні показники","Показники","Різниця"].map(h=>(
                <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-lightBlue/30">
              <td className="px-3 py-2 border-b border-line">ванна</td>
              <td className="px-3 py-2 border-b border-line text-primary font-semibold">7315704</td>
              <td className="px-3 py-2 border-b border-line">01-06-2020</td>
              <td className="px-3 py-2 border-b border-line">—</td>
              <td className="px-3 py-2 border-b border-line">315.0</td>
              <td className="px-3 py-2 border-b border-line">
                <input className="h-9 w-28 rounded-lg border border-line px-2 outline-none focus:border-primary" placeholder="0.0" />
              </td>
              <td className="px-3 py-2 border-b border-line">0.0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="rounded-xl bg-primary px-6 h-11 text-white hover:bg-primary-600">
          Внести показники
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
        <div className="font-semibold">Помилка.</div>
        <p className="mt-1">
          1) Ви не внесли показники по всіх приладах обліку, тому розрахунок в поточному місяці буде проведений за середнім…
        </p>
      </div>
    </section>
  );
}


