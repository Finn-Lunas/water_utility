import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FileChip from "@/components/ui/FileChip";

export default function SubscriberSection() {
  return (
    <section className="py-12 md:py-16 bg-lightBlue/40">
      <SectionHeading
        id="subscriber"
        title="Інформація для абонента"
        subtitle="Тарифи, передача показників, оплата онлайн, підключення, планові роботи та інше."
      />
      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:items-start">
        {/* Left column */}
        <div className="space-y-4">
          <Accordion title="Тарифи" defaultOpen>
            <p>
              Діючі тарифи на централізоване водопостачання та водовідведення.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <FileChip name="Тарифи з 01.09.2025 (PDF)" size="0.8 МБ" />
              <FileChip name="Пояснювальна записка (DOCX)" size="0.3 МБ" />
            </div>
          </Accordion>
          <Accordion title="Передача показників">
            <p>Передавайте показники з 20 по 25 число кожного місяця.</p>
            <div className="mt-3">
              <a
                className="inline-flex items-center rounded-xl bg-primary hover:bg-primary-600 text-white px-4 py-2 text-sm"
                href="#"
              >
                Передати показники
              </a>
            </div>
          </Accordion>
          <Accordion title="Оплата онлайн">
            <p>
              Оплачуйте послуги через банківські сервіси або онлайн-кабінет.
            </p>
            <div className="mt-3">
              <a
                className="inline-flex items-center rounded-xl border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/5"
                href="#"
              >
                Оплатити онлайн
              </a>
            </div>
          </Accordion>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <Accordion title="Підключення/відключення">
            <p>Інструкції та список документів для підключення/відключення.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <FileChip name="Перелік документів (PDF)" size="0.2 МБ" />
            </div>
          </Accordion>
          <Accordion title="Планові роботи">
            <p>
              Графік планових робіт із можливими обмеженнями водопостачання.
            </p>
          </Accordion>
          <Accordion title="Питання/Відповіді">
            <p>Збірник відповідей на найчастіші запитання.</p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
