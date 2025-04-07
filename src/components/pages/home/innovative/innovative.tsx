import Image from "next/image";

import ContinuousImg from "@/images/continuous-img.svg";
import CloudImg from "@/images/cloud-img.svg";
import TestingImg from "@/images/testing-img.svg";

const innovativeData = [
  {
    img: ContinuousImg,
    title: "Continuous Integration & Deployment",
    description:
      "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.",
  },
  {
    img: CloudImg,
    title: "Cloud Solutions & Infrastructure Management",
    description:
      "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services. ",
  },
  {
    img: TestingImg,
    title: "Automated Testing & Quality Assurance",
    description:
      "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.",
  },
];

export default function Innovative() {
  return (
    <section className="mt-10 mb-8 lg:mt-38">
      <div className="container">
        <h2 className="text-center mb-5">
          Innovative solutions <br className="md-max:hidden" /> for operational
          excellence
        </h2>
        <p className="text-center mb-[3.5rem]">
          Tailored DevOps expertise driving your business momentum.{" "}
          <br className="md-max:hidden" />
          Personalized solutions for growth and evolution.
        </p>
        <div className="flex flex-wrap justify-center gap-10 cards-bg">
          {innovativeData.map(({ img, title, description }) => (
            <div className="innovative-card max-w-[23.75rem]" key={title}>
              <div className="innovative-card__inner">
                <div className="md:h-[17.3125rem]">
                  <Image src={img} alt="" width={380} height={277}></Image>
                </div>
                <div className="p-8 pt-0">
                  <h3 className="text-xl mb-3">{title}</h3>
                  <p className="text-base leading-[137.5%]">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
