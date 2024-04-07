import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ng from "../../../public/assets/1709638241374.jpg";

const PhotoAndLinks = () => {
  return (
    <>
      <Image
        priority
        src={ng}
        alt="Your Name"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-300 shadow-lg mb-4"
      />
      <div className="flex gap-4 mb-4">
        <a
          href="https://github.com/gyorgynagy1986"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-black"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/gy%C3%B6rgy-nagy-531626247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default PhotoAndLinks;
