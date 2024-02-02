import React from 'react';

const PracticeAreasSection = () => {
  return (
    <section className="practice-areas bg-black text-white py-16 px-8 mt-10 mb-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Text and Title on the left */}
        <div className="w-full lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0 flex flex-col items-center text-center justify-center ">
          <h1 className="text-12xl lg:text-6xl font-bold text-orange-400 uppercase mb-2">
            What We Deal 
          </h1>
          <h2 className="text-3xl font-bold mb-4">Practice Areas</h2>
          <p className="text-gray-400 text-center">
            We handle cases across various practice areas, including criminal law,
            civil law, family law, and more.
          </p>
        </div>
        {/* Tick marks in two columns on the right */}
        <div className="w-full lg:w-3/5 flex justify-center lg:justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <ul className="text-orange-400">
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Cyber Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Criminal Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Civil Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Family Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Real Estate
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-orange-400">
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Cyber Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Criminal Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Civil Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Family Law
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Real Estate
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-orange-400">
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Business Corporate
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Domain Disputes
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Trademark Disputes
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Patent Rights
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-lg mr-2" />
                  Copyrights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
