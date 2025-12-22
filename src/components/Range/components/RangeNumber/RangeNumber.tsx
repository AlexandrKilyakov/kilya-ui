import type { RangeNumberProps } from "./types";
import RangeNumberStyle from "./RangeNumber.style";
import { useCallback } from "react";

function RangeNumber({
  min = 0,
  max = 0,
  callback = () => {},
}: RangeNumberProps) {
  const setToMin = useCallback(() => {
    callback(min);
  }, [callback]);

  const setToMax = useCallback(() => {
    callback(max);
  }, [callback]);

  return (
    <>
      <RangeNumberStyle
        onClick={setToMin}
        onKeyDown={(e) => e.key === "Enter" && setToMin()}
      >
        {min}
      </RangeNumberStyle>

      <RangeNumberStyle
        onClick={setToMax}
        onKeyDown={(e) => e.key === "Enter" && setToMax()}
      >
        {max}
      </RangeNumberStyle>
    </>
  );
}

export default RangeNumber;
