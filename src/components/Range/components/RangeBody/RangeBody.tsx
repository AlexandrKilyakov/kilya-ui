import type { RangeBodyProps } from "../../types";
import Input from "../../../Input";
import RangeBodyStyle from "./RangeBody.style";

const RangeBody = ({
  children,
  value,
  min,
  max,
  step = 1,
  callback = () => {},
}: RangeBodyProps) => {
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) =>
    callback(Number(e.target.value));

  return (
    <RangeBodyStyle>
      <Input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onInput={handleRange}
      />
      {children}
    </RangeBodyStyle>
  );
};

export default RangeBody;
