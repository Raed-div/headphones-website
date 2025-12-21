import { useState, useRef } from "react";
import ProductCarousel from "./ProductCarousel";
import ColorButtons from "./ColorButtons";

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
  const [centerIndex, setCenterIndex] = useState(1);
  const imgRefs = useRef([]);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-6">
          Your Style. Your Sound.
        </h2>

        <ProductCarousel
          products={products}
          centerIndex={centerIndex}
          setCenterIndex={setCenterIndex}
          imgRefs={imgRefs}
        />

        <ColorButtons
          colors={colors}
          colorMap={colorMap}
          products={products}
          centerIndex={centerIndex}
          setCenterIndex={setCenterIndex}
        />

        <p className="text-sm text-[#6B6560] mt-4">
          Drag, click a color, or a headphone to focus it.
        </p>
      </div>
    </section>
  );
};

export default ColorPicker;
