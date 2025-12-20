import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import headphonesImg from "../../assets/images/headphones.png";

const HeroSection = () => {
  const headingRef = useRef(null);

  // Animation النص فقط
  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, []);

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char}
      </span>
    ));

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm text-[#2D2A26] hover:opacity-70">Home</a>
            <a className="text-sm text-[#2D2A26] hover:opacity-70">
              Tech Specs
            </a>
            <button className="bg-[#2D2A26] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3D3A36] transition">
              Compare
            </button>
          </nav>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="min-h-screen bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5] flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center">
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
            "
          >
            Aura Pro II
          </p>

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
    </>
  );
};

export default HeroSection;
