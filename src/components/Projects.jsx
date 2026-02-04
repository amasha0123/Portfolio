import React from 'react';
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1. Built with React and Node.js.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2. A web application using modern technologies.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Description of project 3. Focused on user experience and design.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;