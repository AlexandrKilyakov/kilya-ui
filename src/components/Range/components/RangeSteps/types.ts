export interface RangeNumberProps {
  value?: number;
  steps: Array<{
    value: string | number;
    name: string;
  }>;
  callback?: (value: number) => void;
}
