import SectionHeading from "@/components/ui/SectionHeading";
import ContactItem from "@/components/ui/ContactItem";
import Image from "next/image";

function Chip({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const Tag = href ? "a" : "span";
  return (
    <Tag
      href={href}
      className="inline-flex items-center px-2.5 py-1 rounded-full border border-line text-xs text-textSecondary hover:border-primary hover:text-textPrimary"
    >
      {children}
    </Tag>
  );
}

export default function ContactsSection() {
  const TopCards = (
    <>
      <ContactItem
        title="Наша адреса"
        lines={[
          "вул. Б.Хмельницького, 99",
          "м. Берегове, 90202",
          <a
            key="map"
            href="https://www.google.com/maps/dir/?api=1&destination=48.2003659,22.6307803&travelmode=driving"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Прокласти маршрут
          </a>,
          <span key="fax">
            Тел/факс{" "}
            <a href="tel:+380314123440" className="text-primary">
              (03141) 2-34-40
            </a>
          </span>,
        ]}
      />
      <ContactItem
        title="Графік роботи"
        lines={[
          "Пн–Пт: 08:00–17:00",
          "Обідня перерва: 12:00–13:00",
          "Сб–Нд: вихідний",
        ]}
      />
      <ContactItem
        title="Аварійна служба (цілодобово)"
        lines={[
          "Порушення водопровідної мережі, прориви труб, засмічення каналізації, витік стічних вод",
          <div key="t" className="flex flex-wrap gap-2">
            <Chip href="tel:1505">15-05</Chip>
            <Chip href="tel:+380314142165">(03141) 4-21-65</Chip>
            <Chip href="tel:+380509554927">+380509554927</Chip>
            <span className="text-xs">(доступно 24 години на добу)</span>
          </div>,
        ]}
      />
      <ContactItem
        title="Hibabejelentési szolgálat (éjjel-nappal)"
        lines={[
          "Ivóvíz hálózati hibák, csőtörés, csatornadugulás, szennyvízelöntés",
          <div key="hu" className="flex flex-wrap gap-2">
            <Chip href="tel:1505">15-05</Chip>
            <Chip href="tel:+380314142165">(03141) 4-21-65</Chip>
            <Chip href="tel:+380509554927">+380509554927</Chip>
            <span className="text-xs">(a nap 24 órájában elérhető)</span>
          </div>,
        ]}
      />
    </>
  );

  const BottomRow = (
    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ContactItem
        title="Адміністрація"
        lines={[
          <span key="d">
            <span className="font-medium">Директор:</span> Кулаков Андрій
            Федорович — приймальня, тел/факс{" "}
            <a href="tel:+380314123440" className="text-primary">
              (03141) 2-34-40
            </a>
          </span>,
          <span key="e">
            <span className="font-medium">Головний інженер:</span> Цогла Ігор
            Васильович — тел/факс{" "}
            <a href="tel:+380314123440" className="text-primary">
              (03141) 2-34-40
            </a>
          </span>,
          <span key="b">
            <span className="font-medium">Головний бухгалтер:</span> Богдан
            Мирослава Петрівна — тел/факс{" "}
            <a href="tel:+380314123440" className="text-primary">
              (03141) 2-34-40
            </a>
          </span>,
        ]}
      />
      <ContactItem
        title="Абонентний відділ"
        lines={[
          <span key="h">
            <span className="font-medium">Начальник відділу:</span> Корнел
            Анастасія Вікторівна
          </span>,
          <div key="phones" className="flex flex-wrap gap-2">
            <Chip href="tel:+380501930207">SMS/дзвінок: +380501930207</Chip>
            <Chip href="viber://chat?number=%2B380509983798">
              Viber: +380509983798
            </Chip>
          </div>,
        ]}
      />
      <ContactItem
        title="Зворотний зв’язок"
        lines={[
          <a key="f" href="mailto:karpatviz@meta.ua" className="text-primary">
            karpatviz@meta.ua
          </a>,
          <a
            key="fb"
            href="https://www.facebook.com/lKarpatviz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Facebook
          </a>,
        ]}
      />
    </div>
  );

  return (
    <section className="py-12 md:py-16 bg-lightBlue/40">
      <SectionHeading id="contacts" title="Контакти" />
      <div className="container mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Image on the left spanning two rows; centered, no crop */}
        <div className="lg:col-span-5 lg:row-span-2 rounded-2xl overflow-hidden shadow-soft bg-lightBlue min-h-[300px] flex items-center justify-center p-2">
          <Image
            src="/contacts.png"
            alt="Контакти"
            width={0}
            height={0}
            sizes="(min-width:1024px) 40vw, 100vw"
            style={{ width: "100%", height: "auto" }}
            className="max-w-full"
          />
        </div>

        {/* Top-right: 2x2 cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TopCards}
        </div>

        {/* Bottom row: one line across */}
        {BottomRow}
      </div>
    </section>
  );
}
