import { type FC } from "react";
import type { InputProps } from "./types";
import { StyledInput, StyledLabel } from "./Input.style";

const Input: FC<InputProps> = ({ id, type = "text", label, ...props }) => {
  const input = <StyledInput id={id} type={type} {...props} />;

  if (!label) {
    return input;
  }

  return (
    <StyledLabel $type={type} htmlFor={id}>
      {input}
      <p>{label}</p>
    </StyledLabel>
  );
};

export default Input;
