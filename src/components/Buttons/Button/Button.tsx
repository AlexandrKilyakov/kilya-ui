import { type FC } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./types";

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
      className={cn(styles[`button-${button}`], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
