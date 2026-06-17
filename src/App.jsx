import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import FullMenu from './components/FullMenu';
import SignatureExperience from './components/SignatureExperience';
import MeetTheChef from './components/MeetTheChef';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div style={{ opacity: 1, transition: 'opacity 0.5s ease-in' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <FeaturedDishes />
            <FullMenu />
            <SignatureExperience />
            <MeetTheChef />
            <Gallery />
            <Testimonials />
            <Reservation />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
