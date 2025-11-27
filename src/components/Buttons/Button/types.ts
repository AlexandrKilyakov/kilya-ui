import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className: string;
  disabled?: boolean;
  type: "submit" | "reset" | "button";
  button: "default" | "border" | "white" | "link" | "reset";
}
