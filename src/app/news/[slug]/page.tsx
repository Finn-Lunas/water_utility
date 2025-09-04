import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заплановані роботи на водогоні — Новини — Водоканал Карпатвіз",
  description: "Офіційна інформація про заплановані роботи на мережі.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md border text-sm border-primary text-primary">
      {children}
    </span>
  );
}

function Chip({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-3 py-1 rounded-full border border-line text-sm text-textSecondary hover:border-primary hover:text-textPrimary"
    >
      {children}
    </Link>
  );
}

function SmallCard({
  title,
  date,
  href = "#",
}: {
  title: string;
  date: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-line p-4 hover:border-primary transition bg-white"
    >
      <div className="text-xs text-textSecondary">{date}</div>
      <div className="mt-1 font-medium leading-snug group-hover:text-primary">
        {title}
      </div>
    </Link>
  );
}

export default function NewsArticlePage() {
  const article = {
    tag: "Новина",
    date: "11.08.2025",
    title: "Заплановані роботи на водогоні в районі «Південний»",
    readingTime: "4 хв",
  };

  return (
    <main className="pt-[var(--header-h)]">
      <div className="border-b border-line bg-lightBlue/40">
        <div className="container py-3 text-sm text-textSecondary">
          <Link href="/" className="hover:text-textPrimary">
            Головна
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#news" className="hover:text-textPrimary">
            Новини
          </Link>
          <span className="mx-2">/</span>
          <span className="text-textPrimary">Деталі</span>
        </div>
      </div>

      <section className="bg-white">
        <div className="container py-8 md:py-10">
          <div className="flex items-center gap-3 text-sm text-textSecondary">
            <Badge>{article.tag}</Badge>
            <span>{article.date}</span>
            <span>· {article.readingTime}</span>
          </div>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-textPrimary">
            {article.title}
          </h1>

          <div className="mt-6 rounded-2xl overflow-hidden shadow-soft">
            <div className="aspect-[16/9] bg-lightBlue" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <div className="prose prose-lg max-w-none prose-headings:text-textPrimary prose-p:text-textSecondary prose-li:text-textSecondary prose-strong:text-textPrimary prose-a:text-primary hover:prose-a:text-primary-600">
              <p>
                Під час робіт можливе тимчасове зниження тиску у водомережі та
                локальні відключення. Просимо мешканців поставитись із
                розумінням.
              </p>
              <h2>Що буде зроблено</h2>
              <ul>
                <li>Заміна запірної арматури на ділянці вул. Водна, 12–28.</li>
                <li>Промивання та діагностика магістральної лінії.</li>
                <li>Встановлення нового вузла обліку.</li>
              </ul>
              <h3>Час проведення</h3>
              <p>
                11 серпня з 09:00 до 18:00. Після завершення — поступове
                відновлення тиску.
              </p>
              <blockquote>
                Аварійна служба працює у штатному режимі. У разі потреби
                звертайтесь за телефоном 0-800-XXX-XXX.
              </blockquote>
              <p>
                Слідкуйте за оновленнями у розділі{" "}
                <Link href="/#news">«Новини»</Link> та у наших ботах.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm text-textSecondary">Теги:</span>
              <Chip>#водопостачання</Chip>
              <Chip>#планові_роботи</Chip>
              <Chip>#повідомлення</Chip>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="#"
                className="rounded-2xl border border-line p-4 hover:border-primary transition bg-white"
              >
                <div className="text-xs text-textSecondary">
                  Попередня новина
                </div>
                <div className="mt-1 font-medium">
                  Оновлення особистого кабінету
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-2xl border border-line p-4 hover:border-primary transition bg-white text-right"
              >
                <div className="text-xs text-textSecondary">
                  Наступна новина
                </div>
                <div className="mt-1 font-medium">
                  Графік відключень на тиждень
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="/#news"
                className="inline-flex items-center rounded-xl border border-line px-4 py-2 text-sm hover:border-primary"
              >
                ← До всіх новин
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-line p-5 bg-white">
              <div className="font-medium">Останні новини</div>
              <div className="mt-4 grid gap-3">
                <SmallCard
                  date="10.08.2025"
                  title="Планові роботи на насосній станції"
                />
                <SmallCard
                  date="09.08.2025"
                  title="Тарифи з 01.09: публікація документів"
                />
                <SmallCard
                  date="08.08.2025"
                  title="Запуск Telegram-бота для показників"
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-line p-5 bg-white">
              <div className="font-medium">Корисні матеріали</div>
              <div className="mt-3 grid gap-2">
                <Link
                  href="#"
                  className="text-sm text-primary hover:text-primary-600"
                >
                  Тарифи з 01.09.2025 (PDF, 0.8 МБ)
                </Link>
                <Link
                  href="#"
                  className="text-sm text-primary hover:text-primary-600"
                >
                  Порядок передачі показників (PDF, 0.2 МБ)
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
