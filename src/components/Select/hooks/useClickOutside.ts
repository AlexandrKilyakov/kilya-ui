import { useEffect, type RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  isActive: boolean,
  onClose: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isActive) {
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isActive, ref, onClose]);
};
