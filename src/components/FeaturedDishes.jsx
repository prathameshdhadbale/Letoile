import { motion } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: 'Truffle Wagyu Ribeye',
    description: 'A5 Wagyu beef infused with black truffle butter, served with wild mushrooms.',
    price: '$145',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Pan-Seared Scallops',
    description: 'Hokkaido scallops with cauliflower purée, caviar, and lemon beurre blanc.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dark Chocolate Sphere',
    description: 'Valrhona chocolate, gold leaf, and a warm raspberry coulis reveal.',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800&auto=format&fit=crop'
  }
];

const FeaturedDishes = () => {
  return (
    <section id="menu" className="section-padding bg-dark-secondary">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold mb-3 text-uppercase"
            style={{ fontSize: '1rem', letterSpacing: '3px' }}
          >
            Tasting Menu
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Featured Delicacies
          </motion.h3>
        </div>

        <div className="row g-4 mt-4">
          {dishes.map((dish, index) => (
            <div className="col-md-4" key={dish.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'var(--primary-bg)',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                className="h-100 dish-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
                  <motion.img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="img-fluid w-100"
                    style={{ height: '250px', objectFit: 'cover' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="font-heading m-0" style={{ fontSize: '1.4rem' }}>{dish.name}</h4>
                  <span className="text-gold font-heading" style={{ fontSize: '1.2rem' }}>{dish.price}</span>
                </div>
                <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {dish.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <motion.a 
            href="#full-menu" 
            className="btn-gold d-inline-block text-decoration-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View Full Menu
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
