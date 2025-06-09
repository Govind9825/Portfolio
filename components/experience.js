// components/ExperiencesPage.js
'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: "education",
    title: "Computer Science Degree",
    institution: "Indian Institute of Information Technology Vadodara - Internatinal Campus Diu",
    period: "2023 - ongoing",
    // description: "Specialized in software engineering and web technologies."
  }
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl rounded-xl relative">
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20" />
        <div className="relative z-10 p-6 md:p-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            My <span className="text-[#ff3f81]">Journey</span>
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-white/20 top-0" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
                >
                  {/* Timeline dot */}
                  {/* <div className={`absolute ${index % 2 === 0 ? 'md:left-1/2' : 'md:right-1/2'} left-6 w-4 h-4 rounded-full bg-[#ff3f81] mt-2 -ml-1.5 md:-ml-2 z-10`} /> */}
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm`}>
                    <div className="flex items-center gap-3 mb-2">
                      {exp.type === "work" ? (
                        <FaBriefcase className="text-[#ff3f81]" />
                      ) : (
                        <FaGraduationCap className="text-cyan-400" />
                      )}
                      <span className={`text-sm font-semibold ${exp.type === "work" ? 'text-[#ff3f81]' : 'text-cyan-400'}`}>
                        {exp.type === "work" ? "WORK EXPERIENCE" : "EDUCATION"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className={`mb-2 ${exp.company ? 'text-white/80' : 'text-cyan-300/80'}`}>
                      {exp.company || exp.institution}
                    </p>
                    <p className="text-sm text-white/60 mb-3">{exp.period}</p>
                    <p className="text-white/70">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Tech Icons */}
        <motion.div 
          className="absolute top-1/4 right-1/4 text-4xl text-white/20"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {"</>"}
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4 text-5xl text-white/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {"{}"}
        </motion.div>
      </div>
    </div>
  );
}