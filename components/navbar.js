import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { name: "Home", to: "home" },
  { name: "About Me", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
  { name: "Experiences", to: "experiences" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.to));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].to);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-transparent backdrop-blur-sm">
        {/* Logo */}
        <div
          className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          style={{ backgroundColor: "#ff3f81" }}
        >
          <Image
            src="/logo.png" // Replace with actual path or URL
            alt="Profile"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.to)}
              className={`font-medium text-lg lg:text-xl cursor-pointer transition-colors duration-300 ${
                activeSection === link.to
                  ? "text-[#ff3f81]"
                  : "text-white hover:text-[#ff3f81]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-[#ff3f81] transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.to)}
              className={`text-left font-medium text-xl cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                activeSection === link.to
                  ? "text-[#ff3f81] font-semibold"
                  : "text-white hover:text-[#ff3f81]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Links or Additional Info (Optional) */}
        <div className="absolute bottom-8 left-6 right-6">
          <p className="text-white/60 text-sm text-center">
            Let&apos;s build something amazing together
          </p>
        </div>
      </div>
    </div>
  );
}
