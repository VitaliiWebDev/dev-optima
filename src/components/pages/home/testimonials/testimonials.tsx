import Image from "next/image";

import FocusIcon from "@/icons/focus-icon.svg";
import ChangerIcon from "@/icons/changer-icon.svg";

import JaneDoe from "@/images/jane-doe.jpg";
import JohnSmith from "@/images/john-smith.jpg";

const testimonialsData = [
  {
    id: 1,
    ico: FocusIcon,
    description:
      "Thanks to DevOptima, our team can focus more on <b>innovation</b> and less on operational challenges. Their <b>cloud management solutions</b> are top-notch.",
    userAvatar: JohnSmith,
    userName: "John Smith",
    userPosition: "IT Director at Reflex",
  },
  {
    id: 2,
    ico: ChangerIcon,
    description:
      "DevOptima has been a game-changer for us. With their support, we&lsquo;ve shifted our focus <b>from operational hurdles to pushing boundaries in innovation.</b>",
    userAvatar: JaneDoe,
    userName: "Jane Doe",
    userPosition: "Tech Lead at Dribble",
  },
];

export default function Testimonials() {
  return (
    <section className="py-25 lg:h-[53.125rem] my-8 lg:bg-[url(/images/testimonials-bg.svg)] bg-[120rem_auto] bg-center flex items-center">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-8 flex-wrap px-4">
          {testimonialsData.map(
            ({ ico, description, userAvatar, userName, userPosition, id }) => (
              <div className="lg:p-7" key={id}>
                <div className="ico-secondary mb-5">
                  <Image
                    src={ico}
                    alt=""
                    width={64}
                    height={64}
                    className="w-9 lg:w-16"
                  />
                </div>
                <p
                  className="lg:text-2xl mb-8"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className="flex items-center gap-3">
                  <Image
                    src={userAvatar}
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <div className="lg:text-[1.125rem] text-white">
                      {userName}
                    </div>
                    <p className="lg:text-[0.9375rem]">{userPosition}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
