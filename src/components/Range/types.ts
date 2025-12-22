export interface RangeProps {
  product: {
    min: number;
    max: number;
    title: string;
    calculation?: string;
  };
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export interface RangeStepsProps {
  title?: string;
  steps?: Array<{
    value: string | number;
    name: string;
  }>;
}

export type ExtendedRangeProps = RangeProps & RangeStepsProps;
