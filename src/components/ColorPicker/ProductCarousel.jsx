import { useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";

const ProductCarousel = ({
  products,
  centerIndex,
  setCenterIndex,
  imgRefs,
}) => {
  const dragData = useRef({ startX: 0, currentX: 0, isDragging: false });

  const updateImages = useCallback(
    (index) => {
      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        let offset = i - index;
        if (offset > products.length / 2) offset -= products.length;
        if (offset < -products.length / 2) offset += products.length;

        const isCenter = offset === 0;

        gsap.to(img, {
          x: offset * 120,
          scale: isCenter ? 1.2 : 0.9,
          opacity: isCenter ? 1 : 0.6,
          zIndex: isCenter ? 10 : 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    },
    [imgRefs, products.length]
  );

  useEffect(() => {
    updateImages(centerIndex);
  }, [centerIndex, updateImages]);

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
      className="mt-12 relative flex items-center justify-center h-64 md:h-80 overflow-hidden"
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
          className="absolute w-32 md:w-48 h-auto rounded-2xl cursor-pointer"
          onClick={() => setCenterIndex(index)}
        />
      ))}
    </div>
  );
};

export default ProductCarousel;
