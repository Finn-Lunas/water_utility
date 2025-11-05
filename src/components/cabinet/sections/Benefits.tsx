export default function Benefits() {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">Пільги за період</h2>
      <p className="text-center text-sm text-textSecondary">з вересня 2024 р. по вересень 2025 р.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-primary text-white">
              {["Пільга","Відсоток","Площа по нормі","Кількість","Дата початку","Дата кінця"].map((h)=>(
                <th key={h} className="text-left px-3 py-2 first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Порожня таблиця як на скріні */}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-textSecondary">
        <p className="font-medium">Примітка:</p>
        <p>1) Виводяться усі пільги, що діють у вказаний період.</p>
        <p>2) У графі «Кількість» вказана кількість жильців, що користуються цією пільгою.</p>
      </div>
    </section>
  );
}


