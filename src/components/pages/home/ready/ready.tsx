import Link from "next/link";

export default function Ready() {
  return (
    <section className="pb-[11rem] text-center">
      <div className="container flex flex-col items-center ready-container-bg">
        <h2 className="mb-5 w-fit bg-[linear-gradient(90deg,_rgba(109,156,246,0.7)_0%,_rgba(195,214,251,0.88)_15.93%,_#fff_51.07%,_rgba(208,223,252,0.9)_81.29%,_rgba(109,156,246,0.7)_100%)] bg-clip-text text-transparent">
          Ready to elevate your DevOps strategy?
        </h2>
        <p className="mb-10">
          Join the multitude of companies benefiting from optimized DevOps
          practices. <br className="md-max:hidden" /> Contact us to discover how
          DevOptima can help your business.
        </p>
        <div className="flex max-sm:flex-col justify-center gap-[1.125rem]">
          <Link href="/" className="btn btn-primary">
            Contact us
          </Link>
          <Link href="#hero-section" className="btn btn-secondary">
            Try for free
          </Link>
        </div>
      </div>
    </section>
  );
}
