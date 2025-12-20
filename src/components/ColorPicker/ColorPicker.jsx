import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const products = [
  {
    color: "gold",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/golden-yellow-wireless-headphones-product-UN1Nw25CPWFhMkP09KJ9oU7yVRojw2.jpg",
  },
  {
    color: "sage",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sage-green-wireless-headphones-product-thzJpKYrUw4cjpqOIPjMxcYHFDdRnK.jpg",
  },
  {
    color: "rose",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/rose-pink-wireless-headphones-product-jyQttYZQZGvaxgO7cYLbRJF3orNfSV.jpg",
  },
];

const colors = ["gold", "sage", "rose"];
const colorMap = {
  gold: "rgb(196, 169, 98)",
  sage: "rgb(139, 154, 109)",
  rose: "rgb(158, 90, 90)",
};

const ColorPicker = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img, index) => {
      if (img) {
        const isCenter = index === centerIndex;
        gsap.to(img, {
          scale: isCenter ? 1.1 : 0.9,
          opacity: isCenter ? 1 : 0.6,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [centerIndex]);

  const handleColorClick = (color) => {
    const index = products.findIndex((p) => p.color === color);
    if (index !== -1) setCenterIndex(index);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-6">
          Your Style. Your Sound.
        </h2>

        {/* عرض الصور الثلاثة جنب بعض */}
        <div className="mt-12 flex items-center justify-center gap-4 md:gap-8">
          {products.map((prod, index) => (
            <div
              key={prod.color}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setCenterIndex(index)}
            >
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                src={prod.image}
                alt={`${prod.color} headphones`}
                className="w-32 md:w-48 h-auto rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* مجموعة الألوان أسفل الصور */}
        <div className="flex justify-center gap-4 md:gap-6 mt-8">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                centerIndex !== null && products[centerIndex].color === color
                  ? "border-blue-500 scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: colorMap[color] }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>

        <p className="text-sm text-[#6B6560] mt-4">
          Click a color or a headphone to focus it.
        </p>
      </div>
    </section>
  );
};

export default ColorPicker;
