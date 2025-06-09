'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/navbar";
import HeroCard from "../../components/hero";
import AboutPage from "../../components/about";
import ProjectsPage from "../../components/projects";
import ExperiencesPage from "../../components/experience";
import ContactPage from "../../components/contact";
import SkillsPage from "../../components/skills";
import GBAnimation from "../../components/loader";
import Footer from '../../components/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // After 3 seconds, start the zoom out animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // After zoom out animation completes, show main content
      setTimeout(() => {
        setShowMain(true);
      }, 1000); // Zoom out animation duration
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 0,
              opacity: 0,
              transition: { 
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            className="fixed inset-0 z-50"
          >
            <GBAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            key="main-content"
            initial={{ 
              scale: 0.8,
              opacity: 0
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              }
            }}
          >
            <Navbar />
            <div id="home"><HeroCard /></div>
            <div id="about"><AboutPage /></div>
            <div id="skills"><SkillsPage /></div>
            <div id="projects"><ProjectsPage /></div>
            <div id="experiences"><ExperiencesPage /></div>
            <div id="contact"><ContactPage /></div>
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}