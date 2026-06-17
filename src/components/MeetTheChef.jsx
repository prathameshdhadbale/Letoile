import { motion } from 'framer-motion';

const MeetTheChef = () => {
  return (
    <section className="section-padding bg-dark-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-gold mb-3 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '3px' }}>Master of Taste</h2>
              <h3 className="font-heading mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Chef Alexandre<br/>Laurent</h3>
              
              <p style={{ color: 'var(--secondary-text)', lineHeight: 1.8, marginBottom: '2rem' }}>
                With over two decades of experience in Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Alexandre brings a unique global perspective to classic French techniques. His philosophy revolves around respecting the ingredient and elevating its natural essence.
              </p>
              
              <blockquote 
                style={{ 
                  borderLeft: '2px solid var(--accent-gold)', 
                  paddingLeft: '20px', 
                  fontStyle: 'italic',
                  color: 'var(--primary-text)',
                  fontSize: '1.1rem',
                  marginBottom: '2rem'
                }}
                className="font-heading"
              >
                "Cooking is not just about technique; it's about translating emotion and memory onto the plate."
              </blockquote>
            </motion.div>
          </div>
          <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                alt="Chef Alexandre Laurent" 
                className="img-fluid"
                style={{ width: '100%', height: '600px', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.2)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheChef;
