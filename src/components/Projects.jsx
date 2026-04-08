import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="project-card glass"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="project-content" style={{ transform: "translateZ(50px)" }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" title="Source Code">
            <FaGithub /> Code
          </a>
          <a href={project.live} className="project-link" title="Live Preview">
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Premium Portfolio",
      description: "A professional portfolio website built with React, Vite, and Framer Motion, featuring glassmorphism and smooth animations.",
      tags: ["React", "Vite", "Framer Motion", "CSS3"],
      github: "https://github.com/amasha0123/portfolio",
      live: "#",
    },
    {
      title: "Academic Web App",
      description: "An ongoing development project for academic requirements, focused on building robust and scalable web solutions.",
      tags: ["React", "Node.js", "MySQL", "PHP"],
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Concept",
      description: "A design concept for a modern e-commerce platform with a focus on user experience and minimalist design.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="section" style={{ perspective: "1000px" }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;