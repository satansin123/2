import React from 'react';
import HeroSection from './components/HeroSection';
import AboutLawSection from './components/AboutLawSection';
import PracticeAreasSection from './components/PracticeAreasSection';
import MeetLawSection from './components/MeetLawSection';
import AdvocateQuoteSection from './components/AdvocateQuoteSection';
import ContactUsSection from './components/ContactUsSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="antialiased text-gray-800">
      <HeroSection />
      <AboutLawSection />
      <PracticeAreasSection />
      <MeetLawSection />
      <AdvocateQuoteSection />
      <ContactUsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default App;
