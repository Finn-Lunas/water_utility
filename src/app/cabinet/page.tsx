import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CabinetApp from "@/components/cabinet/CabinetApp";

export default function CabinetPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        <CabinetApp />
      </main>
      <Footer />
    </>
  );
}

