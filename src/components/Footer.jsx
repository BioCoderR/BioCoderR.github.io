import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`
      relative py-12 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
      border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}
    `}>
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className={`
              p-3 rounded-full transition-all duration-300
              ${isDark 
                ? 'bg-gray-800 text-red-500 hover:bg-gray-700' 
                : 'bg-gray-100 text-black hover:bg-gray-200'
              }
              focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${isDark ? 'focus:ring-red-500' : 'focus:ring-gray-300'}
            `}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowUp size={20} />
          </motion.button>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className={`flex items-center justify-center gap-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              by Your Name
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className={`w-2 h-2 rounded-full ${
                isDark ? 'bg-red-500' : 'bg-black'
              }`}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;