import React from 'react';
import PageHeading from '../components/PageHeading.jsx';

function Contact() {
  return (
    <section aria-labelledby="page-title">
      <PageHeading
        description="Have a question or want to talk about a project? You can reach me through email or GitHub."
        eyebrow="Get in touch"
        title="Contact"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
          <h3 className="font-semibold text-gray-100">Email</h3>
          <a
            className="mt-3 inline-block rounded text-gray-300 underline decoration-gray-500 underline-offset-4 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=202210771%40gordoncollege.edu.ph&su=Portfolio%20inquiry"
            rel="noreferrer"
            target="_blank"
          >
            202210771@gordoncollege.edu.ph
            <span className="sr-only"> (opens Gmail in a new tab)</span>
          </a>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
          <h3 className="font-semibold text-gray-100">GitHub</h3>
          <a
            className="mt-3 inline-block rounded text-gray-300 underline decoration-gray-500 underline-offset-4 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
            href="https://github.com/Emmerson19"
            rel="noreferrer"
            target="_blank"
          >
            github.com/Emmerson19
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
          <h3 className="font-semibold text-gray-100">Phone</h3>
          <a
            className="mt-3 inline-block rounded text-gray-300 underline decoration-gray-500 underline-offset-4 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
          >
            09267317892
          </a>
        </article>
      </div>
      <address className="mt-8 border-t border-white/10 pt-6 not-italic leading-7 text-gray-400">
        <span className="font-semibold text-gray-200">Address:</span>{' '}
        Purok 6 Upper Apitong, Old Cabalan, Olongapo City
      </address>
    </section>
  );
}

export default Contact;
