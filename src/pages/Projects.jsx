import React from 'react';
import PageHeading from '../components/PageHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const projects = [
  {
    title: 'Smart Energy Consumption Monitoring System',
    description:
      'An AI-powered web-based system for monitoring, analyzing, predicting, and managing household electricity consumption without IoT devices or hardware sensors.',
    status: 'Academic project',
  },
];

function Projects() {
  return (
    <section aria-labelledby="page-title">
      <PageHeading
        description="A project focused on applying technology to practical, everyday problems."
        eyebrow="Selected work"
        title="Projects"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
