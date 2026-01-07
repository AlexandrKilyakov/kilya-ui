import { type FC } from "react";
import type { LabelProps } from "./types";
import { StyledLabel } from "./Label.style";

const Label: FC<LabelProps> = ({
  title = "",
  htmlFor = "",
  type = "text",
  children,
  className = "",
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} $type={type} className={className}>
      {children}
      <p>{title}</p>
    </StyledLabel>
  );
};

export default Label;
