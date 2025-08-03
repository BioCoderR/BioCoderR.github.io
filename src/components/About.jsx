import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and delivering exceptional user experiences.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to bring ideas to life.',
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

  return (
    <section
      id="about"
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
              About <span className={isDark ? 'text-red-500' : 'text-black'}>Me</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate developer who loves creating digital experiences that make a difference. 
              With expertise in modern web technologies and a keen eye for design, I bring ideas to life 
              through code.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`card ${isDark ? 'card-dark' : 'card-light'} text-center`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-6
                    ${isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100 text-black'}
                  `}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={28} />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Story */}
          <motion.div
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">
                My <span className={isDark ? 'text-red-500' : 'text-black'}>Journey</span>
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Started as a curious developer exploring the endless possibilities of code. 
                Over the years, I've honed my skills in various technologies and frameworks, 
                always staying up-to-date with the latest trends and best practices.
              </p>
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I believe in the power of technology to solve real-world problems and 
                create meaningful connections between people and digital products.
              </p>
              
              <motion.button
                className={`btn-primary ${
                  isDark ? 'btn-primary-dark' : 'btn-primary-light'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className={`
                  w-full h-96 rounded-2xl overflow-hidden
                  ${isDark ? 'bg-gray-800' : 'bg-gray-100'}
                `}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className={`text-6xl ${isDark ? 'text-red-500' : 'text-black'}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Code size={80} />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                  isDark ? 'bg-red-500' : 'bg-black'
                }`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full ${
                  isDark ? 'bg-red-500/60' : 'bg-gray-400'
                }`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;