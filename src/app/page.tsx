import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionInnovative from "./components/SectionInnovative";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionInnovative />
      </main>
    </>
  );
}
