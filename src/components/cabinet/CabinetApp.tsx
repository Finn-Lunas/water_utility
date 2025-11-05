"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import CardOverview from "./sections/CardOverview";
import Benefits from "./sections/Benefits";
import Payments from "./sections/Payments";
import ReadingsHistory from "./sections/ReadingsHistory";
import EnterReadings from "./sections/EnterReadings";
import Turnover from "./sections/Turnover";
import Charges from "./sections/Charges";
import PrintReceipt from "./sections/PrintReceipt";
import Connections from "./sections/Connections";
import Phones from "./sections/Phones";

export type TabId =
  | "card"
  | "benefits"
  | "payments"
  | "readings"
  | "enter"
  | "turnover"
  | "charges"
  | "print"
  | "history"
  | "phones";

const sections: { id: TabId; label: string; icon: string }[] = [
  { id: "card", label: "Картка абонента", icon: "💳" },
  { id: "benefits", label: "Інформація по пільзі", icon: "⚖️" },
  { id: "payments", label: "Платежі по о/рахунку", icon: "💸" },
  { id: "readings", label: "Показники по о/рахунку", icon: "🧮" },
  { id: "enter", label: "Введення показників", icon: "✍️" },
  { id: "turnover", label: "Обіг по о/рахунку", icon: "🔁" },
  { id: "charges", label: "Нарахування по о/рахунку", icon: "📈" },
  { id: "print", label: "Друк квитанції", icon: "🖨️" },
  { id: "history", label: "Історія підключень", icon: "🗂️" },
  { id: "phones", label: "Телефонний довідник", icon: "☎️" },
];

export default function CabinetApp() {
  const [active, setActive] = useState<TabId>("card");

  return (
    <section className="bg-white">
      <div className="container py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Контент */}
          <div className="lg:col-span-8 space-y-6">
            <HeaderBlock />
            <Content active={active} />
          </div>

          {/* Меню */}
          <aside className="lg:col-span-4">
            <Sidebar
              items={sections}
              active={active}
              onChange={(id) => setActive(id)}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function HeaderBlock() {
  const user = {
    accountNo: "244",
    fio: "Маргітич Надія Миколаївна",
    address: "Мукачівська, будинок № 34А кв.37",
    ip: "91.224.179.30",
    testMode: true,
  };
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-lightBlue grid place-items-center">
          <div className="w-9 h-9 rounded-full bg-primary/80" />
        </div>
        <div className="min-w-0">
          <div className="text-2xl md:text-3xl font-semibold">
            Особистий кабінет № {user.accountNo}
          </div>
          <div className="mt-1 text-lg font-semibold">{user.fio}</div>
          <div className="text-sm text-textSecondary">{user.address}</div>
          <div className="mt-2 text-xs text-textSecondary">
            Ваша IP адреса: {user.ip}
            {user.testMode && (
              <>
                {" · "}
                <span className="text-aqua font-medium">Тестовий режим</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Content({ active }: { active: TabId }) {
  switch (active) {
    case "card":
      return <CardOverview />;
    case "benefits":
      return <Benefits />;
    case "payments":
      return <Payments />;
    case "readings":
      return <ReadingsHistory />;
    case "enter":
      return <EnterReadings />;
    case "turnover":
      return <Turnover />;
    case "charges":
      return <Charges />;
    case "print":
      return <PrintReceipt />;
    case "history":
      return <Connections />;
    case "phones":
      return <Phones />;
  }
}


