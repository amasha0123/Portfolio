import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPostgresql, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "React", icon: <FaReact />, color: "#61dbfb" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
        { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
        { name: "MySQL", icon: <FaDatabase />, color: "#00758f" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
        { name: "Vite", icon: <SiVite />, color: "#646cff" },
        { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Technical Excellence
      </motion.h2>

      <div className="skills-container">
        {categories.map((category, idx) => (
          <motion.div 
            key={category.title}
            className="skill-category glass"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: skill.color }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
