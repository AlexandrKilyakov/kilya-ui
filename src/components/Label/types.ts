import type { InputType } from "../Input/types";

export interface LabelProps {
  title?: string;
  htmlFor?: string;
  type?: InputType;
  children: React.ReactNode;
  className?: string;
}
