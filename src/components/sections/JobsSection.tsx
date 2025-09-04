import SectionHeading from "@/components/ui/SectionHeading";

type Job = {
  id: number;
  title: string;
  dept: string;
  city?: string;
  type: string;
  desc: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Слюсар аварійно-відновлювальних робіт",
    dept: "Аварійна служба",
    city: "Місто",
    type: "Повна зайнятість",
    desc: "Участь у виїздах, локалізація та усунення аварій на мережі.",
  },
  {
    id: 2,
    title: "Лаборант з контролю якості води",
    dept: "Лабораторія",
    city: "Місто",
    type: "Повна зайнятість",
    desc: "Відбір проб, проведення вимірювань, ведення протоколів.",
  },
  {
    id: 3,
    title: "Диспетчер кол-центру",
    dept: "Кол-центр",
    city: "Місто",
    type: "Позмінно",
    desc: "Прийом звернень абонентів, реєстрація заявок, координація бригад.",
  },
];

export default function JobsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <SectionHeading id="jobs" title="Відкриті вакансії" />
      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((j) => (
          <article
            key={j.id}
            className="rounded-2xl border border-line shadow-soft p-5"
          >
            <div className="text-sm text-textSecondary">
              {j.dept}
              {j.city ? ` · ${j.city}` : ""} · {j.type}
            </div>
            <h3 className="mt-1 text-lg font-semibold">{j.title}</h3>
            <p className="mt-2 text-sm text-textSecondary">{j.desc}</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-xl bg-primary hover:bg-primary-600 text-white px-4 py-2 text-sm"
              >
                Податися
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-xl border border-line px-4 py-2 text-sm hover:border-primary"
              >
                Переглянути
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
