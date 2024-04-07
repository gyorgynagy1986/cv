import React from "react";

const handleDownload = () => {
  const path = "/path/to/your/CV.pdf";
  window.location.href = path;
};

const Footer = () => {
  return (
    <footer className="w-full text-center font-mono border-t border-gray-200 py-4 bottom-0">
      <button
        onClick={handleDownload}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download CV</span>
      </button>
    </footer>
  );
};

export default Footer;
