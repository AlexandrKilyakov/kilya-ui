import { useState, useEffect, useCallback, useMemo } from "react";
import PlusSvg from "./assets/PlusSvg";
import MinusSvg from "./assets/MinusSvg";
import Button from "../Buttons/Button";
import Input from "../Input";
import type { AmountProps } from "./types";
import { AmountContainer } from "./Amount.style";

const formatValue = (value: number) => value.toString().padStart(2, "0");

function Amount({
  value,
  min = 1,
  max = 100,
  step = 1,
  center = false,
  className,
  onInput,
}: AmountProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>(formatValue(value));

  /* sync from outside */
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatValue(value));
    }
  }, [value, isFocused]);

  /* dynamic width: подстраивается под длину числа, но не слишком большое */
  const inputWidth = useMemo(() => {
    const length = Math.max(displayValue.length, 2); // минимум 2 символа
    const widthCh = length + 1; // немного под запас
    return `${widthCh}ch`;
  }, [displayValue]);

  const emitValue = useCallback(
    (next: number) => {
      if (!onInput) return;
      onInput(Math.min(Math.max(next, min), max));
    },
    [onInput, min, max]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Удаляем ведущие нули только если значение не равно 0
    const numericValue = parseInt(displayValue, 10);
    if (numericValue === 0) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.replace(/^0+/, "") || "0");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    // Если поле пустое или содержит только нечисловые символы
    if (!trimmedValue || Number.isNaN(Number(trimmedValue))) {
      setDisplayValue(formatValue(value));
      setIsFocused(false);
      return;
    }

    const numericValue = Number(trimmedValue);
    const clampedValue = Math.min(Math.max(numericValue, min), max);

    emitValue(clampedValue);
    setDisplayValue(formatValue(clampedValue));
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // При нажатии Enter применяем изменения
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const increment = useCallback(() => {
    emitValue(value + step);
  }, [value, step, emitValue]);

  const decrement = useCallback(() => {
    emitValue(value - step);
  }, [value, step, emitValue]);

  return (
    <AmountContainer className={className} $center={center}>
      <Button onClick={decrement} disabled={value <= min}>
        <MinusSvg />
      </Button>

      <Input
        type="number"
        value={displayValue}
        inputMode="numeric"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        min={min}
        max={max}
        step={step}
        style={{ width: inputWidth }}
      />

      <Button onClick={increment} disabled={value >= max}>
        <PlusSvg />
      </Button>
    </AmountContainer>
  );
}

export default Amount;
