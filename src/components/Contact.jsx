import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Contact = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
      id="contact"
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
              Get In <span className={isDark ? 'text-red-500' : 'text-black'}>Touch</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to start your next project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">
                Let's <span className={isDark ? 'text-red-500' : 'text-black'}>Connect</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className={`
                      flex items-center p-6 rounded-xl transition-all duration-300
                      ${isDark 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-white hover:bg-gray-50'
                      }
                      shadow-lg hover:shadow-xl transform hover:scale-105
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`
                      p-3 rounded-full mr-4
                      ${isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100 text-black'}
                    `}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  I typically respond to messages within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`
                        w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-4
                        ${isDark 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20' 
                          : 'bg-white border-gray-300 text-black focus:border-black focus:ring-gray-200'
                        }
                      `}
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`
                        w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-4
                        ${isDark 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20' 
                          : 'bg-white border-gray-300 text-black focus:border-black focus:ring-gray-200'
                        }
                      `}
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`
                      w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-4
                      ${isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20' 
                        : 'bg-white border-gray-300 text-black focus:border-black focus:ring-gray-200'
                      }
                    `}
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`
                      w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-4 resize-none
                      ${isDark 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500/20' 
                        : 'bg-white border-gray-300 text-black focus:border-black focus:ring-gray-200'
                      }
                    `}
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`
                    w-full flex items-center justify-center gap-3 py-4 rounded-lg font-medium transition-all duration-300
                    ${isSubmitted
                      ? 'bg-green-500 text-white'
                      : isDark 
                        ? 'bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-700' 
                        : 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400'
                    }
                    disabled:cursor-not-allowed transform hover:scale-105 focus:outline-none focus:ring-4
                    ${isDark ? 'focus:ring-red-500/20' : 'focus:ring-gray-200'}
                  `}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send size={20} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;