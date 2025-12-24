import React, { useState, useRef } from "react";
import { useEffect, useCallback } from "react";
import { gsap } from "gsap";
import Header from "../components/Navbar/Header";
import MobileMenu from "../components/Navbar/MobileMenu";
import Footer from "../components/Footer/Footer";

// Import images
import beigeImg from "../assets/images/beige.png";
import greenImg from "../assets/images/green.png";
import redImg from "../assets/images/red.png";

const TechSpecs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [centerIndex, setCenterIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const imgRefs = useRef([]);
  const dragData = useRef({ startX: 0, currentX: 0, isDragging: false });

  // Products with images
  const products = [
    { color: "beige", image: beigeImg, name: "Beige" },
    { color: "green", image: greenImg, name: "Olive" },
    { color: "red", image: redImg, name: "Burgundy" }
  ];

  const colorMap = {
    beige: "#D4A84B",
    green: "#9AA26D",
    red: "#8B4B4B",
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update images position
  const updateImages = useCallback(
    (index) => {
      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        let offset = i - index;
        if (offset > products.length / 2) offset -= products.length;
        if (offset < -products.length / 2) offset += products.length;

        const isCenter = offset === 0;

        if (isMobile) {
          gsap.to(img, {
            x: 0,
            scale: isCenter ? 1 : 0,
            opacity: isCenter ? 1 : 0,
            filter: 'blur(0px)',
            zIndex: isCenter ? 10 : 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          const isVisible = Math.abs(offset) <= 1;
          gsap.to(img, {
            x: offset * 350,
            scale: isCenter ? 1 : 0.7,
            opacity: isCenter ? 1 : 0.4,
            filter: isCenter ? 'blur(0px)' : 'blur(4px)',
            zIndex: isCenter ? 10 : 1,
            duration: 0.5,
            ease: "power2.out",
            visibility: isVisible ? 'visible' : 'hidden',
          });
        }
      });
    },
    [products.length, isMobile]
  );

  useEffect(() => {
    updateImages(centerIndex);
  }, [centerIndex, updateImages, isMobile]);

  // Drag handlers
  const handleDragStart = (e) => {
    dragData.current.isDragging = true;
    dragData.current.startX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
  };

  const handleDragMove = (e) => {
    if (!dragData.current.isDragging) return;
    const currentX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    dragData.current.currentX = currentX;
  };

  const handleDragEnd = () => {
    if (!dragData.current.isDragging) return;
    const deltaX = dragData.current.currentX - dragData.current.startX;

    if (deltaX > 50) {
      setCenterIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    } else if (deltaX < -50) {
      setCenterIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }

    dragData.current.isDragging = false;
    dragData.current.startX = 0;
    dragData.current.currentX = 0;
  };

  const handleColorClick = (color) => {
    const index = products.findIndex((p) => p.color === color);
    if (index !== -1) setCenterIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EC]">
      <Header setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Product Section with Color */}
        <div className="mb-20">
          {/* Product Carousel */}
          <div
            className="relative flex items-center justify-center h-[400px] sm:h-[400px] md:h-[450px] overflow-hidden select-none mb-8"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {products.map((prod, index) => (
              <img
                key={prod.color}
                ref={(el) => (imgRefs.current[index] = el)}
                src={prod.image}
                alt={`${prod.color} headphones`}
                className="absolute w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[400px] h-auto cursor-pointer transition-all"
                style={{ willChange: 'transform, opacity, filter' }}
                onClick={() => setCenterIndex(index)}
                draggable={false}
              />
            ))}
          </div>

          {/* Color Buttons */}
          <div className="flex justify-center gap-5">
            {products.map((prod) => {
              const isActive = products[centerIndex]?.color === prod.color;
              return (
                <button
                  key={prod.color}
                  className={`
                    w-10 h-10 
                    rounded-full 
                    transition-all 
                    duration-300
                    hover:scale-110
                    ${isActive 
                      ? "ring-2 ring-offset-2 ring-[#52483E] scale-110" 
                      : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-400"
                    }
                  `}
                  style={{ backgroundColor: colorMap[prod.color] }}
                  onClick={() => handleColorClick(prod.color)}
                  aria-label={`Select ${prod.name} color`}
                />
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Audio Technology */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">
              Audio Technology
            </h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Speaker type:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">40mm neodymium drivers with custom-tuned DSP</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Frequency range:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">5Hz - 40kHz (Hi-Res certified)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Active Noise Cancellation:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Adaptive ANC up to 45dB reduction</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Transparency mode:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">3-level adjustable ambient sound</span>
              </div>
            </div>
          </div>

          {/* Intelligence */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">
              Intelligence
            </h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Spatial audio:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">360° spatial with head tracking</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Smart features:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Auto play/pause, voice assistant integration</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Wear detection:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Automatic pause when removed</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Multipoint pairing:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Connect up to 3 devices simultaneously</span>
              </div>
            </div>
          </div>

          {/* Power */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">Power</h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Battery life (ANC on):</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Up to 30 hours</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Quick charge:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">5 min charge = 3 hours playback</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Charging port:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">USB-C with fast charging support</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">Controls</h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Touch controls:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Tap, swipe, and hold gestures</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Physical buttons:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Power, ANC toggle, volume rocker</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Voice assistant:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Wake word or button activation</span>
              </div>
            </div>
          </div>

          {/* Built For The Elements */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">
              Built For The Elements
            </h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Weather resistance:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">IPX4 splash and sweat resistant</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Temperature range:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">-10°C to 45°C operating range</span>
              </div>
            </div>
          </div>

          {/* Battery */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">Battery</h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Cell type:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Lithium-ion rechargeable (950mAh)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Charge cycles:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">500+ full cycles to 80% capacity</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Standby time:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Up to 200 hours</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Battery indicator:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">LED and app display with percentage</span>
              </div>
            </div>
          </div>

          {/* Connectivity */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">
              Connectivity
            </h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Bluetooth version:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">5.3 with LE Audio</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Codecs:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">LDAC, aptX Adaptive, AAC, SBC</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Range:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Up to 30m (line of sight)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Wired option:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">3.5mm aux cable (included)</span>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="border-b border-gray-300 pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">Materials</h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Headband:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Aluminum alloy with soft-touch coating</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Ear cushions:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Memory foam with premium vegan leather</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Weight:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">250g (lightweight design)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Sustainability:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">45% recycled materials, carbon neutral shipping</span>
              </div>
            </div>
          </div>

          {/* Sustainability & Materials */}
          <div className="pb-8">
            <h2 className="text-2xl font-semibold text-[#52483E] mb-6">
              Sustainability & Materials
            </h2>
            <div className="space-y-4 text-[#52483E]">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Eco-friendly packaging:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">100% recyclable materials</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Replaceable parts:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">Ear cushions, cables, and headband padding</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Certifications:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">FSC, Energy Star, RoHS compliant</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="text-gray-600">Product lifespan:</span>
                <span className="font-medium sm:text-right text-[#8B8782]">5+ years with proper care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-[#52483E] mb-4">
            Sound. Presence. Purpose.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Crafted for those who demand excellence in every detail. Experience audio
            that moves you, technology that understands you, and design that inspires you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-[#52483E] to-[#8B8782] text-white rounded-full font-medium hover:shadow-lg transition-all">
              Buy Now
            </button>
            <button className="px-8 py-3 border-2 border-[#52483E] text-[#52483E] rounded-full font-medium hover:bg-[#52483E] hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechSpecs;
