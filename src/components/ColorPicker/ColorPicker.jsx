import { useState, useRef } from "react";
import ProductCarousel from "./ProductCarousel";
import ColorButtons from "./ColorButtons";

// استيراد الصور من المجلد المحلي
import beigeImg from "../../assets/images/beige.png";
import greenImg from "../../assets/images/green.png";
import redImg from "../../assets/images/red.png";

// المنتجات
const products = [
  { color: "beige", image: beigeImg },
  { color: "green", image: greenImg },
  { color: "red", image: redImg },
];

// الألوان والألوان المستخدمة في الخريطة
const colors = ["beige", "green", "red"];
const colorMap = {
  beige: "rgb(196, 169, 98)",
  green: "rgb(139, 154, 109)",
  red: "rgb(158, 90, 90)",
};

const ColorPicker = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const imgRefs = useRef([]);

  return (
    <section className="pb-16 px-6 bg-[#F5F5F5]">
      <div className="container mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#52483E] mb-6">
          Your Style. Your Sound.
        </h2>
        <p class="font-normal text-base sm:text-lg md:text-xl lg:text-[24px] text-[#8B8782]">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>

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

        <p className="mt-6 font-normal text-[20px] sm:text-[24px] text-[#8B8782]">
          Choose a color that fits your flow.
        </p>
      </div>
    </section>
  );
};

export default ColorPicker;
