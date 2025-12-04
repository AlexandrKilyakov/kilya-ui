import "./Button.scss";
import { type FC } from "react";
import type { ButtonProps } from "./types";
import { baseClass } from "../../../utils/classNames";

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  type = "button",
  button = "default",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={baseClass(`button-${button}`, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
