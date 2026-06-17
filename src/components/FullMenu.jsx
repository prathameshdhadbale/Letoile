import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    id: 1,
    name: 'Hakka Noodles',
    description: 'Wok-tossed noodles with fresh vegetables and signature soy blend.',
    price: '$25',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Veg Fried Rice',
    description: 'Aromatic basmati rice stir-fried with diced vegetables and mild spices.',
    price: '$20',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Schezwan Noodles',
    description: 'Spicy noodles tossed in our house-made fiery schezwan sauce.',
    price: '$28',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc21?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Special Veg Thali',
    description: 'Paneer sabzi, dal, rice, chapati, papad, pickle, and a sweet dessert.',
    price: '$35',
    category: 'Veg Thali',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Maharaja Chicken Thali',
    description: 'Rich chicken curry, steamed rice, chapati, fresh salad, and roasted papad.',
    price: '$45',
    category: 'Non Veg Thali',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop'
  },
  // {
  //   id: 6,
  //   name: 'Chilli Paneer',
  //   description: 'Crispy cottage cheese cubes tossed in spicy soy-garlic sauce.',
  //   price: '$22',
  //   category: 'Starters',
  //   image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=800&auto=format&fit=crop'
  // },
  {
    id: 7,
    name: 'Veg Burger',
    description: 'Artisan bun with a spiced vegetable patty and truffle mayo.',
    price: '$18',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Margherita Pizza',
    description: 'Wood-fired crust, San Marzano tomatoes, fresh mozzarella, and basil.',
    price: '$24',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 9,
    name: 'Crispy French Fries',
    description: 'Golden fries seasoned with sea salt and rosemary, served with aioli.',
    price: '$12',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 10,
    name: 'Spring Rolls',
    description: 'Crispy rolls filled with julienne vegetables, served with sweet chilli dip.',
    price: '$16',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 11,
    name: 'Paneer Tikka',
    description: 'Charcoal-grilled cottage cheese marinated in tandoori spices.',
    price: '$24',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 12,
    name: 'Chicken Lollipop',
    description: 'Spiced and fried chicken wings shaped into lollipops.',
    price: '$26',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop'
  }
];

const categories = ['All', 'Chinese', 'Veg Thali', 'Non Veg Thali', 'Starters'];

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="full-menu" className="section-padding bg-dark-secondary">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold mb-3 text-uppercase"
            style={{ fontSize: '1rem', letterSpacing: '3px' }}
          >
            A la Carte
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            The Complete Menu
          </motion.h3>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className="btn-gold"
              style={{
                background: activeCategory === category ? 'var(--accent-gold)' : 'transparent',
                color: activeCategory === category ? 'var(--primary-bg)' : 'var(--accent-gold)',
                padding: '8px 20px',
                fontSize: '0.85rem'
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredMenu.map((dish) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="col-md-6 col-lg-4"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-100 p-3"
                  style={{
                    background: 'var(--primary-bg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <div style={{ overflow: 'hidden', marginBottom: '20px', borderRadius: '4px', position: 'relative' }}>
                    <motion.img
                      src={dish.image}
                      alt={dish.name}
                      className="img-fluid w-100"
                      style={{ height: '220px', objectFit: 'cover' }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(11, 11, 11, 0.8)',
                        padding: '4px 12px',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.75rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {dish.category}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="font-heading m-0" style={{ fontSize: '1.2rem', color: 'var(--primary-text)' }}>{dish.name}</h4>
                    <span className="text-gold font-heading" style={{ fontSize: '1.1rem' }}>{dish.price}</span>
                  </div>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                    {dish.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FullMenu;
