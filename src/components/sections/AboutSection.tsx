import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <SectionHeading id="about" title="Про нас" />
      <div className="container mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <p>
            КП «Водоканал» забезпечує надійне та безпечне водопостачання
            мешканцям міста, підтримуючи якість води на високому рівні та
            модернізуючи інфраструктуру. Ми працюємо прозоро, відповідально та з
            повагою до абонентів.
          </p>
          <p>
            Наша команда — це інженери, диспетчери, аварійні бригади та
            оператори, які щоденно слідкують за стабільною роботою мережі та
            оперативно реагують на виклики.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-soft bg-lightBlue aspect-[16/9]" />
      </div>
    </section>
  );
}
