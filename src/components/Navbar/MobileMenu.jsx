import React, { useRef } from "react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useCloseOnResize } from "../../hooks/useCloseOnResize";
import { useBottomSheetAnimation } from "../../hooks/useBottomSheetAnimation";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);
  const backdropRef = useRef(null);
  const itemsRef = useRef([]);

  // Hooks Integration
  useLockBodyScroll(menuOpen);
  useCloseOnResize(setMenuOpen);
  useBottomSheetAnimation(menuOpen, setMenuOpen, {
    menuRef,
    backdropRef,
    itemsRef,
  });

  // Render backdrop only if menu was opened at least once or is open (controlled by GSAP opacity usually,
  // but here we use conditional rendering with animation handling in hook.
  // To keep GSAP exit animations working, we usually keep it mounted or use AnimatePresence.
  // Based on your original code, you used conditional rendering `{menuOpen && ...}` for backdrop
  // but kept the sheet mounted usually.
  // *Correction based on original code logic*: The original code rendered backdrop conditionally
  // but the sheet was always in DOM just translated.

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div
          ref={backdropRef}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
        />
      )}

      {/* Bottom Sheet */}
      <div
        ref={menuRef}
        className="
          fixed bottom-0 left-0 right-0 z-50
          h-[70vh]
          bg-[#F5F5F5]
          rounded-t-3xl
          px-8 py-10
          flex flex-col gap-8
          translate-y-full
        "
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />

        {["Home", "Tech Specs"].map((item, i) => (
          <a
            key={item}
            ref={(el) => (itemsRef.current[i] = el)}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-[#2D2A26] cursor-pointer"
          >
            {item}
          </a>
        ))}

        <button
          ref={(el) => (itemsRef.current[2] = el)}
          onClick={() => setMenuOpen(false)}
          className="mt-auto bg-[#2D2A26] text-white py-4 rounded-full text-lg"
        >
          Compare
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
