'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
  {
    title: "Amazon ML Summer School '25",
    description: "An intensive program focused on machine learning foundations, optimization, and large-scale model applications.",
    tags: ["Machine Learning", "Data Science", "AI", "Deep Learning", "Optimization"],
    image: "/amazon_ml.jpg",
    viewLink: "https://drive.google.com/file/d/1yffae2c_e5_8m73SD4algpjfBj4GKKIf/view?usp=sharing",
    issuer: "Amazon"
  },
  {
    title: "NVIDIA Deep Learning Fundamentals",
    description: "Hands-on training on neural networks, GPU computing, and deep learning model development using NVIDIA frameworks.",
    tags: ["Deep Learning", "Neural Networks", "CUDA", "GPU Computing", "AI"],
    image: "/nvidia_dl.jpg",
    viewLink: "https://drive.google.com/file/d/1gWLTxtdRiGBVAp5HhBvMc3n5leooQZCD/view?usp=drive_link",
    issuer: "NVIDIA"
  }
];


export default function CertificatesPage() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setFlippedIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setFlippedIndex(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl rounded-xl relative overflow-hidden">
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20" />
        
        {/* Main Content */}
        <div className="relative z-10 p-6 md:p-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            My <span className="text-[#ff3f81]">Certificates</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            Here are some of my professional certifications and achievements. Each one represents my commitment to continuous learning and professional growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div 
                key={index}
                className="group h-96"
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative h-full w-full transition-all duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Face - Certificate Image */}
                  <div 
                    className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden border border-white/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div 
                      className="h-full w-full bg-gradient-to-br from-[#ff3f81]/20 to-cyan-500/20 flex items-center justify-center text-white"
                    >
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                        <Award className="w-16 h-16 mb-4 text-[#ff3f81]" />
                        <h3 className="text-xl font-bold text-center px-4">{certificate.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Face - Certificate Details */}
                  <div 
                    className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden border border-white/10 p-6"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
                    <p className="text-white/70 mb-2 text-sm">{certificate.issuer}</p>
                    <p className="text-white/70 mb-4 text-sm">{certificate.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 absolute bottom-6 left-6 right-6">
                      <a 
                        href={certificate.viewLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#ff3f81] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} /> View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff3f81]/20 rounded-full blur-lg" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg" />
      </div>
    </div>
  );
}
