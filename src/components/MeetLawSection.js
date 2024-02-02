import React from 'react';

const MeetLawSection = () => {
  return (
    <section className="meet-law bg-gray-100 py-16">
  <div className="container mx-auto px-8">
    <h2 className="text-5xl font-bold text-center text-gray-700 mb-10">
      OUR CLIENTS
    </h2>
    <div className="flex flex-wrap justify-center items-center">
      {/* Passionate Advocate */}
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://placehold.co/192x192"
            alt="Passionate Advocate"
          />
          <h3 className="text-2xl text-gray-800 font-semibold mb-3">
            Passionate Advocate
          </h3>
          <p className="text-center text-gray-600">
            As a passionate advocate for my clients, I have successfully
            represented them in a variety of legal matters, including personal
            injury, medical malpractice, and workers' compensation. I work
            tirelessly to ensure my clients receive the compensation and justice
            they deserve.
          </p>
        </div>
      </div>
      {/* Experience & Education */}
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://placehold.co/192x192"
            alt="Experience & Education"
          />
          <h3 className="text-2xl text-gray-800 font-semibold mb-3">
            Experience &amp; Education
          </h3>
          <p className="text-center text-gray-600">
            I have over 15 years of experience as an advocate and hold a law
            degree from the University of Chicago. I have also completed
            specialized training in negotiation and mediation, which allows me
            to resolve disputes amicably and efficiently.
          </p>
        </div>
      </div>
      {/* Community Involvement */}
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://placehold.co/192x192"
            alt="Community Involvement"
          />
          <h3 className="text-2xl text-gray-800 font-semibold mb-3">
            Community Involvement
          </h3>
          <p className="text-center text-gray-600">
            I am an active member of the local community and regularly volunteer
            my time to provide pro bono legal services to those in need. I
            believe in giving back and helping those who cannot afford legal
            representation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default MeetLawSection;
