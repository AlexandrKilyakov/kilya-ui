import React, { forwardRef } from "react";
import { SelectButton, SelectContent, SelectImage } from "../Select.style";
import ArrowDefault from "../assets/ArrowDefault";

interface SelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  image?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  customArrow?: React.ReactNode;
}

export const SelectButtonComponent = forwardRef<
  HTMLButtonElement,
  SelectButtonProps
>(({ isOpen, image, children, showArrow, customArrow, ...props }, ref) => {
  return (
    <SelectButton ref={ref} $isOpen={isOpen} {...props}>
      <SelectContent>
        {image && <SelectImage src={image} alt="" />}
        {children}
      </SelectContent>
      {showArrow && (customArrow || ArrowDefault)}
    </SelectButton>
  );
});

SelectButtonComponent.displayName = "SelectButton";
