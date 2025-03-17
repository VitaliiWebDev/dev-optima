import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="py-25 lg:h-[53.125rem] my-8 lg:bg-[url(/images/testimonials-bg.svg)] bg-[120rem_auto] bg-center flex items-center">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-8 flex-wrap px-4">
          <div className="lg:p-7">
            <div className="ico-secondary mb-5">
              <Image
                src="/icons/focus-icon.svg"
                alt=""
                width={64}
                height={64}
                className="w-9 lg:w-16"
              />
            </div>
            <p className="lg:text-2xl mb-8">
              Thanks to DevOptima, our team can focus more on <b>innovation</b>{" "}
              and less on operational challenges. Their{" "}
              <b>cloud management solutions</b> are top-notch.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/images/john-smith.jpg"
                alt=""
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <div className="lg:text-[1.125rem] text-(--white)">
                  John Smith
                </div>
                <p className="lg:text-[0.9375rem]">IT Director at Reflex</p>
              </div>
            </div>
          </div>
          <div className="lg:p-7">
            <div className="ico-secondary mb-5">
              <Image
                src="/icons/changer-icon.svg"
                alt=""
                width={64}
                height={64}
                className="w-9 lg:w-16"
              />
            </div>
            <p className="lg:text-2xl mb-8">
              DevOptima has been a game-changer for us. With their support,
              we&lsquo;ve shifted our focus{" "}
              <b>
                from operational hurdles to pushing boundaries in innovation.
              </b>
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/images/jane-doe.jpg"
                alt=""
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <div className="lg:text-[1.125rem] text-(--white)">
                  Jane Doe
                </div>
                <p className="lg:text-[0.9375rem]">Tech Lead at Dribble</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
