export default function PrintReceipt() {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-center text-lg font-semibold">Друк квитанції за серпень 2025 р.</h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <label className="text-sm">Введіть суму для оплати</label>
        <input className="h-10 w-28 rounded-lg border border-line px-3 outline-none focus:border-primary" defaultValue="0.00" />
        <button className="h-10 rounded-lg bg-primary px-4 text-white hover:bg-primary-600">Друк квитанції</button>
      </div>
    </section>
  );
}


