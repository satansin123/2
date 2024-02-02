import React from 'react';

const ContactUsSection = () => {
  return (
    <section className="contact-us bg-gray-100 py-16">
  <div className="container mx-auto px-8 text-center">
    <h2 className="text-5xl font-bold text-gray-700 mb-8">CONTACT US</h2>
    <p className="text-lg mb-4">Better yet, see us in person!</p>
    <p className="mb-8">
      We love our customers, so feel free to visit during normal business hours.
    </p>
    <button className="bg-green-500 text-white px-6 py-2 rounded-full inline-flex items-center mb-8">
      <img
        src="https://placehold.co/20x20"
        alt="WhatsApp icon"
        className="mr-2"
      />
      Message us on WhatsApp
    </button>
    <div className="mb-4">
      <h3 className="text-lg font-semibold">law</h3>
      <p>Hours</p>
      <p>Open today 09:00 am - 05:00 pm</p>
    </div>
  </div>
</section>

  );
};

export default ContactUsSection;
