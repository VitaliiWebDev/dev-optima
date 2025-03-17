import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-(--black) pt-12 pb-[3.125rem]">
      <div className="container max-w-7xl">
        <div className="flex flex-wrap gap-10">
          <Link href="/">
            <Image src="./images/logo.svg" alt="Logo" width={144} height={40} />
          </Link>
          <div className="flex max-sm:flex-col max-lg:justify-between max-lg:w-full gap-10 lg:gap-[11rem] md:ml-auto">
            <div className="footer-nav">
              <h2 className="text-base mb-4 font-medium font-body">
                Resources
              </h2>
              <ul>
                <li>
                  <a href="#" className="link-hover-bold" data-before="Docs">
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-hover-bold"
                    data-before="Release notes"
                  >
                    Release notes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-hover-bold"
                    data-before="Security"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav">
              <h2 className="text-base mb-4 font-medium font-body">
                Community
              </h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-x-[0.625rem] link-hover-bold before:left-auto before:right-0 before:-translate-x-[0.5px] hover:svg"
                    data-before="Twitter"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z"
                        fill="var(--grey-200)"
                      />
                    </svg>{" "}
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-x-[0.625rem] link-hover-bold before:left-auto before:right-0 before:-translate-x-[0.5px]"
                    data-before="LinkedIn"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_124_326)">
                        <path
                          d="M15.3 0H0.7C0.3 0 0 0.3 0 0.7V15.4C0 15.7 0.3 16 0.7 16H15.4C15.8 16 16.1 15.7 16.1 15.3V0.7C16 0.3 15.7 0 15.3 0ZM4.7 13.6H2.4V6H4.8V13.6H4.7ZM3.6 5C2.8 5 2.2 4.3 2.2 3.6C2.2 2.8 2.8 2.2 3.6 2.2C4.4 2.2 5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5ZM13.6 13.6H11.2V9.9C11.2 9 11.2 7.9 10 7.9C8.8 7.9 8.6 8.9 8.6 9.9V13.7H6.2V6H8.5V7C8.8 6.4 9.6 5.8 10.7 5.8C13.1 5.8 13.5 7.4 13.5 9.4V13.6H13.6Z"
                          fill="var(--grey-200)"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_124_326">
                          <rect width="16" height="16" fill="var(--grey-200)" />
                        </clipPath>
                      </defs>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-x-[0.625rem] link-hover-bold before:left-auto before:right-0 before:-translate-x-[0.5px] hover:svg"
                    data-before="GitHub"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_124_331)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 0.199219C3.6 0.199219 0 3.79922 0 8.19922C0 11.6992 2.3 14.6992 5.5 15.7992C5.9 15.8992 6 15.5992 6 15.3992C6 15.1992 6 14.6992 6 13.9992C3.8 14.4992 3.3 12.9992 3.3 12.9992C2.9 12.0992 2.4 11.7992 2.4 11.7992C1.7 11.2992 2.5 11.2992 2.5 11.2992C3.3 11.3992 3.7 12.0992 3.7 12.0992C4.4 13.3992 5.6 12.9992 6 12.7992C6.1 12.2992 6.3 11.8992 6.5 11.6992C4.7 11.4992 2.9 10.7992 2.9 7.69922C2.9 6.79922 3.2 6.09922 3.7 5.59922C3.6 5.39922 3.3 4.59922 3.8 3.49922C3.8 3.49922 4.5 3.29922 6 4.29922C6.6 4.09922 7.3 3.99922 8 3.99922C8.7 3.99922 9.4 4.09922 10 4.29922C11.5 3.29922 12.2 3.49922 12.2 3.49922C12.6 4.59922 12.4 5.39922 12.3 5.59922C12.8 6.19922 13.1 6.89922 13.1 7.69922C13.1 10.7992 11.2 11.3992 9.4 11.5992C9.7 11.9992 10 12.4992 10 13.1992C10 14.2992 10 15.0992 10 15.3992C10 15.5992 10.1 15.8992 10.6 15.7992C13.8 14.6992 16.1 11.6992 16.1 8.19922C16 3.79922 12.4 0.199219 8 0.199219Z"
                          fill="var(--grey-200)"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_124_331">
                          <rect width="16" height="16" fill="var(--grey-200)" />
                        </clipPath>
                      </defs>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-x-[0.625rem] link-hover-bold before:left-auto before:right-0 before:-translate-x-[0.5px] hover:svg"
                    data-before="Discourse"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7.85046C0 3.59838 3.64769 0.152344 7.98 0.152344C12.3077 0.152344 15.8246 3.73423 15.8246 7.9848C15.8246 12.2354 12.3108 15.8142 7.97846 15.8142L0 15.8218V7.85046ZM5.65939 3.75696C6.39156 3.34837 7.21931 3.1333 8.06163 3.13281H8.06625C8.7915 3.13316 9.50749 3.29266 10.1618 3.59962C10.8161 3.90659 11.3921 4.35325 11.8477 4.9069C12.3033 5.46055 12.6269 6.10717 12.7948 6.7994C12.9627 7.49164 12.9707 8.21195 12.8182 8.90761C12.6657 9.60326 12.3565 10.2566 11.9133 10.8199C11.4701 11.3831 10.9041 11.842 10.2567 12.1628C9.60942 12.4837 8.89713 12.6584 8.17206 12.6743C7.44699 12.6901 6.72749 12.5466 6.06625 12.2543L2.90625 12.9547L3.78625 10.1773C3.38533 9.45053 3.18364 8.63403 3.20091 7.80778C3.21818 6.98152 3.45383 6.17383 3.88478 5.46375C4.31573 4.75368 4.92722 4.16556 5.65939 3.75696Z"
                        fill="var(--grey-200)"
                      />
                    </svg>
                    Discourse
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav">
              <h2 className="text-base mb-4 font-medium font-body">Legal</h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="link-hover-bold"
                    data-before="Privacy policy"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-hover-bold"
                    data-before="Terms of service"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm max-sm:mt-10">
          Devoptima 2023 &copy; All rights reserved
        </p>
      </div>
    </section>
  );
}
