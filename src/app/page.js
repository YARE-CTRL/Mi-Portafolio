import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <BentoGrid />
      <Footer />
    </main>
  );
}
