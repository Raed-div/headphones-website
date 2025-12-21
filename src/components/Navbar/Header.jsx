import React from "react";

const Header = ({ setMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
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
            className="w-5 h-5 text-[#2D2A26]"
          >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          </svg>
          <span className="font-semibold text-[#2D2A26]">Resonance</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm text-[#2D2A26] hover:opacity-70 cursor-pointer">
            Home
          </a>
          <a className="text-sm text-[#2D2A26] hover:opacity-70 cursor-pointer">
            Tech Specs
          </a>
          <button className="bg-[#2D2A26] text-white px-6 py-2 rounded-full text-sm">
            Compare
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-[#2D2A26]"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
