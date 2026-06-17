import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a moment before unmounting
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--primary-bg)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading"
        style={{
          color: 'var(--accent-gold)',
          fontSize: '2rem',
          letterSpacing: '5px',
          marginBottom: '2rem'
        }}
      >
        L'ÉTOILE NOIRE
      </motion.div>
      
      <div style={{ width: '200px', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', position: 'relative' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'var(--accent-gold)',
            width: `${progress}%`
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <motion.div
        style={{
          marginTop: '1rem',
          color: 'var(--secondary-text)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '2px'
        }}
      >
        {Math.floor(progress)}%
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
