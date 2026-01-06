import { useState, useEffect, useCallback, useMemo } from "react";
import PlusSvg from "./assets/PlusSvg";
import MinusSvg from "./assets/MinusSvg";
import Button from "../Buttons/Button";
import Input from "../Input";
import type { AmountProps } from "./types";
import { AmountContainer } from "./Amount.style";

const formatValue = (value: number) => value.toString().padStart(2, "0");

const alignToStep = (value: number, min: number, step: number) => {
  return min + Math.round((value - min) / step) * step;
};

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

  // Исправление: Нормализуем начальное значение
  useEffect(() => {
    const normalizedValue = Math.min(Math.max(value, min), max);
    if (normalizedValue !== value && onInput) {
      onInput(normalizedValue);
    }
    setDisplayValue(formatValue(normalizedValue));
  }, []); // Только при монтировании

  // и не равно текущему отображаемому значению (когда не в фокусе)
  useEffect(() => {
    if (!isFocused) {
      // Исправление: Проверяем, отличается ли отображаемое значение от нормализованного
      const normalizedValue = Math.min(Math.max(value, min), max);
      const currentValue = parseInt(displayValue, 10);

      if (!isNaN(currentValue) && normalizedValue !== currentValue) {
        setDisplayValue(formatValue(normalizedValue));
      }
    }
  }, [value, isFocused, min, max, displayValue]);

  const inputWidth = useMemo(() => {
    const length = Math.max(
      displayValue.length,
      min.toString().length,
      max.toString().length
    );
    const widthCh = Math.min(length + 1, 7); // Ограничиваем максимальную ширину
    return `${widthCh}ch`;
  }, [displayValue, min, max]);

  const emitValue = useCallback(
    (next: number) => {
      if (!onInput) return;
      const clampedValue = Math.min(Math.max(next, min), max);
      const aligned = alignToStep(clampedValue, min, step);
      setDisplayValue(formatValue(clampedValue));
      onInput(aligned);
    },
    [onInput, min, max]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || /^-?\d*$/.test(newValue)) {
      setDisplayValue(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Удаляем ведущие нули
    const numericValue = parseInt(displayValue, 10);
    if (!isNaN(numericValue)) {
      setDisplayValue(numericValue.toString());
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const raw = e.target.value.trim();

    let nextValue: number;

    if (raw === "" || raw === "-" || Number.isNaN(Number(raw))) {
      nextValue = min;
    } else {
      nextValue = parseInt(raw, 10);
    }

    const clampedValue = Math.min(Math.max(nextValue, min), max);

    setDisplayValue(formatValue(clampedValue));
    emitValue(clampedValue);
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      emitValue(value + step);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      emitValue(value - step);
    }
  };

  const increment = useCallback(() => {
    const nextValue = value + step;
    if (nextValue <= max) {
      emitValue(nextValue);
    }
  }, [value, step, emitValue, max]);

  const decrement = useCallback(() => {
    const nextValue = value - step;
    if (nextValue >= min) {
      emitValue(nextValue);
    }
  }, [value, step, emitValue, min]);

  return (
    <AmountContainer className={className} $center={center}>
      <Button
        onClick={decrement}
        disabled={value <= min}
        aria-label="Уменьшить количество"
      >
        <MinusSvg />
      </Button>

      <Input
        type="text"
        value={displayValue}
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        style={{ width: inputWidth }}
        aria-label="Количество"
        role="spinbutton"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />

      <Button
        onClick={increment}
        disabled={value >= max}
        aria-label="Увеличить количество"
      >
        <PlusSvg />
      </Button>
    </AmountContainer>
  );
}

export default Amount;
