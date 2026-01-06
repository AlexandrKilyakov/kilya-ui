import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonFormat =
  | "default"
  | "outlined"
  | "ghost"
  | "text"
  | "link"
  | "white"
  | "close"
  | "reset";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  format?: ButtonFormat;
}

export interface StyledButtonProps {
  $format?: ButtonFormat;
}
