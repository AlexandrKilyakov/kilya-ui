import type { RangeBodyProps } from "./types";
import Input from "../../../Input";
import RangeBodyStyle from "./RangeBody.style";

function RangeBody({
  children,
  step = 1,
  value,
  min,
  max,
  callback = () => {},
}: RangeBodyProps) {
  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = Number(event.target.value);
    callback(newValue);
  };

  return (
    <RangeBodyStyle>
      <Input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleRange}
        aria-valuenow={Number(value)}
        aria-valuemin={min}
        aria-valuemax={max}
      />
      {children}
    </RangeBodyStyle>
  );
}

export default RangeBody;
