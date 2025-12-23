import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import type { SelectProps, NormalizedSelectOption } from "./types";
import {
  SelectContainer,
  SelectButton,
  SelectDropdown,
  SelectOption as StyledOption,
  SelectContent,
  SelectImage,
} from "./Select.style";
import { useAnimatedDropdown } from "./hooks/useAnimatedDropdown";
import { useDropdownDirection } from "./hooks/useDropdownDirection";
import { useClickOutside } from "./hooks/useClickOutside";
import { useScrollReposition } from "./hooks/useScrollReposition";
import ArrowDefault from "./assets/ArrowDefault";

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options = [],
  image,
  className,
  placeholder = "Select an option",
  disabled = false,
  direction = "auto",
  maxHeight = "50vh",
  showArrow = true,
  customArrow,
  multiple = false,
  ...props
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { isActive, isVisible, isAnimating, toggle, close, setIsAnimating } =
    useAnimatedDropdown(false);

  const [openDirection, setOpenDirection] = useState<"top" | "bottom">(
    "bottom"
  );

  const { calculateOpenDirection } = useDropdownDirection();

  // -----------------------------
  // normalize options
  // -----------------------------
  function normalizeOption(item: any): NormalizedSelectOption | null {
    if (item === undefined || item === null) return null;

    if (
      typeof item === "object" &&
      "value" in item &&
      "label" in item &&
      (typeof item.value === "string" || typeof item.value === "number")
    ) {
      return { value: item.value, label: item.label };
    }

    if (typeof item === "string" || typeof item === "number") {
      return { value: item, label: String(item) };
    }

    return null;
  }

  const normalizedOptions = useMemo<NormalizedSelectOption[]>(() => {
    if (!options) return [];

    if (Array.isArray(options)) {
      return options
        .map(normalizeOption)
        .filter((item): item is NormalizedSelectOption => item !== null);
    }

    if (typeof options === "object") {
      return Object.entries(options).map(([key, label]) => ({
        value: key,
        label,
      }));
    }

    return [];
  }, [options]);

  const optionsCount = normalizedOptions.length;

  // -----------------------------
  // selected values
  // -----------------------------
  const selectedValues = useMemo<(string | number)[]>(() => {
    if (!multiple) {
      return value !== undefined ? [value as string | number] : [];
    }
    return Array.isArray(value) ? value : [];
  }, [value, multiple]);

  // -----------------------------
  // labels for render
  // -----------------------------
  const selectedLabels = useMemo(() => {
    return normalizedOptions
      .filter((opt) => selectedValues.includes(opt.value))
      .map((opt) => opt.label);
  }, [normalizedOptions, selectedValues]);

  // -----------------------------
  // handlers
  // -----------------------------
  const handleButtonClick = useCallback(() => {
    if (!disabled) toggle();
  }, [disabled, toggle]);

  const handleOptionSelect = useCallback(
    (selectedValue: string | number) => {
      if (!onChange) return;

      if (!multiple) {
        onChange(selectedValue);
        close();
        return;
      }

      const nextValues = selectedValues.includes(selectedValue)
        ? selectedValues.filter((v) => v !== selectedValue)
        : [...selectedValues, selectedValue];

      onChange(nextValues);
    },
    [onChange, multiple, selectedValues, close]
  );

  // -----------------------------
  // reposition logic
  // -----------------------------
  const handleReposition = useCallback(() => {
    if (isActive && buttonRef.current && direction === "auto") {
      const { direction: calculatedDirection } = calculateOpenDirection(
        buttonRef.current,
        optionsCount
      );
      setOpenDirection(calculatedDirection);
    }
  }, [isActive, direction, calculateOpenDirection, optionsCount]);

  useClickOutside(selectRef as React.RefObject<HTMLElement>, isActive, close);
  useScrollReposition(isActive, handleReposition);

  useEffect(() => {
    if (isActive && buttonRef.current) {
      if (direction === "auto") {
        const { direction: calculatedDirection } = calculateOpenDirection(
          buttonRef.current,
          optionsCount
        );
        setOpenDirection(calculatedDirection);
      } else {
        setOpenDirection(direction);
      }
    }
  }, [isActive, direction, calculateOpenDirection, optionsCount]);

  // -----------------------------
  // render content
  // -----------------------------
  const renderContent = () => {
    let label: React.ReactNode = placeholder;

    if (selectedLabels.length === 1) {
      label = selectedLabels[0];
    } else if (selectedLabels.length > 1) {
      label = `Выбрано: ${selectedLabels.length}`;
    }

    return (
      <>
        {image && <SelectImage src={image} alt="" />}
        <span>{label}</span>
      </>
    );
  };

  // -----------------------------
  // no / single option case
  // -----------------------------
  if (optionsCount <= 1) {
    return (
      <SelectContainer className={className} $disabled={disabled} {...props}>
        <SelectButton
          ref={buttonRef}
          $isOpen={false}
          disabled={disabled}
          onClick={() => {
            if (optionsCount === 1 && onChange) {
              onChange(
                multiple
                  ? [normalizedOptions[0].value]
                  : normalizedOptions[0].value
              );
            }
          }}
        >
          <SelectContent>{renderContent()}</SelectContent>
        </SelectButton>
      </SelectContainer>
    );
  }

  // -----------------------------
  // main render
  // -----------------------------
  return (
    <SelectContainer
      ref={selectRef}
      className={className}
      $disabled={disabled}
      {...props}
    >
      <SelectButton
        ref={buttonRef}
        $isOpen={isActive}
        disabled={disabled}
        onClick={handleButtonClick}
        aria-expanded={isActive}
        aria-haspopup="listbox"
      >
        <SelectContent>{renderContent()}</SelectContent>
        {showArrow && (customArrow || ArrowDefault)}
      </SelectButton>

      {isVisible && (
        <SelectDropdown
          role="listbox"
          $direction={openDirection}
          $isActive={isActive}
          $isAnimating={isAnimating}
          $maxHeight={
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
          }
          onAnimationEnd={() => {
            if (!isActive) setIsAnimating(false);
          }}
        >
          {normalizedOptions.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);

            return (
              <StyledOption
                key={`${option.value}-${index}`}
                $isSelected={isSelected}
                onClick={() => handleOptionSelect(option.value)}
                role="option"
                aria-selected={isSelected}
              >
                <span>{option.label}</span>
              </StyledOption>
            );
          })}
        </SelectDropdown>
      )}
    </SelectContainer>
  );
};

export default Select;
