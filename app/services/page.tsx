import Projects from "@/components/Projects";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MissionValues from "@/components/MissionValues";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <ServicesSection />
      <MissionValues />
      <Skills />
      <Projects />
      <CTASection />
      <Footer />
    </main>
  );
}
