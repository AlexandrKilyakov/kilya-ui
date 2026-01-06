import {
  useState,
  useCallback,
  type KeyboardEvent,
  type RefObject,
} from "react";
import type { SelectOption } from "../types";

interface UseKeyboardNavigationProps {
  normalizedOptions: SelectOption[];
  isActive: boolean;
  selectedValues: (string | number)[];
  onOptionSelect: (value: string | number) => void;
  onClose: () => void;
  dropdownRef?: RefObject<HTMLUListElement | null>;
}

export const useKeyboardNavigation = ({
  normalizedOptions,
  isActive,
  selectedValues,
  onOptionSelect,
  onClose,
  dropdownRef,
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isActive) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev < normalizedOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : normalizedOptions.length - 1
          );
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
            const option = normalizedOptions[focusedIndex];
            if (!option.disabled) {
              onOptionSelect(option.value);
              if (dropdownRef?.current) {
                const optionElement =
                  dropdownRef.current.children[focusedIndex];
                if (optionElement instanceof HTMLElement) {
                  optionElement.focus();
                }
              }
            }
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          setFocusedIndex(-1);
          break;
        case "Tab":
          onClose();
          setFocusedIndex(-1);
          break;
        case "Home":
          e.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          e.preventDefault();
          setFocusedIndex(normalizedOptions.length - 1);
          break;
      }
    },
    [
      isActive,
      normalizedOptions,
      focusedIndex,
      onOptionSelect,
      onClose,
      dropdownRef,
    ]
  );

  const resetFocus = useCallback(() => {
    setFocusedIndex(-1);
  }, []);

  const setFocusToFirstSelected = useCallback(() => {
    if (selectedValues.length > 0) {
      const firstSelectedIndex = normalizedOptions.findIndex(
        (opt) => opt.value === selectedValues[0]
      );
      if (firstSelectedIndex >= 0) {
        setFocusedIndex(firstSelectedIndex);
      }
    }
  }, [normalizedOptions, selectedValues]);

  return {
    focusedIndex,
    handleKeyDown,
    resetFocus,
    setFocusToFirstSelected,
  };
};
