import { useState, useEffect, type FC, useCallback } from "react";
import type { ExtendedRangeProps } from "./types";
import Amount from "../Amount/Amount";
import RangeContainer from "./Range.style";
import RangeBody from "./components/RangeBody/RangeBody";
import RangeNumber from "./components/RangeNumber/RangeNumber";
import RangeHeader from "./components/RangeHeader/RangeHeader";
import RangeSteps from "./components/RangeSteps/RangeSteps";

const Range: FC<ExtendedRangeProps & React.HTMLAttributes<HTMLDivElement>> = ({
  product,
  steps,
  title: defaultTitle = "Value",
  step = 1,
  value: initialValue,
  onInput = () => {},
  className,
  ...props
}) => {
  const title = product?.title || defaultTitle;
  const isRange = !steps?.length;
  const { min, max } = isRange ? product : { min: 0, max: steps.length - 1 };

  const clampToStep = useCallback(
    (val: number) => {
      const clamped = Math.min(Math.max(val, min), max); // ограничение min/max
      const stepped = Math.round((clamped - min) / step) * step + min; // привязка к шагу
      return Number(stepped.toFixed(2)); // округление до 2х знаков
    },
    [min, max, step]
  );

  const [value, setValue] = useState<number>(clampToStep(initialValue ?? min));
  const [calculation, setCalculation] = useState<string>(
    product?.calculation ?? steps?.[0]?.name ?? ""
  );

  useEffect(() => {
    if (initialValue !== undefined) setValue(clampToStep(initialValue));
  }, [initialValue, clampToStep]);

  const handleValueChange = useCallback(
    (newValue: number) => {
      const finalValue = clampToStep(newValue);
      setValue(finalValue);

      if (!isRange && steps) {
        setCalculation(steps[finalValue].name);
      }

      onInput(finalValue);
    },
    [clampToStep, isRange, steps, onInput]
  );

  return (
    <RangeContainer className={className} {...props}>
      <RangeHeader title={title} calculation={calculation}>
        {isRange && (
          <Amount
            value={value}
            onInput={handleValueChange}
            min={min}
            max={max}
            step={step}
          />
        )}
      </RangeHeader>

      <RangeBody
        value={value}
        min={min}
        max={max}
        step={step}
        callback={handleValueChange}
      >
        {isRange && (
          <RangeNumber min={min} max={max} callback={handleValueChange} />
        )}
        {!isRange && steps && (
          <RangeSteps
            value={value}
            steps={steps}
            callback={handleValueChange}
          />
        )}
      </RangeBody>
    </RangeContainer>
  );
};

export default Range;
