"use client";

import React, { useState, useEffect } from "react";
import PhotoAndLinks from "./components/PhotoAndLinks";
import CVData from "./data/CVData"; 
import Footer from '@/app/components/Footer'; 

function Home() {
  const [displayedCV, setDisplayedCV] = useState("");
  const [typing, setTyping] = useState(false);
  const [showCV, setShowCV] = useState(false); 

  useEffect(() => {
    if (!typing || displayedCV.length >= CVData.length) {
      setTyping(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setDisplayedCV(CVData.slice(0, displayedCV.length + 1));
    }, 1); // Adjust the typing speed if necessary

    return () => clearTimeout(timeoutId);
  }, [displayedCV, typing]);

  const handleGenerateCV = () => {
    setDisplayedCV("");
    setTyping(true);
    setShowCV(true); // Show the CV container after clicking the button
  };

  const processCVTextForDisplay = (text: string): string => {
    // Test with a simplified version to ensure the mechanism works
    return text.replace(/("details":)/g, `<span class="highlighted">$1</span>`);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <PhotoAndLinks />
      <button
        onClick={handleGenerateCV}
        disabled={typing}
        className="mb-5 p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
      >
        Generate CV
      </button>

      {showCV && (
        <div
          className="w-full max-w-4xl p-4 bg-gray-800 text-white rounded shadow-md overflow-auto"
          style={{ maxHeight: "70vh" }}
        >
          <pre
            style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            dangerouslySetInnerHTML={{ __html: processCVTextForDisplay(displayedCV) }}
          >
          </pre>
          
        </div>
      )}
   <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
     <Footer /> 
   </div>
    </div>
     
   </>
  );
}

export default Home;
