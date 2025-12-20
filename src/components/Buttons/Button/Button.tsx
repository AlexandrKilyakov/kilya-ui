// Button.tsx
import { type FC } from "react";
import type { ButtonProps } from "./types";
import { ButtonStyled } from "./Button.style";

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  type = "button",
  button = "default",
  className = "",
  ...props
}) => {
  return (
    <ButtonStyled
      type={type}
      disabled={disabled}
      button={button}
      className={className}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
