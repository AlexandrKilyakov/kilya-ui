export interface AmountProps {
  value: number;
  onChange?: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
  center?: boolean;
  className?: string;
}
