import type { News } from "@/components/sections/NewsSection";

type LatestNewsProps = {
  news: News;
};

export default function LatestNews({ news }: LatestNewsProps) {
  return (
    <div className="rounded-2xl border border-line shadow-soft overflow-hidden group flex flex-col h-full">
      <div className="h-32 md:h-40 bg-lightBlue flex-shrink-0" />
      <div className="p-5 flex flex-col flex-1">
        <div>
          <div className="flex items-center gap-3 text-sm text-textSecondary">
            <span
              className={`px-2 py-0.5 rounded-md border ${
                news.tag === "Оголошення"
                  ? "border-aqua text-aqua"
                  : "border-primary text-primary"
              }`}
            >
              {news.tag}
            </span>
            <span>{news.date}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold line-clamp-2 group-hover:text-primary transition">
            {news.title}
          </h3>
          <p className="mt-2 text-sm text-textSecondary line-clamp-2">
            {news.excerpt}
          </p>
        </div>
        <a
          href={`/news/${news.id}`}
          className="inline-flex mt-4 text-sm text-primary hover:text-primary-600"
        >
          Читати
        </a>
      </div>
    </div>
  );
}
