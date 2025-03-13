"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [placeholder, setPlaceholder] = useState("Your business email...");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPlaceholder("Email...");
      } else {
        setPlaceholder("Your business email...");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mt-15 lg:mt-34 mb-15 lg:mb-50 hero-section-bg">
      <div className="container hero-container-bg max-w-7xl grid lg:grid-cols-2">
        <div className="max-lg:text-center">
          <h1
            className="mb-7"
            style={{
              background:
                "linear-gradient(148deg, rgba(109, 156, 246, 0.7) 0%, #fff 52.13%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Revolutionize <br className="hidden sm:inline-block" /> your DevOps
            journey <br className="hidden sm:inline-block" />
            with DevOptima
          </h1>

          <p className="mb-9">
            Empower teams to innovate faster through streamlined development,{" "}
            <br className="hidden sm:inline-block" />
            efficient automated workflows, and reliable scaling.
          </p>
          <div
            className="p-[1px] rounded-full max-w-[29rem] max-lg:m-auto"
            style={{
              background: "linear-gradient(87deg, #1b244f, #273871, #2c427f)",
            }}
          >
            <form
              action="#"
              className="flex items-center rounded-full"
              style={{
                background: "linear-gradient(215deg, #18264a 0%, #0f1631 100%)",
                maskImage: "linear-gradient(white 0%, white 100%)",
              }}
            >
              <input
                type="text"
                placeholder={placeholder}
                className="h-[3.5rem] px-6 w-full placeholder:font-light placeholder:text-[] focus:outline-0"
                style={{
                  maskImage: "linear-gradient(white 0%, white 100%)",
                }}
              />
              <button className="btn btn-fill shrink-0 py-0 h-11 mr-[0.375rem]">
                Free trial
              </button>
            </form>
          </div>
        </div>
        <div className="hero-right-bg flex justify-center max-lg:mt-10 lg:justify-end">
          <div className="relative lg:-top-12 max-w-[36.8125rem] w-[90%] aspect-[589/415] self-start">
            <Image
              src="/images/hero-img-small-window.svg"
              alt=""
              width={376}
              height={244}
              className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.3)] blur-xs absolute top-0 right-0 w-[63.8%]"
            />
            <div className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.3)] absolute w-[85.2%] right-[14.77%] top-[21.4%] bg-gradient-to-b from-[rgba(35,70,144,0.25)] to-[rgba(10,24,52,0.25)] backdrop-blur-[3rem] rounded-2xl">
              <Image
                src="/images/hero-img-window.svg"
                alt=""
                width={502}
                height={329}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
