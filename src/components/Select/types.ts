import type { HTMLAttributes, ReactNode, CSSProperties } from "react";

export interface SelectOption {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
}

export type SelectOptions =
  | SelectOption[]
  | Record<string | number, string | ReactNode>
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
  placeholder?: ReactNode;
  disabled?: boolean;
  direction?: "auto" | "top" | "bottom";
  maxHeight?: string | number;
  showArrow?: boolean;
  customArrow?: ReactNode;
  multiple?: boolean;
  searchable?: boolean;
  noOptionsMessage?: ReactNode;
  optionHeight?: number;
  style?: CSSProperties;
  name?: string;
  label?: string;
  required?: boolean;
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
