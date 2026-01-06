import cn from "classnames";
import RangeNumberStyle from "../RangeNumber/RangeNumber.style";
import RangeStepsStyle from "./RangeSteps.style";
import type { RangeNumberProps } from "../../types";

const RangeSteps = ({
  steps = [],
  value = 0,
  callback = () => {},
}: RangeNumberProps) => (
  <RangeStepsStyle>
    {steps.map((step, index) => (
      <RangeNumberStyle
        key={index}
        onClick={() => callback(index)}
        onKeyDown={(e) => e.key === "Enter" && callback(index)}
        className={cn({ currentStep: value === index })}
      >
        {step.name}
      </RangeNumberStyle>
    ))}
  </RangeStepsStyle>
);

export default RangeSteps;
