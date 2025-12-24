import React, { useRef } from "react";
import { Link } from "react-router-dom";
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

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Tech Specs", path: "/tech-specs" }
  ];

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

        {menuItems.map((item, i) => (
          <Link
            key={item.name}
            to={item.path}
            ref={(el) => (itemsRef.current[i] = el)}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-[#52483E] cursor-pointer hover:text-[#8B8782] transition-colors"
          >
            {item.name}
          </Link>
        ))}

        <button
          ref={(el) => (itemsRef.current[2] = el)}
          onClick={() => setMenuOpen(false)}
          className="mt-auto bg-[#52483E] text-white py-4 rounded-full text-lg"
        >
          Compare
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
