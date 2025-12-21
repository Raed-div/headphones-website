import React, { useRef } from "react";
import headphonesImg from "../../assets/images/headphones.png";
import { useHeroTextAnimation } from "../../hooks/useHeroTextAnimation";

const HeroContent = () => {
  const headingRef = useRef(null);

  // Hook Integration
  useHeroTextAnimation(headingRef);

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char}
      </span>
    ));

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5] flex items-center justify-center">
      <div className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center">
        {/* Background Text */}
        <p
          className="
            absolute
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-[#DACCBC] to-[#AFA497]
            font-medium
            text-[70px]
            sm:text-[100px]
            md:text-[130px]
            lg:text-[140px]
            leading-none
            z-0
            translate-y-6
            pointer-events-none
          "
        >
          Aura Pro II
        </p>

        {/* Image */}
        <img
          src={headphonesImg}
          alt="Headphones"
          className="
            relative
            z-10
            w-[420px]
            sm:w-[480px]
            md:w-[560px]
            lg:w-[620px]
          "
        />

        {/* Heading */}
        <h1
          ref={headingRef}
          className="
            absolute
            top-1/2
            -translate-y-[120px]
            sm:-translate-y-[150px]
            md:-translate-y-[180px]
            lg:-translate-y-[210px]
            font-medium
            text-[#52483E]
            tracking-tight
            leading-none
            text-[80px]
            sm:text-[100px]
            md:text-[140px]
            lg:text-[180px]
            z-20
          "
        >
          {splitText("Resonance")}
        </h1>
      </div>
    </section>
  );
};

export default HeroContent;
