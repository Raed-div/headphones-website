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
  beige: "#D4A84B",
  green: "#9AA26D",
  red: "#8B4B4B",
};

const ColorPicker = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const imgRefs = useRef([]);

  return (
    <section className="py-16 px-6 bg-[#ECEAEA]">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 
            className="font-bold text-[#3D3D3D] mb-4"
            style={{ fontSize: '48px' }}
          >
            Your Style. Your Sound.
          </h2>
          <p className="font-normal text-[18px] text-[#8B8782]">
            Studio-grade acoustics that dissolve distractions and awaken clarity.
          </p>
        </div>

        {/* Product Carousel */}
        <ProductCarousel
          products={products}
          centerIndex={centerIndex}
          setCenterIndex={setCenterIndex}
          imgRefs={imgRefs}
        />

        {/* Color Buttons */}
        <ColorButtons
          colors={colors}
          colorMap={colorMap}
          products={products}
          centerIndex={centerIndex}
          setCenterIndex={setCenterIndex}
        />

        {/* Bottom Text */}
        <p className="mt-6 font-normal text-[18px] text-[#8B8782]">
          Choose a color that fits your flow.
        </p>
      </div>
    </section>
  );
};

export default ColorPicker;
