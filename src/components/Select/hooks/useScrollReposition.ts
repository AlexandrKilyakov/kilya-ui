import { useEffect, useRef } from "react";

export const useScrollReposition = (
  isActive: boolean,
  onReposition: () => void,
  threshold = 5
): void => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - scrollYRef.current) > threshold) {
          scrollYRef.current = currentScrollY;
          onReposition();
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive, onReposition, threshold]);
};
