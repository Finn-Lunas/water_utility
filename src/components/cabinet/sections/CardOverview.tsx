import KvTable from "../KvTable";

export default function CardOverview() {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <div className="text-center text-sm text-textSecondary">
        Дані абонента на <span className="font-medium text-textPrimary">30 вересня 2025 р.</span>
      </div>
      <div className="mt-4">
        <KvTable
          title="Маргітич Надія Миколаївна"
          rows={[
            ["Номер особового рахунку:", "244"],
            ["Кількість прописаних:", "2"],
            ["Кількість проживаючих:", "0"],
            ["Мешканців, що користуються пільгами:", "0"],
            ["Наявність холодної води:", "так"],
            ["Наявність каналізації:", "так"],
            ["Переплата: на 01.09.2025 р.:", "683.50", true],
          ]}
        />
      </div>
    </section>
  );
}


