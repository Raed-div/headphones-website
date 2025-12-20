import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { initGSAP } from "../../utils/gsap";
import "./features.css";

export default function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
      .from(".feature", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="features">
      {["Deep lows", "Lush mids", "Airy highs"].map((f) => (
        <div key={f} className="feature">{f}</div>
      ))}
    </section>
  );
}
