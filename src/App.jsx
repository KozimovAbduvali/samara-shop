import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Product from './components/Product.jsx';
import Recommendation from './components/Recommendation.jsx';
import LatestProducts from './components/LatestProducts.jsx';
import WhyExactly from './components/WhyExactly.jsx';
import OurPartners from './components/OurPartners.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero />
        <Product />
        <Recommendation />
        <LatestProducts />
        <WhyExactly />
        <OurPartners />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}
export default App
