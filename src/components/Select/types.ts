import type { HTMLAttributes, ReactNode } from "react";

export interface SelectOption {
  value: string | number;
  label: ReactNode;
}

// Исправленный тип для normalized options
export type NormalizedSelectOption = {
  value: string | number;
  label: ReactNode;
};

export type SelectOptions =
  | SelectOption[]
  | Record<string, string>
  | (string | number)[];

export type SelectValue = string | number;
export type SelectMultipleValue = SelectValue[];

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: SelectValue | SelectMultipleValue;
  onChange?: (value: SelectValue | SelectMultipleValue) => void;
  options?: SelectOptions;
  image?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  direction?: "auto" | "top" | "bottom";
  maxHeight?: string | number;
  showArrow?: boolean;
  customArrow?: ReactNode;
  multiple?: boolean;
}

export interface DropdownDirection {
  direction: "top" | "bottom";
  estimatedHeight: number;
}

export interface AnimatedDropdownState {
  isActive: boolean;
  isVisible: boolean;
  isAnimating: boolean;
}
