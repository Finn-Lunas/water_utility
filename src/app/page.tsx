import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/sections/NewsSection";
import SubscriberSection from "@/components/sections/SubscriberSection";
import AboutSection from "@/components/sections/AboutSection";
import JobsSection from "@/components/sections/JobsSection";
import ContactsSection from "@/components/sections/ContactsSection";
import FabMenu from "@/components/FabMenu";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        <NewsSection />
        <SubscriberSection />
        <AboutSection />
        <JobsSection />
        <ContactsSection />
      </main>
      <Footer />
      <FabMenu />
    </>
  );
}
