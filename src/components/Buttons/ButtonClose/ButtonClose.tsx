// ButtonClose.tsx
import { type FC } from "react";
import type { ButtonCloseProps } from "./types";
import StyledButton from "./ButtonClose.style";

const ButtonClose: FC<ButtonCloseProps> = ({
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      className={className}
      disabled={disabled}
      aria-label="Close"
      {...props}
    >
      <span style={{ display: "none" }}>Close</span>
      <svg viewBox="0 0 24 25">
        <path d="M6.34314 18.1567L17.6568 6.84303"></path>
        <path d="M17.6569 18.1567L6.34315 6.84303"></path>
      </svg>
    </StyledButton>
  );
};

export default ButtonClose;
