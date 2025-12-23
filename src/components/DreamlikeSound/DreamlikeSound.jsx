import React from "react";
import backgroundImage from "../../assets/images/VisualIntro.png";

const DreamlikeSound = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-24 px-6">
        {/* Main Heading */}
        <h2 
          className="
            font-bold
            text-white
            text-center
            tracking-tight
            mb-4 md:mb-6
            drop-shadow-lg
          "
          style={{
            fontSize: '86px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          Dreamlike Sound
        </h2>

        {/* Subtitle */}
        <p 
          className="
            text-lg sm:text-xl md:text-2xl
            text-white/90
            text-center
            mb-6 md:mb-8
            font-light
            tracking-wide
          "
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Starting at $320 — Available Now.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="
            px-8 py-3
            bg-white
            text-[#52483E]
            font-medium
            text-base
            rounded-full
            shadow-lg
            hover:bg-white/90
            hover:shadow-xl
            hover:scale-105
            transition-all
            duration-300
            backdrop-blur-sm
          "
        >
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default DreamlikeSound;
