import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-secondary" style={{ padding: '80px 0 30px' }}>
      <div className="container">
        <div className="row g-5 mb-5 border-bottom pb-5" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
          <div className="col-lg-4">
            <h2 className="text-gold font-heading mb-4" style={{ fontSize: '1.8rem', letterSpacing: '2px' }}>
              L'ÉTOILE NOIRE
            </h2>
            <p style={{ color: 'var(--secondary-text)', lineHeight: 1.8, maxWidth: '300px' }}>
              Elevating dining to an art form. Join us for a culinary journey that tantalizes the senses and redefines luxury.
            </p>
          </div>
          
          <div className="col-lg-4">
            <h4 className="text-white text-uppercase mb-4" style={{ fontSize: '1rem', letterSpacing: '2px' }}>Contact</h4>
            <p style={{ color: 'var(--secondary-text)', marginBottom: '10px' }}>123 Avenue Montaigne</p>
            <p style={{ color: 'var(--secondary-text)', marginBottom: '10px' }}>75008 Paris, France</p>
            <p style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>+33 1 23 45 67 89</p>
            <p style={{ color: 'var(--secondary-text)' }}>reservations@etoilenoire.com</p>
          </div>

          <div className="col-lg-4">
            <h4 className="text-white text-uppercase mb-4" style={{ fontSize: '1rem', letterSpacing: '2px' }}>Hours</h4>
            <div className="d-flex justify-content-between mb-2" style={{ color: 'var(--secondary-text)', maxWidth: '250px' }}>
              <span>Mon - Thu</span>
              <span>18:00 - 23:00</span>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{ color: 'var(--secondary-text)', maxWidth: '250px' }}>
              <span>Fri - Sat</span>
              <span>18:00 - 00:00</span>
            </div>
            <div className="d-flex justify-content-between" style={{ color: 'var(--secondary-text)', maxWidth: '250px' }}>
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="m-0" style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} L'Étoile Noire. All Rights Reserved.
          </p>
          <div className="d-flex gap-4 mt-3 mt-md-0">
            <a href="#" className="text-white" style={{ fontSize: '1.2rem', opacity: 0.7 }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}>
              <FaInstagram />
            </a>
            <a href="#" className="text-white" style={{ fontSize: '1.2rem', opacity: 0.7 }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}>
              <FaFacebookF />
            </a>
            <a href="#" className="text-white" style={{ fontSize: '1.2rem', opacity: 0.7 }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
