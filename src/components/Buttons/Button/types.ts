// types.ts
import type { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  button?:
    | "default"
    | "outlined"
    | "ghost"
    | "text"
    | "link"
    | "white"
    | "close"
    | "reset";
}
