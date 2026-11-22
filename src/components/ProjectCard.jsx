import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-black/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
        Featured project
      </p>
      <h2 className="text-xl font-semibold leading-snug text-gray-100 sm:text-2xl">
        {project.title}
      </h2>
      <p className="mt-4 leading-7 text-gray-400">{project.description}</p>
      {project.status && (
        <p className="mt-6 border-t border-white/10 pt-4 text-sm text-gray-500">
          {project.status}
        </p>
      )}
    </article>
  );
}

export default ProjectCard;
