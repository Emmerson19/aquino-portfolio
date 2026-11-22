import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      className="space-y-16 py-4 sm:space-y-20 sm:py-8"
      aria-labelledby="home-title"
    >
      <div className="max-w-4xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-gray-300 sm:text-sm">
          Frontend Developer <span className="mx-2 text-gray-600">/</span> BSIT
          Student
        </p>
        <h1
          className="text-4xl font-bold leading-tight tracking-tight text-gray-50 sm:text-6xl sm:leading-[1.1]"
          id="home-title"
        >
          Hi, I’m Emmerson R. Aquino.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
          I’m studying for a <strong>Bachelor of Science in Information Technology</strong> at <strong>Gordon College</strong>.
          I’m 22 and live in <strong>Purok 6, Upper Apitong, Old Cabalan,
          Olongapo City</strong>.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gray-200 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            to="/projects"
          >
            View my project
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            to="/contact"
          >
            Get in touch
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            to="/about"
          >
            Learn more about me
          </Link>
        </div>
      </div>
      <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 sm:gap-6 sm:pt-10">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm sm:p-7">
          <h2 className="text-lg font-semibold text-gray-100">What I enjoy</h2>
          <p className="mt-3 leading-7 text-gray-400">
            Building useful web experiences and solving practical problems
            through technology.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm sm:p-7">
          <h2 className="text-lg font-semibold text-gray-100">
            Currently learning
          </h2>
          <p className="mt-3 leading-7 text-gray-400">
            Software development, databases, and clean web design.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
