import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useHeroTextAnimation = (headingRef) => {
  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".letter",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, [headingRef]);
};
