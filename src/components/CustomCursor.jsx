import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: 'transparent',
      border: '2px solid var(--accent-gold)',
      width: 20,
      height: 20,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgba(212, 175, 55, 0.2)', // gold with opacity
      border: '1px solid var(--accent-gold)',
      width: 40,
      height: 40,
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: mousePosition.y - 2,
          left: mousePosition.x - 2,
          width: 4,
          height: 4,
          backgroundColor: 'var(--accent-gold)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CustomCursor;
