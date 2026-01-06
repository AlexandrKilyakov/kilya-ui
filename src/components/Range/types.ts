export interface RangeProps {
  product: {
    min: number;
    max: number;
    title: string;
    calculation?: string;
  };
  title?: string;
  step?: number;
  value?: number;
  onInput?: (newValue: number) => void;
  className?: string;
}

export interface RangeStepsProps {
  steps?: Array<{
    value: string | number;
    name: string;
  }>;
}

export type ExtendedRangeProps = RangeProps & RangeStepsProps;

/* ------------------------------------------------------------------ */

export interface RangeHeaderProps {
  title?: string;
  calculation?: string;
  children?: React.ReactNode;
}

export interface RangeBodyProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  callback?: (value: number) => void;
  children?: React.ReactNode;
}

export interface RangeNumberProps {
  min?: number;
  max?: number;
  value?: number;
  steps?: Array<{ value: string | number; name: string }>;
  callback?: (value: number) => void;
}
