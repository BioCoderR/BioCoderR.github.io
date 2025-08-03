import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useParallax } from '../hooks/useParallax';

const ParallaxBackground = () => {
  const { isDark } = useTheme();
  const parallaxSlow = useParallax(0.2);
  const parallaxMedium = useParallax(0.4);
  const parallaxFast = useParallax(0.6);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Slowest */}
      <motion.div
        className={`parallax-bg ${
          isDark ? 'parallax-bg-dark' : 'parallax-bg-light'
        }`}
        style={{ transform: `translateY(${parallaxSlow}px)` }}
      />

      {/* Layer 2 - Medium speed */}
      <motion.div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxMedium}px)` }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-red-500/30' : 'bg-gray-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Fastest */}
      <motion.div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxFast}px)` }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full blur-3xl ${
              isDark ? 'bg-red-500/10' : 'bg-gray-300/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;