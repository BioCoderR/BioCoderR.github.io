import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const LazySection = ({ 
  children, 
  className = '', 
  threshold = 0.1, 
  rootMargin = '100px',
  animation = true,
  ...props 
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  if (animation) {
    return (
      <motion.div
        ref={targetRef}
        className={className}
        variants={fadeInVariants}
        initial="hidden"
        animate={hasIntersected ? "visible" : "hidden"}
        {...props}
      >
        {hasIntersected && children}
      </motion.div>
    )
  }

  return (
    <div ref={targetRef} className={className} {...props}>
      {hasIntersected && children}
    </div>
  )
}

export default LazySection