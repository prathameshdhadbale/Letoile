import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold mb-3 text-uppercase"
            style={{ fontSize: '1rem', letterSpacing: '3px' }}
          >
            Atmosphere
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Visual Journey
          </motion.h3>
        </div>

        <div className="row g-2 mt-4">
          {images.map((src, index) => (
            <div className="col-md-6" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ overflow: 'hidden', position: 'relative', height: '400px', cursor: 'pointer' }}
                className="gallery-item"
              >
                <motion.img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                  whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
