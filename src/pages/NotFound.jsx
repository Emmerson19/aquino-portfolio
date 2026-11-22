import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="py-12" aria-labelledby="not-found-title">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
        404 · Page not found
      </p>
      <h1
        className="mt-4 text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl"
        id="not-found-title"
      >
        This page isn’t here.
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-gray-400">
        The address may be incorrect, or the page may have moved.
      </p>
      <Link
        className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-gray-200 px-6 py-3 font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transform-none motion-reduce:transition-none"
        to="/"
      >
        Return home
      </Link>
    </section>
  );
}

export default NotFound;
