import React, { forwardRef } from "react";
import { SelectDropdown as StyledDropdown } from "../Select.style";

interface SelectDropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  direction: "top" | "bottom";
  isActive: boolean;
  isAnimating: boolean;
  maxHeight?: string;
  children: React.ReactNode;
}

export const SelectDropdown = forwardRef<HTMLUListElement, SelectDropdownProps>(
  (
    { direction, isActive, isAnimating, maxHeight, children, ...props },
    ref
  ) => {
    return (
      <StyledDropdown
        ref={ref}
        $direction={direction}
        $isActive={isActive}
        $isAnimating={isAnimating}
        $maxHeight={maxHeight}
        {...props}
      >
        {children}
      </StyledDropdown>
    );
  }
);

SelectDropdown.displayName = "SelectDropdown";
