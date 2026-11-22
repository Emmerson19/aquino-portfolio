import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Emmerson R. Aquino</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            className="rounded transition-colors duration-200 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=202210771%40gordoncollege.edu.ph&su=Portfolio%20inquiry"
            rel="noreferrer"
            target="_blank"
          >
            Email
            <span className="sr-only"> (opens Gmail in a new tab)</span>
          </a>
          <a
            className="rounded transition-colors duration-200 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
            href="https://github.com/Emmerson19"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <Link
            className="rounded transition-colors duration-200 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
