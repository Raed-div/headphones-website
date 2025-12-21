import { useEffect } from "react";
import { gsap } from "gsap";

export const useHeroTextAnimation = (headingRef) => {
  useEffect(() => {
    if (!headingRef.current) return;

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
  }, [headingRef]);
};
