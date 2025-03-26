import Image from "next/image";

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
          <div className="innovative-card max-w-[23.75rem]">
            <div className="innovative-card__inner">
              <div className="md:h-[17.3125rem]">
                <Image
                  src="/images/continuous-img.svg"
                  alt=""
                  width={380}
                  height={277}
                ></Image>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-xl mb-3">
                  Continuous Integration & Deployment
                </h3>
                <p className="text-base leading-[137.5%]">
                  Streamline your development process with our advanced CI/CD
                  solutions, ensuring faster and more reliable code deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="innovative-card max-w-[23.75rem]">
            <div className="innovative-card__inner">
              <Image
                src="/images/cloud-img.svg"
                alt=""
                width={380}
                height={277}
              ></Image>
              <div className="p-8 pt-0">
                <h3 className="text-xl mb-3">
                  Cloud Solutions & Infrastructure Management
                </h3>
                <p className="text-base leading-[137.5%]">
                  Leverage the cloud for scalability and efficiency. We provide
                  comprehensive cloud infrastructure management and optimization
                  services.
                </p>
              </div>
            </div>
          </div>
          <div className="innovative-card max-w-[23.75rem]">
            <div className="innovative-card__inner">
              <Image
                src="/images/testing-img.svg"
                alt=""
                width={380}
                height={277}
              ></Image>
              <div className="p-8 pt-0">
                <h3 className="text-xl mb-3">
                  Automated Testing & Quality Assurance
                </h3>
                <p className="text-base leading-[137.5%]">
                  Enhance product quality with our automated testing services,
                  designed to detect issues early and reduce time-to-market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
