import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#F5F1EC]/95 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-[#52483E]"
          >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          </svg>
          <span className="font-semibold text-[20px] sm:text-[20px] text-[#52483E]">
            Resonance
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="
              inline-block
              text-[13px]   
              sm:text-[15px] 
              md:text-[16px] 
              lg:text-[18px]
              font-normal
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#1A1A1A]
              via-[#444444]
              to-[#666666]
              cursor-pointer
              transition-colors
              duration-300
              hover:from-[#52483E]
              hover:via-[#52483E]
              hover:to-[#52483E]
            "
          >
            Home
          </Link>

          <Link
            to="/tech-specs"
            className="
              inline-block
              text-[13px]
              sm:text-[15px]
              md:text-[16px]
              lg:text-[18px]
              font-normal
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#1A1A1A]
              via-[#444444]
              to-[#666666]
              cursor-pointer
              transition-colors
              duration-300
              hover:from-[#52483E]
              hover:via-[#52483E]
              hover:to-[#52483E]
            "
          >
            Tech Specs
          </Link>

          <div className="relative inline-block rounded-[24px] p-[1px] bg-gradient-to-r from-[#000000] to-[#8B8782]">
            <Link
              to="/compare"
              className="
                block
                w-full
                px-6
                py-2
                text-[16px]
                font-normal
                text-white
                rounded-[24px]
                bg-gradient-to-r
                from-[#52483E]
                to-[#8B8782]
                focus:outline-none
                cursor-pointer
                text-center
              "
            >
              Compare
            </Link>
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="
            md:hidden
            text-[32px] 
            border-2         
            border-transparent
            rounded-lg       
            cursor-pointer
            focus:outline-none
            text-[#000000]
          "
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
