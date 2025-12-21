import { useEffect } from "react";
import { gsap } from "gsap";

export const useBottomSheetAnimation = (menuOpen, setMenuOpen, refs) => {
  const { menuRef, backdropRef, itemsRef } = refs;

  // Animation Logic
  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
        menuRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.6, ease: "power4.out" }
      );

      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power4.in",
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [menuOpen, menuRef, backdropRef, itemsRef]);

  // Swipe Down Logic
  useEffect(() => {
    let startY = 0;

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const delta = e.touches[0].clientY - startY;
      if (delta > 120) {
        setMenuOpen(false);
      }
    };

    const sheet = menuRef.current;
    if (!sheet) return;

    sheet.addEventListener("touchstart", onTouchStart);
    sheet.addEventListener("touchmove", onTouchMove);

    return () => {
      sheet.removeEventListener("touchstart", onTouchStart);
      sheet.removeEventListener("touchmove", onTouchMove);
    };
  }, [menuRef, setMenuOpen]);
};