import type { ReactNode } from "react";

export interface RangeBodyProps {
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  callback?: (value: number) => void;
  children: ReactNode;
}
