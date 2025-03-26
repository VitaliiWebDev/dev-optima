import Image from "next/image";

export default function About() {
  return (
    <section className="mt-25 mb-10 lg:mb-38">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="lg:pr-[5.375rem] max-lg:order-2">
            <div className="about-img-round flex lg:justify-end">
              <Image
                src="/images/about-img.svg"
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
              <div>
                <div className="ico-primary mb-4">
                  <Image
                    src="/icons/transformation-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-xl mb-2">DevOps transformation</h3>
                <p className="text-base">
                  Reshaping businesses with DevOps expertise.
                </p>
              </div>
              <div>
                <div className="ico-primary mb-4">
                  <Image
                    src="/icons/operations-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-xl mb-2">Efficient operations</h3>
                <p className="text-base">
                  Streamline processes for productivity gains.
                </p>
              </div>
              <div>
                <div className="ico-primary mb-4">
                  <Image
                    src="/icons/implementation-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-xl mb-2">CI/CD implementation</h3>
                <p className="text-base">
                  Seamless software delivery pipeline.
                </p>
              </div>
              <div>
                <div className="ico-primary mb-4">
                  <Image
                    src="/icons/automation-icon.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-xl mb-2">Automation mastery</h3>
                <p className="text-base">Unlock full automation potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
