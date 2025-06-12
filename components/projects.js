'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Stock-Up",
    description: "A real-time crypto tracker that fetches live prices of various coins with WebSocket integration and user-friendly UI.",
    tags: ["React", "WebSocket", "Node.js", "MongoDB", "Chart.js"],
    image: "/p1.webp",
    liveLink: "https://govind9825.github.io/Stock-Up/",
    codeLink: "https://github.com/Govind9825/Stock-Up"
  },
  {
    title: "Cinefy",
    description: "A real-time video streaming website with synchronized playback across clients using socket communication.",
    tags: ["Next.js", "Tailwind CSS", "Socket.io", "Azure", "Framer Motion"],
    image: "/p2.jpg",
    liveLink: "https://cinefy-1d0m.onrender.com/",
    codeLink: "https://github.com/Govind9825/CINEFY"
  },
  {
    title: "Deep Learning and ML Projects",
    description: "Practice projects on popular datasets focusing on classification, regression, and neural networks.",
    tags: ["Kaggle", "Keras", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/p3.jpg",
    liveLink: "https://github.com/Govind9825/Deep-Learning-Projects",
    codeLink: "https://github.com/Govind9825/Deep-Learning-Projects"
  }
];


export default function ProjectsPage() {
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
            My <span className="text-[#ff3f81]">Projects</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            Here are some of my recent projects. Each one was built with attention to detail and a focus on user experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  {/* Front Face - Project Image */}
                  <div 
                    className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden border border-white/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div 
                      className="h-full w-full bg-cover bg-center flex items-center justify-center text-white text-xl"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        {/* <h3 className="text-2xl font-bold text-center px-4">{project.title}</h3> */}
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Face - Project Details */}
                  <div 
                    className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden border border-white/10 p-6"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 absolute bottom-6 left-6 right-6">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#ff3f81] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#ff3f81] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} /> Code
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