import Image from "next/image";
import FormFreeTrial from "@/components/shared/form-free-trial";

import HeroImg from "@/images/hero-img-window.svg";
import HeroSmallImg from "@/images/hero-img-small-window.svg";

export default function HeroSection() {
  return (
    <section
      className="mt-15 lg:mt-34 mb-15 lg:mb-50 hero-section-bg"
      id="hero-section"
    >
      <div className="container hero-container-bg max-w-7xl grid lg:grid-cols-2">
        <div className="max-lg:text-center">
          <h1 className="mb-7 bg-[linear-gradient(148deg,_rgba(109,156,246,0.7)_0%,_#fff_52.13%)] bg-clip-text text-transparent">
            Revolutionize <br className="hidden md:inline-block" /> your DevOps
            journey <br className="hidden md:inline-block" />
            with DevOptima
          </h1>

          <p className="mb-9">
            Empower teams to innovate faster through streamlined development,{" "}
            <br className="hidden md:inline-block" />
            efficient automated workflows, and reliable scaling.
          </p>

          <FormFreeTrial />
        </div>
        <div className="hero-right-bg flex justify-center max-lg:mt-10 lg:justify-end">
          <div className="relative lg:-top-12 max-w-[36.8125rem] w-[90%] aspect-[589/415] self-start">
            <Image
              src={HeroSmallImg}
              alt=""
              width={376}
              height={244}
              priority
              className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.3)] blur-xs absolute top-0 right-0 w-[63.8%]"
            />
            <div className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.3)] absolute w-[85.2%] right-[14.77%] top-[21.4%] bg-gradient-to-b from-[rgba(35,70,144,0.25)] to-[rgba(10,24,52,0.25)] backdrop-blur-[3rem] rounded-2xl">
              <Image src={HeroImg} alt="" width={502} height={329} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
