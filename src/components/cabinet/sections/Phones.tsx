type Contact = {
  title: string;
  subtitle?: string;
  phones: string[];
  description?: string;
  contacts?: string[];
  links?: { label: string; href: string }[];
};

export default function Phones() {
  const contacts: Contact[] = [
    {
      title: "Аварійна служба",
      subtitle: "Цілодобово",
      phones: ["15-05", "(03141) 4-21-65", "+380509554927"],
      description: "Порушення водопровідної мережі, прориви труб, засмічення каналізації, витік стічних вод",
    },
    {
      title: "Адміністрація",
      subtitle: "Пн–Пт: 08:00–17:00, обідня перерва: 12:00–13:00",
      phones: ["(03141) 2-34-40"],
      contacts: [
        "Директор: Кулаков Андрій Федорович",
        "Головний інженер: Цогла Ігор Васильович",
        "Головний бухгалтер: Богдан Мирослава Петрівна",
      ],
    },
    {
      title: "Абонентний відділ",
      subtitle: "Пн–Пт: 08:00–17:00, обідня перерва: 12:00–13:00",
      phones: ["+380501930207 (SMS/дзвінок)", "+380509983798 (Viber)"],
      contacts: ["Начальник відділу: Корнел Анастасія Вікторівна"],
    },
    {
      title: "Наша адреса",
      phones: ["(03141) 2-34-40 (тел/факс)"],
      contacts: ["вул. Б.Хмельницького, 99", "м. Берегове, 90202"],
    },
    {
      title: "Зворотний зв'язок",
      phones: [],
      links: [
        { label: "karpatviz@meta.ua", href: "mailto:karpatviz@meta.ua" },
        { label: "Facebook", href: "https://www.facebook.com/lKarpatviz/" },
      ],
    },
  ];

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h2 className="text-lg font-semibold mb-4">Телефонний довідник</h2>
      <div className="grid gap-4">
        {contacts.map((contact, i) => (
          <div key={i} className="rounded-xl border border-line p-4">
            <div className="font-medium text-lg">{contact.title}</div>
            {contact.subtitle && (
              <div className="text-sm text-textSecondary mt-1">{contact.subtitle}</div>
            )}
            {contact.description && (
              <div className="text-sm text-textSecondary mt-2">{contact.description}</div>
            )}
            {contact.phones.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {contact.phones.map((phone, pi) => (
                  <a
                    key={pi}
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary text-sm text-primary hover:bg-primary hover:text-white transition"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            )}
            {contact.contacts && (
              <div className="mt-3 space-y-1 text-sm">
                {contact.contacts.map((c, ci) => (
                  <div key={ci} className="text-textSecondary">{c}</div>
                ))}
              </div>
            )}
            {contact.links && (
              <div className="mt-3 space-y-1 text-sm">
                {contact.links.map((link, li) => (
                  <div key={li}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


