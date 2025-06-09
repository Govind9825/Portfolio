import { useState, useEffect } from 'react';

export default function GBAnimation() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-visible">
      {/* Main GB Text */}
      <div className="relative text-center p-8">
        <h1 className="text-9xl font-bold text-white tracking-wider relative" style={{ lineHeight: '1.2' }}>
          <span 
            className="inline-block animate-float-rotate bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent"
            style={{ animationDelay: '0s' }}
          >
            g
          </span>
          <span 
            className="inline-block animate-float-rotate bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent"
            style={{ animationDelay: '0.5s' }}
          >
            b
          </span>
          
          {/* Glow effect behind letters */}
          <div className="absolute inset-0 text-9xl font-bold tracking-wider blur-sm opacity-30" style={{ lineHeight: '1.4' }}>
            <span className="inline-block text-blue-400 animate-glow">g</span>
            <span className="inline-block text-purple-400 animate-glow delay-500">b</span>
          </div>
        </h1>
      </div>

      <style jsx>{`
        @keyframes float-rotate {
          0% { 
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) scale(1.05);
          }
          50% { 
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(5px) scale(0.98);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes glow {
          0%, 100% { 
            opacity: 0.2;
          }
          50% { 
            opacity: 0.6;
          }
        }

        .animate-float-rotate {
          animation: float-rotate 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}