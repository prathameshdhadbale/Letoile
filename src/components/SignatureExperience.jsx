import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedStat = ({ endValue, suffix, label, delay = 0 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000; // 2 seconds

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setValue(Math.floor(easeProgress * endValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      const timeout = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, endValue, delay]);

  return (
    <div ref={ref} className="text-center">
      <h4 className="text-gold font-heading mb-1" style={{ fontSize: '2.5rem' }}>
        {value.toLocaleString()}{suffix}
      </h4>
      <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
        {label}
      </p>
    </div>
  );
};

const SignatureExperience = () => {
  return (
    <section id="experience" className="section-padding position-relative" style={{ overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at right center, rgba(212,175,55,0.03) 0%, rgba(11,11,11,0) 60%)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side: Elegant Text Content */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold mb-3 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '3px' }}>
                An Experience Beyond Dining
              </h2>
              <h3 className="font-heading mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 }}>
                Every meal is a celebration of flavor, elegance, and unforgettable moments.
              </h3>
              
              <p className="mb-5" style={{ color: 'var(--secondary-text)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                From the moment guests step through our doors, they are immersed in an atmosphere of warmth, <span className="text-gold">Luxury</span>, and exceptional hospitality. Every dish is crafted with passion, every ingredient carefully selected, and every moment designed to create <span className="text-gold">Memories</span> that last long after the meal is over. Experience an unparalleled <span className="text-gold">Ambience</span> where exquisite <span className="text-gold">Taste</span> meets refined artistry.
              </p>

              <div className="row g-4 mt-2 border-top pt-4" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                <div className="col-4">
                  <AnimatedStat endValue={10} suffix="+" label="Years of Excellence" delay={0.2} />
                </div>
                <div className="col-4 border-start border-end" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                  <AnimatedStat endValue={50} suffix="+" label="Signature Dishes" delay={0.4} />
                </div>
                <div className="col-4">
                  <AnimatedStat endValue={10000} suffix="+" label="Happy Guests" delay={0.6} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Cinematic Image/Collage */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 mt-5">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ overflow: 'hidden', height: '400px', borderRadius: '4px' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" 
                    alt="Luxury Interior" 
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              <div className="col-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ overflow: 'hidden', height: '400px', borderRadius: '4px' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" 
                    alt="Elegant Dining" 
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;
