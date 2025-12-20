import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./cta.css";

export default function CTA() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={ref} className="cta">
      <h2>Dreamlike Sound</h2>
      <button>Buy Now</button>
    </section>
  );
}
