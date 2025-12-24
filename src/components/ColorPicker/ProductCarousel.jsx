import { useEffect, useCallback, useRef, useState } from "react";
import { gsap } from "gsap";

const ProductCarousel = ({
  products,
  centerIndex,
  setCenterIndex,
  imgRefs,
}) => {
  const dragData = useRef({ startX: 0, currentX: 0, isDragging: false });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateImages = useCallback(
    (index) => {
      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        let offset = i - index;
        if (offset > products.length / 2) offset -= products.length;
        if (offset < -products.length / 2) offset += products.length;

        const isCenter = offset === 0;

        if (isMobile) {
          // On mobile: only show center image, hide others
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
          // On desktop: show carousel with blur
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
    [imgRefs, products.length, isMobile]
  );

  useEffect(() => {
    updateImages(centerIndex);
  }, [centerIndex, updateImages, isMobile]);

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

  return (
    <div
      className="relative flex items-center justify-center h-[400px] sm:h-[400px] md:h-[450px] overflow-hidden select-none"
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
          loading="lazy"
          decoding="async"
          className="absolute w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[400px] h-auto cursor-pointer transition-all"
          style={{ willChange: 'transform, opacity, filter' }}
          onClick={() => setCenterIndex(index)}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default ProductCarousel;

