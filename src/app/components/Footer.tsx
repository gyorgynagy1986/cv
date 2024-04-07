import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full text-center font-mono  border-t border-grey p-4 pin-b">
      <a href="mailto:your.email@example.com" className="text-black hover:text-gray-300">
      📧 Send Email
      </a>
    </footer>
  );
};

export default Footer;
