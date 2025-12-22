import type { RangeHeaderProps } from "./types";
import { Calculation, Header, Title } from "./RangeHeader.style";

function RangeHeader({
  children,
  calculation = "",
  title = "Value",
}: RangeHeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
      {calculation && <Calculation>{calculation}</Calculation>}
      {children}
    </Header>
  );
}

export default RangeHeader;
