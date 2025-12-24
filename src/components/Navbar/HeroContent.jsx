import React, { useRef, useEffect } from "react";
import headphonesImg from "../../assets/images/headphones.png";
import { useHeroTextAnimation } from "../../hooks/useHeroTextAnimation";
import { gsap } from "gsap";

const HeroContent = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Hook Integration for text animation
  useHeroTextAnimation(headingRef);

  // Image animations
  useEffect(() => {
    if (!imageRef.current) return;

    // Initial entrance animation
    gsap.fromTo(
      imageRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotation: -5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // Continuous floating animation
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Subtle rotation animation
    gsap.to(imageRef.current, {
      rotation: 3,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      if (!containerRef.current || !imageRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement based on mouse position
      const xMove = (clientX - innerWidth / 2) / 50;
      const yMove = (clientY - innerHeight / 2) / 50;

      gsap.to(imageRef.current, {
        x: xMove,
        y: yMove,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char}
      </span>
    ));

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5] flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center"
      >
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

        {/* Image with animations */}
        <img
          ref={imageRef}
          src={headphonesImg}
          alt="Headphones"
          className="
            relative
            z-10
            w-[420px]
            sm:w-[480px]
            md:w-[560px]
            lg:w-[620px]
            drop-shadow-2xl
          "
          style={{ willChange: 'transform' }}
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
