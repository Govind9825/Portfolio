// components/HeroCard.js
"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaKaggle,
  FaDownload,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroCard() {
  const borderRef = useRef(null);
  const [displayedText, setDisplayedText] = useState("");
  const texts = [
    " Full Stack Developer",
    " Data Analyst",
    " AI-ML Enthusiast"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!currentText) return;

    // Handle pause after typing completes
    if (!isDeleting && charIndex === currentText.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing forward
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      }
    }, isDeleting ? 50 : 100); // Faster when deleting

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/GovindBhatter.pdf";
    link.download = "govind-bhatter-resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl rounded-xl relative">
        <div
          ref={borderRef}
          className="absolute inset-0 rounded-xl p-[2px] pointer-events-none z-10 overflow-hidden"
          style={{
            "--mouse-x": "0.5",
            "--mouse-y": "0.5",
            background:
              "radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), #ff3f81, transparent",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
          }}
        />

        <div className="w-full min-h-[75vh] bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 sm:p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-0">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center items-start text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Govind Bhatter
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-[#ff3f81] mb-4 min-h-[2rem] flex items-center">
              <span className="text-white">I am a&nbsp;</span>
              <span>{displayedText}</span>
              <span className="animate-pulse ml-1">|</span>
            </h2>

            <p className="text-white/80 mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              &quot;MERN Stack Developer with a strong passion for AI, Machine
              Learning, and Deep Learning — building intelligent and scalable
              web applications that blend data-driven insights with modern
              UI/UX.&quot;
            </p>

            <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
              <Link
                href="https://www.linkedin.com/in/govind-bhatter-969a81290/"
                target="_blank"
                className="text-white hover:text-[#ff3f81] transition-colors"
              >
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link
                href="https://github.com/Govind9825"
                target="_blank"
                className="text-white hover:text-[#ff3f81] transition-colors"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/govind_bhatter_19/"
                target="_blank"
                className="text-white hover:text-[#ff3f81] transition-colors"
              >
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              {/* <Link href="https://kaggle.com" target="_blank" className="text-white hover:text-[#ff3f81] transition-colors">
                <FaKaggle className="w-5 h-5 md:w-6 md:h-6" />
              </Link> */}
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-[#ff3f81] text-white rounded-full hover:bg-white hover:text-[#ff3f81] transition-all text-sm md:text-base font-medium"
            >
              <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
              Download Resume
            </button>
          </div>

          {/* Right Column - Lottie Animation */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            {/* <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-br from-[#ff3f81]/10 to-cyan-500/10"> */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              <DotLottieReact
                src={encodeURI("/space boy developer.lottie")}
                loop
                autoplay
                className="w-full h-full"
              />
              
              {/* Gradient overlay for better integration */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" /> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}