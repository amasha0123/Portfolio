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
      title: "Portfolio",
      description: "A modern, responsive portfolio website showcasing projects, technical skills, and professional achievements.",
      tags: ["React", "Vite", "Framer Motion"],
      github: "https://github.com/amasha0123/Portfolio",
      live: "https://amasha0123.github.io/Portfolio/",
    },
    {
      title: "Elysian Stay",
      description: "A responsive full-stack booking application integrating Firebase for robust data management and Stripe API for secure payments.",
      tags: ["React", "Vite", "Node.js", "Express", "Firebase", "Stripe API"],
      github: "#",
      live: "#",
    },
    {
      title: "Online Learning Application",
      description: "A scalable Flutter-based LMS using Firebase, Clean Architecture, Provider state management, and secure RBAC authentication.",
      tags: ["Flutter", "Dart", "Firebase", "Provider"],
      github: "#",
      live: "#",
    },
    {
      title: "Auction Website",
      description: "A responsive online auction platform featuring real-time bid updates. Developed as a group project.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
      github: "#",
      live: "#",
    },
    {
      title: "Wedding Invite Website",
      description: "A responsive wedding invitation website with personalized guest invitations, custom animations, and social sharing features.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Internly Mobile App",
      description: "A Flutter app designed to find internships by uploading CVs, with mock interviews and quizzes for beginners. Developed as a group project.",
      tags: ["Flutter", "Dart"],
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