export interface AmountProps {
  value: number;
  onInput?: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
  center?: boolean;
  className?: string;
  label?: string;
}
