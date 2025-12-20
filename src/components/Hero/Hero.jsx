import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { initGSAP } from "../../utils/gsap";
import beige from "../../assets/images/beige.png";
import green from "../../assets/images/green.png";
import red from "../../assets/images/red.png";
import "./hero.css";

const images = { beige, green, red };

export default function Hero() {
  const [color, setColor] = useState("beige");
  const scope = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4 }
    );
  }, [color]);

  return (
    <section ref={scope} className="hero">
      <h1 className="hero-title">
        Resonance <br /> Aura Pro II
      </h1>

      <img
        ref={imgRef}
        src={images[color]}
        className="hero-image"
        alt="headphones"
      />

      <div className="color-picker">
        {Object.keys(images).map((c) => (
          <button key={c} onClick={() => setColor(c)} className={`dot ${c}`} />
        ))}
      </div>
    </section>
  );
}
