import { motion } from 'framer-motion';
import { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', guests: '2', date: '', time: '' });
  };

  const inputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    color: 'var(--primary-text)',
    padding: '10px 0',
    width: '100%',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  return (
    <section id="reservation" className="section-padding position-relative" style={{ overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1920&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
          zIndex: -1
        }}
      />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glassmorphism p-4 p-md-5"
              style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
            >
              <div className="text-center mb-5">
                <h2 className="text-gold mb-3 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '3px' }}>Book Your Table</h2>
                <h3 className="font-heading m-0" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Reserve an Experience</h3>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-5"
                >
                  <h4 className="text-gold font-heading mb-3" style={{ fontSize: '2rem' }}>Reservation Requested</h4>
                  <p style={{ color: 'var(--secondary-text)' }}>We will contact you shortly to confirm your booking.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        style={inputStyle}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        style={inputStyle}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                    <div className="col-md-4">
                      <select 
                        style={inputStyle}
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
                      >
                        <option value="1" style={{ color: 'black' }}>1 Guest</option>
                        <option value="2" style={{ color: 'black' }}>2 Guests</option>
                        <option value="3" style={{ color: 'black' }}>3 Guests</option>
                        <option value="4" style={{ color: 'black' }}>4 Guests</option>
                        <option value="5+" style={{ color: 'black' }}>5+ Guests</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input 
                        type="date" 
                        required 
                        style={{...inputStyle, color: formData.date ? 'var(--primary-text)' : 'rgba(255,255,255,0.5)'}}
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                    <div className="col-md-4">
                      <input 
                        type="time" 
                        required 
                        style={{...inputStyle, color: formData.time ? 'var(--primary-text)' : 'rgba(255,255,255,0.5)'}}
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                    <div className="col-12 mt-5 text-center">
                      <button type="submit" className="btn-gold w-100" style={{ padding: '15px 0' }}>
                        Confirm Reservation
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
