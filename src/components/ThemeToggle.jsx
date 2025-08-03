import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-full transition-all duration-300 
        ${isDark 
          ? 'bg-gray-800 text-red-500 hover:bg-gray-700' 
          : 'bg-gray-100 text-black hover:bg-gray-200'
        }
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        ${isDark ? 'focus:ring-red-500' : 'focus:ring-gray-300'}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: isDark ? 180 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} />
      </motion.div>
      
      {/* Invisible content to maintain button size */}
      <div className="invisible">
        <Sun size={20} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;