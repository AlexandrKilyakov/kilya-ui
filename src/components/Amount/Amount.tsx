import { useState, useEffect, useCallback, useMemo } from "react";
import PlusSvg from "../../shared/icons/PlusSvg";
import MinusSvg from "../../shared/icons/MinusSvg";
import Button from "../Buttons/Button";
import Input from "../Input";
import type { AmountProps } from "./types";
import { AmountContainer } from "./Amount.style";

function Amount({
  value,
  min = 1,
  max = 100,
  step = 1,
  center = false,
  className,
  onChange,
}: AmountProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>(value.toString());

  // Рассчитываем ширину на основе максимально возможного значения
  const inputWidth = useMemo(
    () => `${(displayValue.length * 14) / 16}rem`,
    [displayValue]
  );

  const handleProduct = useCallback(
    (newValue: number) => {
      if (!onChange) return;

      onChange(newValue);
    },
    [onChange]
  );

  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(value.toString().padStart(2, "0"));
    }
  }, [value, isFocused]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDisplayValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayValue(displayValue.replace(/^0+/, "") || "0");
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    const numericValue = Number(event.target.value);

    // Проверяем, что введено число
    if (isNaN(numericValue)) {
      setDisplayValue(value.toString().padStart(2, "0"));
      setIsFocused(false);
      return;
    }

    const clampedValue = Math.min(Math.max(numericValue, min), max);
    handleProduct(clampedValue);
    setIsFocused(false);
  };

  const handleIncrement = useCallback(() => {
    const newValue = Math.min(value + step, max);
    handleProduct(newValue);
  }, [value, step, max, handleProduct]);

  const handleDecrement = useCallback(() => {
    const newValue = Math.max(value - step, min);
    handleProduct(newValue);
  }, [value, step, min, handleProduct]);

  return (
    <AmountContainer className={className} $center={center}>
      <Button onClick={handleDecrement} disabled={value <= min}>
        <MinusSvg />
      </Button>
      <Input
        type="number"
        value={displayValue}
        inputMode="decimal"
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ width: inputWidth }}
        min={min}
        max={max}
        step={step}
      />
      <Button onClick={handleIncrement} disabled={value >= max}>
        <PlusSvg />
      </Button>
    </AmountContainer>
  );
}

export default Amount;
