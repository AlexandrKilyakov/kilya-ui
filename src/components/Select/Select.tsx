import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
  type KeyboardEvent,
} from "react";
import type { SelectProps } from "./types";
import { SelectContainer } from "./Select.style";
import { useAnimatedDropdown } from "./hooks/useAnimatedDropdown";
import { useDropdownDirection } from "./hooks/useDropdownDirection";
import { useClickOutside } from "./hooks/useClickOutside";
import { useScrollReposition } from "./hooks/useScrollReposition";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { normalizeOptions } from "./utils/normalizeOptions";
import { getSelectedLabels } from "./utils/getSelectedLabels";
import { SelectButtonComponent } from "./components/SelectButton";
import { SelectDropdown } from "./components/SelectDropdown";
import { SelectOption } from "./components/SelectOption";
import { ANIMATION_DURATION } from "./utils/constants";

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
  noOptionsMessage = "No options",
  ...props
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const { isActive, isVisible, isAnimating, toggle, close, setIsAnimating } =
    useAnimatedDropdown(false, ANIMATION_DURATION);

  const [openDirection, setOpenDirection] = useState<"top" | "bottom">(
    "bottom"
  );

  const { calculateOpenDirection } = useDropdownDirection();

  // Нормализация опций
  const normalizedOptions = useMemo(() => normalizeOptions(options), [options]);

  // Выбранные значения
  const selectedValues = useMemo<(string | number)[]>(() => {
    if (!multiple) {
      return value !== undefined && value !== null
        ? [value as string | number]
        : [];
    }
    return Array.isArray(value) ? value : [];
  }, [value, multiple]);

  // Получение лейблов для отображения
  const { displayLabel } = useMemo(
    () => getSelectedLabels(normalizedOptions, selectedValues, placeholder),
    [normalizedOptions, selectedValues, placeholder]
  );

  // Обработчик выбора опции
  const handleOptionSelect = useCallback(
    (selectedValue: string | number) => {
      if (!onChange || disabled) return;

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
    [onChange, multiple, selectedValues, close, disabled]
  );

  // Обработчик клика по кнопке
  const handleButtonClick = useCallback(() => {
    if (!disabled && normalizedOptions.length > 0) {
      toggle();
    }
  }, [disabled, normalizedOptions.length, toggle]);

  // Клавиатурная навигация
  const { focusedIndex, handleKeyDown, resetFocus, setFocusToFirstSelected } =
    useKeyboardNavigation({
      normalizedOptions,
      isActive,
      selectedValues,
      onOptionSelect: handleOptionSelect, // Передаем обработчик
      onClose: close,
      dropdownRef: dropdownRef as React.RefObject<HTMLUListElement>,
    });

  // Репозиционирование
  const handleReposition = useCallback(() => {
    if (isActive && buttonRef.current && direction === "auto") {
      const { direction: calculatedDirection } = calculateOpenDirection(
        buttonRef.current,
        normalizedOptions.length
      );
      setOpenDirection(calculatedDirection);
    }
  }, [isActive, direction, calculateOpenDirection, normalizedOptions.length]);

  // Хуки для внешних событий
  useClickOutside(selectRef as React.RefObject<HTMLElement>, isActive, close);
  useScrollReposition(isActive, handleReposition);

  // Эффекты
  useEffect(() => {
    if (isActive && buttonRef.current) {
      if (direction === "auto") {
        const { direction: calculatedDirection } = calculateOpenDirection(
          buttonRef.current,
          normalizedOptions.length
        );
        setOpenDirection(calculatedDirection);
      } else {
        setOpenDirection(direction);
      }
      setFocusToFirstSelected();
    } else {
      resetFocus();
    }
  }, [
    isActive,
    direction,
    calculateOpenDirection,
    normalizedOptions.length,
    setFocusToFirstSelected,
    resetFocus,
  ]);

  // Рендер контента кнопки
  const renderButtonContent = () => {
    if (normalizedOptions.length === 0) {
      return noOptionsMessage;
    }
    return displayLabel;
  };

  // Рендер опций
  const renderOptions = () => {
    if (normalizedOptions.length === 0) {
      return (
        <SelectOption
          option={{ value: "", label: noOptionsMessage, disabled: true }}
          isSelected={false}
          isFocused={false}
          onClick={() => {}}
        />
      );
    }

    return normalizedOptions.map((option, index) => (
      <SelectOption
        key={option.value}
        option={option}
        isSelected={selectedValues.includes(option.value)}
        isFocused={focusedIndex === index}
        onClick={handleOptionSelect} // Используем handleOptionSelect
      />
    ));
  };

  // Обработчик клавиш для контейнера
  const handleContainerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleButtonClick();
    }
    handleKeyDown(e);
  };

  return (
    <SelectContainer
      ref={selectRef}
      className={className}
      $disabled={disabled}
      onKeyDown={handleContainerKeyDown}
      role="combobox"
      aria-expanded={isActive}
      aria-haspopup="listbox"
      aria-disabled={disabled}
      aria-owns={isActive ? "select-dropdown" : undefined}
      {...props}
    >
      <SelectButtonComponent
        ref={buttonRef}
        isOpen={isActive}
        image={image}
        onClick={handleButtonClick}
        disabled={disabled || normalizedOptions.length === 0}
        showArrow={showArrow && normalizedOptions.length > 0}
        customArrow={customArrow}
        aria-label={typeof displayLabel === "string" ? displayLabel : undefined}
      >
        {renderButtonContent()}
      </SelectButtonComponent>

      {isVisible && normalizedOptions.length > 0 && (
        <SelectDropdown
          ref={dropdownRef}
          id="select-dropdown"
          direction={openDirection}
          isActive={isActive}
          isAnimating={isAnimating}
          maxHeight={
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
          }
          onAnimationEnd={() => {
            if (!isActive) setIsAnimating(false);
          }}
          role="listbox"
          aria-multiselectable={multiple}
        >
          {renderOptions()}
        </SelectDropdown>
      )}
    </SelectContainer>
  );
};

export default Select;
