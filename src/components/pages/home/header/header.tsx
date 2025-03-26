import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container max-w-7xl mx-auto py-4 flex gap-x-4 items-center justify-between">
        <Link href="/" className="inline-block shrink-0">
          <Image src="./images/logo.svg" alt="Logo" width={173} height={48} />
        </Link>
        <nav className="left-1/2 max-md:hidden">
          <ul className="flex gap-x-4 lg:gap-x-12 gap-y-2">
            <li className="leading-none text-base">
              <a
                className="link-hover-bold before:text-white"
                href="#"
                data-before="About us"
              >
                About us
              </a>
            </li>
            <li className="leading-none text-base">
              <a
                className="link-hover-bold before:text-white"
                href="#"
                data-before="Services"
              >
                Services
              </a>
            </li>
            <li className="leading-none text-base">
              <a
                className="link-hover-bold before:text-white"
                href="#"
                data-before="Why DevOptima"
              >
                Why DevOptima
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn btn-secondary shrink-0 max-md:hidden">
          Get started
        </a>
        <button
          className="md:hidden text-inherit cursor-pointer"
          aria-label="Menu"
        >
          <Bars3Icon className="size-10" />
        </button>
      </div>
    </header>
  );
}
