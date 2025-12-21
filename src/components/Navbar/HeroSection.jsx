import React, { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroContent />
    </>
  );
};

export default HeroSection;