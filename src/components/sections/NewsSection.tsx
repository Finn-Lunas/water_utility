import SectionHeading from "@/components/ui/SectionHeading";
import Pagination from "@/components/ui/Pagination";

export type News = {
  id: number;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
};

export const news: News[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Заплановані роботи на водогоні в районі Південний",
  date: "11.08.2025",
  tag: i % 2 ? "Оголошення" : "Новина",
  excerpt:
    "Можливе короткочасне зниження тиску у водомережі. Просимо вибачення за тимчасові незручності.",
}));

export default function NewsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <SectionHeading id="news" title="Останні новини" />
      <div className="container mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-line shadow-soft overflow-hidden group"
          >
            <div className="aspect-[16/9] bg-lightBlue" />
            <div className="p-5">
              <div className="flex items-center gap-3 text-sm text-textSecondary">
                <span
                  className={`px-2 py-0.5 rounded-md border ${
                    item.tag === "Оголошення"
                      ? "border-aqua text-aqua"
                      : "border-primary text-primary"
                  }`}
                >
                  {item.tag}
                </span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold line-clamp-2 group-hover:text-primary transition">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-textSecondary line-clamp-3">
                {item.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex mt-4 text-sm text-primary hover:text-primary-600"
              >
                Читати
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="container">
        <Pagination />
      </div>
    </section>
  );
}
