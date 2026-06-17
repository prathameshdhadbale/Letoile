import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          backgroundImage: 'url(/images/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          zIndex: -2
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 11, 11, 0.6)',
          zIndex: -1
        }}
      />

      <motion.div
        className="text-center px-4"
        style={{ opacity, zIndex: 1 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold text-uppercase mb-3"
          style={{ letterSpacing: '4px', fontSize: '0.9rem' }}
        >
          Welcome to L'Étoile Noire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-heading mb-4"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.1,
            color: '#fff'
          }}
        >
          SAVOUR THE<br />
          <span className="text-gold">EXTRAORDINARY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-5 mx-auto"
          style={{ maxWidth: '600px', color: 'var(--secondary-text)', fontSize: '1.1rem' }}
        >
          Where Taste Meets Elegance. Experience a culinary journey that transcends the ordinary in the heart of the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#reservation" className="btn-gold d-inline-block text-decoration-none">
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--secondary-text)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: '1px', height: '40px', backgroundColor: 'var(--accent-gold)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
