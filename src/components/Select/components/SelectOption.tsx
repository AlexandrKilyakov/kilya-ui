import React from "react";
import { SelectOption as StyledOption } from "../Select.style";

interface SelectOptionProps {
  option: {
    value: string | number;
    label: React.ReactNode;
    disabled?: boolean;
  };
  isSelected: boolean;
  isFocused: boolean;
  onClick: (value: string | number) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  option,
  isSelected,
  isFocused,
  onClick,
}) => {
  const handleClick = () => {
    if (!option.disabled) {
      onClick(option.value);
    }
  };

  return (
    <StyledOption
      $isSelected={isSelected}
      $isDisabled={option.disabled}
      $isFocused={isFocused}
      onClick={handleClick}
      role="option"
      aria-selected={isSelected}
      aria-disabled={option.disabled}
      tabIndex={option.disabled ? -1 : 0}
    >
      <span>{option.label}</span>
      {isSelected && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      )}
    </StyledOption>
  );
};
