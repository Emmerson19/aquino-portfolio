import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-gray-100 selection:bg-gray-300 selection:text-slate-950">
      <a
        className="sr-only z-50 rounded-xl bg-gray-200 px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main
        className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
        id="main-content"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
