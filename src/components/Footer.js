import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white">
  <div className="container mx-auto px-8">
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        <ul className="flex justify-center md:justify-start space-x-4">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center">
        <ul className="flex space-x-4">
          {/* Social media icons */}
          <li>
            <a href="#">
              <i className="fab fa-weibo" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-telegram-plane" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-rss" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-discord" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-auto text-center md:text-right">
        <p>law</p>
        <p>Copyright © 2024 law - All Rights Reserved.</p>
        <p>
          Powered by <a href="https://www.godaddy.com">GoDaddy</a>
        </p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
