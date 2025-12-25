import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryTrack from "./GalleryTrack";

// Import WebP images for the gallery
import img1 from "../../assets/images/beige.webp";
import img2 from "../../assets/images/green.webp";

gsap.registerPlugin(ScrollTrigger);

const images = [img1, img2, img1, img2, img1, img2];

export default function HorizontalGallery() {
  const scrollWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const currentImageElements = imageRefs.current;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const wrapper = scrollWrapperRef.current;

      if (!track || !wrapper) return;

      // أنيميشن التمرير الأفقي
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // تأثير الـ Hover (الزووم)
      const supportsHover = window.matchMedia("(hover: hover)").matches;
      if (supportsHover) {
        currentImageElements.forEach((img) => {
          if (!img) return;
          const panel = img.parentElement;

          const hoverIn = () =>
            gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out" });
          const hoverOut = () =>
            gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });

          panel.addEventListener("mouseenter", hoverIn);
          panel.addEventListener("mouseleave", hoverOut);

          // تخزين الدوال داخل العنصر لتسهيل عملية التنظيف (Cleanup)
          panel._hoverHandlers = { hoverIn, hoverOut };
        });
      }
    }, scrollWrapperRef);

    return () => {
      // 3. تنظيف المستمعات (Event Listeners) باستخدام المتغير المحلي
      currentImageElements.forEach((img) => {
        if (!img) return;
        const panel = img.parentElement;
        if (panel && panel._hoverHandlers) {
          panel.removeEventListener("mouseenter", panel._hoverHandlers.hoverIn);
          panel.removeEventListener(
            "mouseleave",
            panel._hoverHandlers.hoverOut
          );
          delete panel._hoverHandlers;
        }
      });
      ctx.revert(); // مسح أنيميشن GSAP
    };
  }, []);

  return (
    <div className="bg-[#f6f4f1] w-full">
      {/* حاوية السكرول الكبيرة */}
      <div
        ref={scrollWrapperRef}
        className="relative h-[160vh] md:h-[300vh] w-full m-0 p-0"
      >
        {/* الحاوية المثبتة (Sticky) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* النصوص العلوية */}
          <div className="absolute top-[12%] left-0 w-full text-center z-20 px-6 pointer-events-none">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#52483E] mb-6">
              Every Detail matters
            </h2>
            <p class="font-normal text-base sm:text-lg md:text-xl lg:text-[24px] text-[#8B8782]">
              From the stitch to the signal, precision lives here.
            </p>
          </div>

          {/* مسار الصور (المكون الفرعي) */}
          <GalleryTrack
            images={images}
            imageRefs={imageRefs}
            trackRef={trackRef}
          />
        </div>
      </div>
    </div>
  );
}
