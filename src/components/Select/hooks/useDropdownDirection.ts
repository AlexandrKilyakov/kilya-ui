import { useCallback } from "react";
import { type DropdownDirection } from "../types";

export const useDropdownDirection = () => {
  const calculateOpenDirection = useCallback(
    (
      buttonElement: HTMLElement | null,
      optionsCount: number,
      optionHeight = 50,
      maxDropdownHeight = 300,
      buffer = 10
    ): DropdownDirection => {
      if (!buttonElement) return { direction: "bottom", estimatedHeight: 0 };

      const buttonRect = buttonElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const estimatedDropdownHeight = Math.min(
        optionsCount * optionHeight,
        maxDropdownHeight
      );
      const spaceBelow = viewportHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (
        spaceBelow < estimatedDropdownHeight + buffer &&
        spaceAbove >= estimatedDropdownHeight + buffer
      ) {
        return { direction: "top", estimatedHeight: estimatedDropdownHeight };
      }

      return { direction: "bottom", estimatedHeight: estimatedDropdownHeight };
    },
    []
  );

  return { calculateOpenDirection };
};
