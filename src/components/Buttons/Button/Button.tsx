import React, { type FC } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
  type: "submit" | "reset" | "button";
  button: "default" | "border" | "white" | "reset";
}

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
