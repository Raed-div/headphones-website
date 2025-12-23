import React from "react";
import GalleryPanel from "./GalleryPanel";

/**
 * GalleryTrack
 * - يستقبل مصفوفة الصور و imageRefs (ref object) لتمرير refs إلى الصور
 */
export default function GalleryTrack({ images, imageRefs, trackRef }) {
  return (
    <div
      ref={trackRef}
      className="flex items-center w-max gap-5 md:gap-10 px-[15vw] pt-10"
    >
      {images.map((src, idx) => (
        <GalleryPanel
          key={idx}
          ref={(el) => (imageRefs.current[idx] = el)}
          src={src}
          alt={`Detail ${idx + 1}`}
        />
      ))}
    </div>
  );
}
