import Image from "next/image";

import AboutImg from "@/images/about-img.svg";
import TransformationIcon from "@/icons/transformation-icon.svg";
import OperationsIcon from "@/icons/operations-icon.svg";
import ImplementationIcon from "@/icons/implementation-icon.svg";
import AutomationIcon from "@/icons/automation-icon.svg";

const aboutData = [
  {
    ico: TransformationIcon,
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise.",
  },
  {
    ico: OperationsIcon,
    title: "Efficient operations",
    description: "Streamline processes for productivity gains.",
  },
  {
    ico: ImplementationIcon,
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline.",
  },
  {
    ico: AutomationIcon,
    title: "Automation mastery",
    description: "Unlock full automation potential.",
  },
];

export default function About() {
  return (
    <section className="mt-25 mb-10 lg:mb-38">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="lg:pr-[5.375rem] max-lg:order-2">
            <div className="about-img-round flex lg:justify-end">
              <Image
                src={AboutImg}
                alt="About Image"
                width={1000}
                height={619}
                className="lg:max-w-none max-lg:-translate-x-[13%]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center max-lg:order-1 max-lg:mb-8">
            <h2 className="mb-5">What is DevOptima?</h2>
            <p className="mb-14 max-w-[39.375rem]">
              At DevOptima, we are a team of passionate DevOps experts committed
              to transforming the way businesses approach software development
              and operations.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-[15.125rem_15.125rem] gap-x-10 lg:gap-x-20 gap-y-10">
              {aboutData.map(({ ico, title, description }) => (
                <div key={title}>
                  <div className="ico-primary mb-2">
                    <Image src={ico} alt="" width={36} height={36} />
                  </div>
                  <h3 className="mb-2">{title}</h3>
                  <p className="text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
