import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const mapSrc = `https://www.google.com/maps?hl=uk&q=${encodeURIComponent(
    "ППО ТОВ ВОДОКАНАЛ КАРПАТВІЗ"
  )}&ll=48.2003659,22.6307803&z=16&output=embed`;

  return (
    <footer className="border-t border-line">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-vodokanal-karpatviz.jpg"
              alt="Водоканал Карпатвіз"
              width={0}
              height={0}
              sizes="36px"
              style={{ width: 36, height: "auto" }}
              className="rounded-xl object-cover"
            />
            <div>
              <div className="font-semibold">Водоканал Карпатвіз</div>
              <div className="text-sm text-textSecondary">
                Надійна вода для міста
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium">Сайт</div>
              <Link
                href="/#news"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Новини
              </Link>
              <Link
                href="/#subscriber"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Для абонента
              </Link>
              <Link
                href="/#about"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Про нас
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Робота</div>
              <Link
                href="/#jobs"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Вакансії
              </Link>
              <Link
                href="/#contacts"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Контакти
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Правова</div>
              <a
                href="#"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Політика конфіденційності
              </a>
              <a
                href="#"
                className="block py-0.5 text-textSecondary hover:text-textPrimary"
              >
                Публічний договір
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-line shadow-soft h-[240px] md:h-[260px]">
          <iframe
            title="Карта Водоканал Карпатвіз"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container py-4 text-xs text-textSecondary">
          © {new Date().getFullYear()} КП «Водоканал Карпатвіз». Усі права
          захищено.
        </div>
      </div>
    </footer>
  );
}
