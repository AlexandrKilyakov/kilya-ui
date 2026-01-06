// Button.tsx
import { type FC } from "react";
import type { ButtonProps } from "./types";
import { ButtonStyled } from "./Button.style";

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  format = "default",
  ...props
}) => {
  return (
    <ButtonStyled type={type} $format={format} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
