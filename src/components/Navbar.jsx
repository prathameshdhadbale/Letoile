import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed-top w-100 ${isScrolled ? 'glassmorphism' : ''}`}
        style={{
          transition: 'all 0.4s ease',
          padding: isScrolled ? '15px 0' : '30px 0',
          zIndex: 1000
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a href="#" className="text-decoration-none">
            <h2 className="m-0 text-gold font-heading" style={{ fontSize: '1.8rem', letterSpacing: '2px' }}>
              L'ÉTOILE
            </h2>
          </a>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-5">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="text-uppercase"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  fontWeight: 500
                }}
              >
                {link.name}
              </a>
            ))}
            <a href="#reservation" className="btn-gold text-decoration-none">
              Reservation
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="d-lg-none">
            <button 
              className="btn btn-link text-gold p-0"
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ fontSize: '2rem' }}
            >
              <HiMenuAlt4 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--primary-bg)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem'
            }}
          >
            <div className="d-flex justify-content-end mb-5">
              <button 
                className="btn btn-link text-gold p-0"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '2.5rem' }}
              >
                <HiX />
              </button>
            </div>
            
            <div className="d-flex flex-column gap-4 align-items-center mt-5">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="font-heading text-white text-decoration-none"
                  style={{ fontSize: '2.5rem' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservation" 
                className="btn-gold text-decoration-none mt-4 w-100 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
