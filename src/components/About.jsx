import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <section id="about" className="section-padding position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 pr-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-gold mb-3" style={{ fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Our Story</h2>
              <h3 className="font-heading mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2 }}>
                A Legacy of <br />
                <span style={{ fontStyle: 'italic', color: 'var(--secondary-text)' }}>Culinary Excellence</span>
              </h3>
              <p className="mb-4" style={{ color: 'var(--secondary-text)', lineHeight: 1.8 }}>
                Founded with a passion for exceptional gastronomy, L'Étoile Noire brings together the finest ingredients, innovative techniques, and a deep respect for culinary traditions. Every dish is a masterpiece, crafted to evoke emotion and create unforgettable memories.
              </p>
              <p className="mb-5" style={{ color: 'var(--secondary-text)', lineHeight: 1.8 }}>
                Our commitment to excellence extends beyond the plate, offering a sensory journey that engages all your senses in an atmosphere of refined luxury.
              </p>
              <img src="/images/signature.png" alt="Chef Signature" style={{ height: '60px', filter: 'invert(1)' }} onError={(e) => e.target.style.display = 'none'} />
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', paddingRight: '20px', paddingTop: '20px' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: '20px',
                  left: '20px',
                  border: '2px solid var(--accent-gold)',
                  zIndex: 0
                }}
              />
              <img
                src={aboutImg}
                alt="Exquisite Gourmet Food"
                className="img-fluid"
                style={{ display: 'block', position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: '600px' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;//
