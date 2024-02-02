// MapSection.js
import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <a href="https://maps.google.com/?q=YourStoreLocation" target="_blank" rel="noopener noreferrer">
          <img
            src="https://placehold.co/1866x725"
            alt="Location Map"
            className="w-full h-auto rounded-lg shadow-lg mb-8 md:mb-12"
          />
        </a>
      </div>
    </section>
  );
};

export default MapSection;
