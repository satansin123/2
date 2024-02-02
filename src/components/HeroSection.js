import React from 'react';

const HeroSection = () => {
  const heroStyles = {
    backgroundImage: "url('https://placehold.co/1920x1080')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set initial height for non-responsive view

    // Additional styles for responsiveness
    '@media (max-width: 768px)': {
      height: '50vh', // Adjust height for smaller screens
      // Add more styles as needed for smaller screens
    },
  };

  return (
    <div className="hero-section h-screen flex items-center justify-center text-white" style={heroStyles}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-shadow">
            Compassionate Legal Counsel for Difficult Times
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-shadow">
            Get the support you need during life's toughest challenges with law.
          </p>
          <a href="#" className="btn-contact inline-block px-8 py-3 text-lg font-semibold bg-white text-blue-600 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
