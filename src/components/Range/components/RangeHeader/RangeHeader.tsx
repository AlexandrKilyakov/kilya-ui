import type { FC } from "react";
import { Header, Title, Calculation } from "./RangeHeader.style";
import type { RangeHeaderProps } from "../../types";

const RangeHeader: FC<RangeHeaderProps> = ({
  title = "Value",
  calculation = "",
  children,
}) => (
  <Header>
    <Title>{title}</Title>
    {calculation && <Calculation>{calculation}</Calculation>}
    {children}
  </Header>
);

export default RangeHeader;
