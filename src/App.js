import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/main.css';

import Headers from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollTop from './components/ScrolTop';
// import Preloader from './components/Preloader';

const App = () => {
  useEffect(() => {
    // Initialize any JavaScript functionality when component mounts
    // This would typically be done in a useEffect hook
  }, []);

  return (
    <div className="index-page">
      <Headers />
      <main className="main">
        <HeroSection />
        <FeaturedServices />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CallToAction />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
      {/* <Preloader /> */}
    </div>
  );
};

export default App;