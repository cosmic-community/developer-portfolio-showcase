import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Web Developer Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Building product-ready experiences with clarity and speed.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore curated projects, technical expertise, and the experience that
            powers high-impact digital products.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
            >
              View projects
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700"
            >
              Work experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}