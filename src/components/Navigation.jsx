import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollProgress } from '../hooks/useParallax';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 h-1 z-50 ${
          isDark ? 'bg-red-500' : 'bg-black'
        }`}
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Navigation */}
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled 
            ? `backdrop-blur-custom ${isDark ? 'bg-black/80' : 'bg-white/80'} shadow-lg` 
            : 'bg-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className={`text-2xl font-bold ${
                isDark ? 'text-red-500' : 'text-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    relative px-4 py-2 font-medium transition-colors duration-300
                    ${isDark ? 'text-white hover:text-red-500' : 'text-black hover:text-gray-600'}
                  `}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      isDark ? 'bg-red-500' : 'bg-black'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${
                  isDark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden ${
                isDark ? 'bg-black/95' : 'bg-white/95'
              } backdrop-blur-custom`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300
                      ${isDark 
                        ? 'text-white hover:bg-gray-800 hover:text-red-500' 
                        : 'text-black hover:bg-gray-100'
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;