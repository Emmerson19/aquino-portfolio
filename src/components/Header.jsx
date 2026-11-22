import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          className="w-fit rounded-lg font-semibold tracking-tight text-gray-100 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200 motion-reduce:transition-none"
          to="/"
        >
          Emmerson Aquino
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    `inline-flex min-h-10 items-center rounded-xl px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 motion-reduce:transition-none ${
                      isActive
                        ? 'bg-white/10 font-medium text-gray-100'
                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-100'
                    }`
                  }
                  end={link.to === '/'}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
