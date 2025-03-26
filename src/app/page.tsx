import Header from "../components/pages/home/header";
import Hero from "../components/pages/home/hero";
import About from "../components/pages/home/about";
import Innovative from "../components/pages/home/innovative";
import Testimonials from "../components/pages/home/testimonials";
import Ready from "../components/pages/home/ready";
import Footer from "../components/pages/home/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Innovative />
        <Testimonials />
        <Ready />
        <Footer />
      </main>
    </>
  );
}
