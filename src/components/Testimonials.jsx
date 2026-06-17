import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    text: "An unforgettable dining experience. Every bite tells a story of passion and culinary perfection. The ambiance is simply unparalleled.",
    role: "Food Critic"
  },
  {
    id: 2,
    name: "James Harrington",
    text: "The tasting menu was a revelation. A perfect balance of flavors and textures, served with impeccable attention to detail.",
    role: "Gastronome"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    text: "L'Étoile Noire redefines luxury dining. From the moment you enter until the last dessert, it is an absolute dream.",
    role: "Lifestyle Editor"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-dark-secondary">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-gold mb-3 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '3px' }}>
            Guest Expressions
          </h2>
          <h3 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Words of Delight
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto"
          style={{ maxWidth: '800px' }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-5"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-center px-3">
                  <div className="text-gold mb-4" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', lineHeight: 0 }}>"</div>
                  <p className="font-heading mb-4" style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--primary-text)' }}>
                    {item.text}
                  </p>
                  <h5 className="text-gold text-uppercase mb-1" style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>{item.name}</h5>
                  <span style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>{item.role}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet {
          background: var(--secondary-text);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-gold);
          opacity: 1;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
