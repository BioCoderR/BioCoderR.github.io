import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Projects = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and Stripe integration.',
      longDescription: 'A full-stack e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment processing. Built with React, Node.js, Express, MongoDB, and Stripe API.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      live: '#',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      longDescription: 'A comprehensive task management solution with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking. Built with React, Socket.io, and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Express', 'Material-UI'],
      github: '#',
      live: '#',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'AI Dashboard',
      description: 'An analytics dashboard with AI-powered insights and data visualization.',
      longDescription: 'An intelligent analytics dashboard that provides AI-powered insights, interactive data visualizations, and predictive analytics. Features include real-time data processing, custom chart generation, and machine learning integration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      github: '#',
      live: '#',
      category: 'Data Science',
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication.',
      longDescription: 'A secure mobile banking solution featuring biometric authentication, transaction history, bill payments, and account management. Built with React Native, featuring end-to-end encryption and compliance with banking security standards.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometrics'],
      github: '#',
      live: '#',
      category: 'Mobile',
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging and content sharing.',
      longDescription: 'A comprehensive social media platform featuring real-time messaging, content sharing, user profiles, news feed algorithms, and social interactions. Built with modern web technologies and optimized for performance.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['React', 'GraphQL', 'Redis', 'WebSocket', 'AWS'],
      github: '#',
      live: '#',
      category: 'Full Stack',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with dark/light theme and animations.',
      longDescription: 'A modern portfolio website featuring responsive design, dark/light theme switching, smooth animations, and optimized performance. Built with React, Framer Motion, and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Cloudflare'],
      github: '#',
      live: '#',
      category: 'Frontend',
    },
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile', 'Data Science'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-padding ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
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
              My <span className={isDark ? 'text-red-500' : 'text-black'}>Projects</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work, featuring modern web applications, 
              mobile apps, and innovative solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category
                    ? isDark 
                      ? 'bg-red-500 text-white' 
                      : 'bg-black text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`card ${isDark ? 'card-dark' : 'card-light'} group cursor-pointer`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${isDark ? 'bg-red-500/20' : 'bg-black/20'}
                      flex items-center justify-center
                    `}>
                      <Eye className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`
                            px-3 py-1 text-xs rounded-full
                            ${isDark 
                              ? 'bg-gray-800 text-red-500' 
                              : 'bg-gray-100 text-black'
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                          ${isDark 
                            ? 'bg-gray-800 text-white hover:bg-gray-700' 
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                          ${isDark 
                            ? 'bg-red-500 text-white hover:bg-red-600' 
                            : 'bg-black text-white hover:bg-gray-800'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              className={`
                relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8
                ${isDark ? 'bg-gray-900' : 'bg-white'}
              `}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`
                      px-3 py-1 text-sm rounded-full
                      ${isDark 
                        ? 'bg-gray-800 text-red-500' 
                        : 'bg-gray-100 text-black'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.github}
                  className={`btn-secondary ${
                    isDark ? 'btn-secondary-dark' : 'btn-secondary-light'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </motion.a>
                
                <motion.a
                  href={selectedProject.live}
                  className={`btn-primary ${
                    isDark ? 'btn-primary-dark' : 'btn-primary-light'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;