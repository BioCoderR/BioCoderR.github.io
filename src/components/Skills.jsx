import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Skills = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 87 },
        { name: 'Python', level: 83 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 79 },
        { name: 'Figma', level: 88 },
        { name: 'Testing', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-padding ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className={isDark ? 'text-red-500' : 'text-black'}>Skills</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive toolkit of modern technologies and frameworks that I use to 
              build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={`card ${isDark ? 'card-dark' : 'card-light'}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className={`text-2xl font-bold mb-8 text-center ${
                  isDark ? 'text-red-500' : 'text-black'
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-gray-800' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className={`h-full rounded-full ${
                            isDark ? 'bg-red-500' : 'bg-black'
                          }`}
                          variants={progressVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Always learning and exploring new technologies to stay at the forefront of development.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              variants={containerVariants}
            >
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    ${isDark 
                      ? 'bg-gray-800 text-red-500 border border-gray-700' 
                      : 'bg-gray-100 text-black border border-gray-200'
                    }
                  `}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;