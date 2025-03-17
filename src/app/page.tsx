import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InnovativeSection from "./components/InnovativeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ReadySection from "./components/ReadySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InnovativeSection />
        <TestimonialsSection />
        <ReadySection />
        <Footer />
      </main>
    </>
  );
}
