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
            I am a highly motivated **Third-Year Software Engineering undergraduate** at **NSBM Green University** with a strong academic record and a passion for developing scalable and impactful software solutions. My journey into technology is driven by a desire to innovate and apply my technical knowledge to real-world problems.
          </p>
          <p>
            Through my academic projects and my experience as a **School Leaver Trainee at Bank of Ceylon (BOC)**, I've honed essential soft skills such as **communication, teamwork, customer service, and time management**. I thrive in collaborative environments and am highly adaptable to new challenges and quick to learn new technologies.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>BSc (Hons)</h4>
              <p>Software Engineering (3rd Year)</p>
            </div>
            <div className="stat-item">
              <h4>Location</h4>
              <p>Badalkumbura, Sri Lanka</p>
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
          <h3>Soft Skills</h3>
          <ul>
            <li>🗣️ <strong>Communication:</strong> Clear and effective interactions.</li>
            <li>🤝 <strong>Teamwork:</strong> Collaborative and supportive approach.</li>
            <li>🧩 <strong>Problem Solving:</strong> Critical thinking to tackle challenges.</li>
            <li>⏱️ <strong>Time Management:</strong> Efficient and adaptable under pressure.</li>
            <li>😊 <strong>Customer Service:</strong> Experienced from Bank of Ceylon training.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
