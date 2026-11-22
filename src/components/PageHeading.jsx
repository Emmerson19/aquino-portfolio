import React from 'react';

function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
        {eyebrow}
      </p>
      <h1
        className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl"
        id="page-title"
      >
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageHeading;
