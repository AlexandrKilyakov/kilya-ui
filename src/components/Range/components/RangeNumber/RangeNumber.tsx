import { useCallback } from "react";
import RangeNumberStyle from "./RangeNumber.style";
import type { RangeNumberProps } from "../../types";

const RangeNumber = ({
  min = 0,
  max = 0,
  callback = () => {},
}: RangeNumberProps) => {
  const setMin = useCallback(() => callback(min), [callback, min]);
  const setMax = useCallback(() => callback(max), [callback, max]);

  return (
    <>
      <RangeNumberStyle
        onClick={setMin}
        onKeyDown={(e) => e.key === "Enter" && setMin()}
      >
        {min}
      </RangeNumberStyle>
      <RangeNumberStyle
        onClick={setMax}
        onKeyDown={(e) => e.key === "Enter" && setMax()}
      >
        {max}
      </RangeNumberStyle>
    </>
  );
};

export default RangeNumber;
