// components/AboutPage.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl rounded-xl relative">
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20" />
        <div className="relative z-10 p-4 sm:p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-xl overflow-hidden border-2 border-white/20">
              <Image
                src="/portfolio-about.jpg"
                alt="Your Photo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              About <span className="text-[#ff3f81]">Me</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 text-base sm:text-lg md:text-xl"
            >
              I'm a passionate full-stack developer with a strong foundation in
              the MERN stack and a growing interest in Artificial Intelligence,
              Machine Learning, and Deep Learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 text-base sm:text-lg md:text-xl"
            >
              I enjoy building responsive web applications that not only look
              great but also solve real-world problems. Currently focused on
              combining my web development skills with intelligent systems to
              create smarter, data-driven experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-2 sm:pt-4"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-3">
                Education
              </h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-medium text-sm sm:text-base">
                    Computer Science Degree
                  </h4>
                  <p className="text-white/70 text-sm">IIITV - 2k27</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}