import React from 'react';
import PageHeading from '../components/PageHeading.jsx';

const skills = [
  {
    title: 'Computer Networking',
    description:
      'Setting up, maintaining, and troubleshooting LAN/WAN networks, including configuring routers, servers, and switches.',
  },
  {
    title: 'Systems Analysis and Design',
    description:
      'Analyzing organizational processes and designing IT solutions that streamline workflows.',
  },
  {
    title: 'Web and Mobile Development',
    description:
      'Developing websites and applications with HTML, CSS, PHP, and frameworks such as React, Node.js, and Laravel.',
  },
];

function About() {
  return (
    <section aria-labelledby="page-title">
      <PageHeading
        description="I’m a BSIT student who genuinely enjoys building things from scratch and figuring out how to fix them when they break."
        eyebrow="A little about me"
        title="Curious by nature, practical by design."
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">My background</h2>
          <p className="mt-4 leading-8 text-gray-400">
            My background is rooted in hands-on curiosity, which eventually
            turned into a focus on software development, databases, and clean
            web design. I like keeping things practical my goal isn’t just to
            write code, but to build tools and applications that solve real
            problems without unnecessary clutter.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Education
            </p>
            <h3 className="mt-3 text-lg font-semibold text-gray-100">
              Bachelor of Science in Information Technology
            </h3>
            <p className="mt-2 text-gray-400">Gordon College · Currently studying</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">Skills</h2>
          <ul className="mt-5 space-y-4">
            {skills.map((skill) => (
              <li
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
                key={skill.title}
              >
                <h3 className="font-semibold text-gray-100">{skill.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {skill.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
