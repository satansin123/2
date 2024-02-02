import React from 'react';

const AdvocateQuoteSection = () => {
  return (
    <section className="advocate-quote flex flex-col lg:flex-row items-center justify-around bg-white py-16 px-4 lg:px-8">
      <div className="w-full lg:w-1/2 lg:pr-8">
        <blockquote className="text-lg lg:text-2xl italic font-medium mb-8 lg:mb-0">
          “The good advocate is not the man who has an eye to every side and angle
          of contingency, but who throws himself on your part so heartily, that he
          can get you out of a scrape.”
          <footer className="blockquote-footer text-right mt-4">
            — Arthur Conan Doyle
          </footer>
        </blockquote>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="https://placehold.co/600x400"
          alt="Scenic forest path"
        />
      </div>
    </section>
  );
};

export default AdvocateQuoteSection;
