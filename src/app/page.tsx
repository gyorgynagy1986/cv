"use client";

import React, { useState, useEffect } from "react";
import PhotoAndLinks from "./components/PhotoAndLinks";
import CVData from "./data/CVData";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

function Home() {
  const [displayedCV, setDisplayedCV] = useState("");
  const [typing, setTyping] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const router = useRouter();

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

  const linkToPortfolio = () => {
    router.push("https://www.studiobromo.hu/portfolio");
  };

  const processCVTextForDisplay = (text: string): string => {
    // Test with a simplified version to ensure the mechanism works
    return text.replace(/("details":)/g, `<span class="highlighted">$1</span>`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <PhotoAndLinks />
        <div className="flex gap-2">
          <Button
            name="Generate CV"
            disabled={typing}
            onClick={handleGenerateCV}
          />
          <Button
            name="Protfolio"
            disabled={typing}
            onClick={linkToPortfolio}
          />
        </div>
        {showCV && (
          <div
            className="w-full max-w-4xl p-4 bg-gray-800 text-white rounded shadow-md overflow-auto"
            style={{ maxHeight: "70vh" }}
          >
            <pre
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{
                __html: processCVTextForDisplay(displayedCV),
              }}
            ></pre>
          </div>
        )}
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-4"></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
