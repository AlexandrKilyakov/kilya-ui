export interface RangeProps {
  product: {
    min: number;
    max: number;
    title: string;
    calculation?: string;
  };

  step?: number;

  value?: number;

  onChange: (value: number) => void;

  className?: string;
}

export interface RangeStepsProps {
  steps?: Array<{
    id: string | number;
    name: string;
    value?: number;
  }>;
  stepValue?: string | number;
  mode?: "range" | "steps";
  onChange?: (value: string | number) => void;
}

export type ExtendedRangeProps = RangeProps & RangeStepsProps;
