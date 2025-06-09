"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function initVanta() {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        );

        if (
          !vantaEffect.current &&
          window.VANTA &&
          window.VANTA.NET &&
          vantaRef.current
        ) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff3f81,
            backgroundColor: 0x0,
            maxDistance: 25.0,
            spacing: 20.0,
          });
        }
      } catch (err) {
        console.error("Failed to load Vanta scripts", err);
      }
    }

    initVanta();

    // Cleanup on unmount
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full h-[900vh] sm:h-[625vh] -z-10"
    />
  );
}