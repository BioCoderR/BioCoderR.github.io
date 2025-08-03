import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useParallax } from '../hooks/useParallax';
import ParallaxBackground from './ParallaxBackground';

const Hero = () => {
  const { isDark } = useTheme();
  const parallaxOffset = useParallax(0.3);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className={`
        relative min-h-screen flex items-center justify-center overflow-hidden
        ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
      `}
    >
      <ParallaxBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-red-500/20' : 'bg-gray-300/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="block">Creative</span>
            <span className={`block ${isDark ? 'text-red-500' : 'text-black'}`}>
              Developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={`
              text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed
              ${isDark ? 'text-gray-300' : 'text-gray-600'}
            `}
            variants={itemVariants}
          >
            Crafting exceptional digital experiences with modern technologies,
            innovative design, and seamless user interactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              className={`btn-primary ${
                isDark ? 'btn-primary-dark' : 'btn-primary-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className={`btn-secondary ${
                isDark ? 'btn-secondary-dark' : 'btn-secondary-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`
                  p-3 rounded-full transition-all duration-300
                  ${isDark 
                    ? 'bg-gray-800 text-white hover:bg-red-500' 
                    : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <span className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`${isDark ? 'text-red-500' : 'text-black'}`}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;