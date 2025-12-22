import type { RangeNumberProps } from "./types";
import RangeNumberStyle from "../RangeNumber/RangeNumber.style";
import RangeStepsStyle from "./RangeSteps.style";
import cn from "classnames";

function RangeSteps({
  steps,
  value = 0,
  callback = () => {},
}: RangeNumberProps) {
  return (
    <RangeStepsStyle>
      {Object.entries(steps).map(([index, product]) => (
        <RangeNumberStyle
          key={index}
          onClick={() => callback(+index)}
          onKeyDown={(e) => e.key === "Enter" && callback(+index)}
          className={cn({
            currentStep: value == +index,
          })}
        >
          {product.name}
        </RangeNumberStyle>
      ))}
    </RangeStepsStyle>
  );
}

export default RangeSteps;
