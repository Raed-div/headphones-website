import React, { forwardRef } from "react";

/**
 * GalleryPanel
 * - forwardRef للاستخدام مع imageRefs في الأب
 * - استقبل src و alt و className إضافي
 */
const GalleryPanel = forwardRef(({ src, alt, className = "" }, ref) => {
  return (
    <div
      className={
        "panel relative flex-shrink-0 rounded-xl md:rounded-3xl overflow-hidden " +
        "w-[55vw] h-[32vh] md:w-[25vw] md:h-[35vh] bg-[#f0ede9] " +
        className
      }
    >
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain block will-change-transform"
      />
    </div>
  );
});

export default GalleryPanel;
