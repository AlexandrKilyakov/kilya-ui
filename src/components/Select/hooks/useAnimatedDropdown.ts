import { useState, useEffect, useCallback } from "react";

export interface UseAnimatedDropdownReturn {
  isActive: boolean;
  isVisible: boolean;
  isAnimating: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setIsAnimating: (value: boolean) => void;
}

export const useAnimatedDropdown = (
  initialState = false,
  animationDuration = 300
): UseAnimatedDropdownReturn => {
  const [isActive, setIsActive] = useState(initialState);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(initialState);

  const open = useCallback(() => {
    if (!isActive) {
      setIsVisible(true);
      setIsActive(true);
      setIsAnimating(true);
    }
  }, [isActive]);

  const close = useCallback(() => {
    if (isActive) {
      setIsAnimating(true);
      setIsActive(false);
    }
  }, [isActive]);

  const toggle = useCallback(() => {
    if (isActive) close();
    else open();
  }, [isActive, open, close]);

  useEffect(() => {
    if (isActive && isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isActive, isAnimating, animationDuration]);

  useEffect(() => {
    if (!isActive && !isAnimating && isVisible) {
      setIsVisible(false);
    }
  }, [isActive, isAnimating, isVisible]);

  return {
    isActive,
    isVisible,
    isAnimating,
    open,
    close,
    toggle,
    setIsAnimating,
  };
};
