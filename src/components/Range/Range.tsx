import { useState, useEffect } from "react";
import type { ExtendedRangeProps } from "./types";
import Amount from "../Amount/Amount";
import RangeContainer from "./Range.style";
import RangeBody from "./components/RangeBody/RangeBody";
import RangeNumber from "./components/RangeNumber/RangeNumber";
import RangeHeader from "./components/RangeHeader/RangeHeader";
import RangeSteps from "./components/RangeSteps/RangeSteps";

function Range({
  product,
  steps,
  title = "Value",
  step = 1,
  value: initialValue,
  onChange = () => {},
  className,
  ...props
}: ExtendedRangeProps & React.HTMLAttributes<HTMLDivElement>) {
  title = product?.title || title;
  const isRange = !steps?.length;
  const { min, max } = isRange
    ? product
    : { min: 0, max: Number(steps?.length) - 1 };
  const initial = initialValue || min;
  const [value, setValue] = useState<number>(initial);
  const [calculation, setCalculation] = useState<string>(
    product?.calculation || steps?.[0].name || ""
  );

  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const handleProduct = (newValue: number) => {
    if (!isRange) setCalculation(steps[Number(newValue)].name);

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <RangeContainer className={className} {...props}>
      <RangeHeader title={title} calculation={calculation}>
        {isRange && (
          <Amount
            value={Math.max(min, +value)}
            onChange={handleProduct}
            min={min}
            max={max}
            step={step}
            center={false}
          />
        )}
      </RangeHeader>

      <RangeBody
        value={value}
        step={step}
        min={min}
        max={max}
        callback={handleProduct}
      >
        {isRange && (
          <RangeNumber min={min} max={max} callback={handleProduct} />
        )}
        {!isRange && (
          <RangeSteps value={value} steps={steps} callback={handleProduct} />
        )}
      </RangeBody>
    </RangeContainer>
  );
}

export default Range;
