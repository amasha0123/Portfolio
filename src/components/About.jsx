import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="about-grid">
        <motion.div 
          className="about-text glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I am a dedicated Software Engineering undergraduate at **NSBM Green University**. 
            My journey into technology began with a curiosity for how things work, and it has 
            evolved into a passion for developing scalable and impactful software solutions.
          </p>
          <p>
            With a background as a Bank Trainee, I've honed essential soft skills like 
            **teamwork, communication, and time management**, which complement my technical expertise. 
            I thrive in collaborative environments and enjoy tackling complex problems.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>BSc (Hons)</h4>
              <p>Software Engineering</p>
            </div>
            <div className="stat-item">
              <h4>Location</h4>
              <p>Sri Lanka</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-details glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Core Values</h3>
          <ul>
            <li>✨ <strong>Quality:</strong> Writing clean, maintainable code.</li>
            <li>🚀 <strong>Growth:</strong> Continuously learning new technologies.</li>
            <li>🤝 <strong>Collaboration:</strong> Building together to achieve more.</li>
            <li>💡 <strong>Innovation:</strong> Finding creative solutions to problems.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
