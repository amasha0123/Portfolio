import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPostgresql, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJs />, color: "#b07219" }, // Using JS icon as a placeholder since FaJava is not imported, let's just stick to names or find better icons
        { name: "Python", icon: <FaJs />, color: "#3572A5" },
        { name: "C", icon: <FaJs />, color: "#555555" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "React.js", icon: <FaReact />, color: "#61dbfb" },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL / SQL", icon: <FaDatabase />, color: "#00758f" },
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f05032" },
        { name: "VS Code", icon: <FaNodeJs />, color: "#007acc" },
        { name: "IntelliJ IDEA", icon: <FaJs />, color: "#fe315d" },
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
