import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import headphonesImg from "../../assets/images/headphones.png";

const HeroSection = () => {
  const headingRef = useRef(null);

  // ===== Mobile Menu State =====
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);
  const itemsRef = useRef([]);

  // ===== Prevent background scroll =====
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  // ===== Close menu on resize (FIX BUG) =====
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===== Hero Text Animation =====
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

  // ===== Mobile Menu Animation =====
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
        menuRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.6, ease: "power4.out" }
      );

      // 🔥 Stagger items
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power4.in",
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [menuOpen]);

  // ===== Swipe Down to Close =====
  useEffect(() => {
    let startY = 0;

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const delta = e.touches[0].clientY - startY;
      if (delta > 120) {
        setMenuOpen(false);
      }
    };

    const sheet = menuRef.current;
    if (!sheet) return;

    sheet.addEventListener("touchstart", onTouchStart);
    sheet.addEventListener("touchmove", onTouchMove);

    return () => {
      sheet.removeEventListener("touchstart", onTouchStart);
      sheet.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter inline-block">
        {char}
      </span>
    ));

  return (
    <>
      {/* ================= Header ================= */}
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
            <span className="font-semibold text-[#2D2A26]">
              Resonance
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm text-[#2D2A26] hover:opacity-70">
              Home
            </a>
            <a className="text-sm text-[#2D2A26] hover:opacity-70">
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

      {/* ================= Backdrop ================= */}
      {menuOpen && (
        <div
          ref={backdropRef}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
        />
      )}

      {/* ================= Mobile Bottom Sheet ================= */}
      <div
        ref={menuRef}
        className="
          fixed bottom-0 left-0 right-0 z-50
          h-[70vh]
          bg-[#F5F5F5]
          rounded-t-3xl
          px-8 py-10
          flex flex-col gap-8
          translate-y-full
        "
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />

        {["Home", "Tech Specs"].map((item, i) => (
          <a
            key={item}
            ref={(el) => (itemsRef.current[i] = el)}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-[#2D2A26]"
          >
            {item}
          </a>
        ))}

        <button
          ref={(el) => (itemsRef.current[2] = el)}
          onClick={() => setMenuOpen(false)}
          className="mt-auto bg-[#2D2A26] text-white py-4 rounded-full text-lg"
        >
          Compare
        </button>
      </div>

      {/* ================= Hero Section ================= */}
      <section className="min-h-screen bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5] flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center">

          {/* ✅ BACKGROUND TEXT (RESTORED) */}
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
