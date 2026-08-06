import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import BackgroundDecor from '../components/BackgroundDecor';
import MouseSpotlight from '../components/MouseSpotlight';
import { projectDetailsData } from '../data/projectsData';

import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetailsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="app-container project-details-page">
      <BackgroundDecor />
      <MouseSpotlight />
      
      <div className="project-details-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
        
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{project.title}</h1>
          <h3 className="project-subtitle">{project.subtitle}</h3>
          
          <div className="project-actions">
            {project.github && project.github !== "#" && (
              <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} className="project-btn primary" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="project-content-body glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.overview && (
            <section className="detail-section">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
            </section>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <section className="detail-section">
              <h2>Objectives</h2>
              <ul>
                {project.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="detail-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <h3>{feature.title}</h3>
                    <ul>
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <section className="detail-section">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </section>
          )}

          {project.systemDesign && (
            <section className="detail-section">
              <h2>System Design</h2>
              <div className="design-details">
                {project.systemDesign.concepts && (
                  <div>
                    <h4>Object-Oriented Concepts Used</h4>
                    <ul>
                      {project.systemDesign.concepts.map((concept, idx) => (
                        <li key={idx}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.systemDesign.classes && (
                  <div>
                    <h4>Main Classes</h4>
                    <p>{project.systemDesign.classes.join(', ')}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {project.databaseDesign && (
            <section className="detail-section">
              <h2>Database Design</h2>
              <p>{project.databaseDesign.description}</p>
              <ul>
                {project.databaseDesign.tables.map((table, index) => (
                  <li key={index}>{table}</li>
                ))}
              </ul>
            </section>
          )}
          
          {project.challenges && project.challenges.length > 0 && (
            <section className="detail-section">
              <h2>Challenges Solved</h2>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}
          
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <section className="detail-section">
              <h2>Future Improvements</h2>
              <ul>
                {project.futureImprovements.map((improvement, index) => (
                  <li key={index}>{improvement}</li>
                ))}
              </ul>
            </section>
          )}

          {project.conclusion && (
            <section className="detail-section">
              <h2>Conclusion</h2>
              <p>{project.conclusion}</p>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
