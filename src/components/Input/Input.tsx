import { type FC } from "react";
import type { InputProps } from "./types";
import { StyledInput } from "./Input.style";
import Label from "../Label";

const Input: FC<InputProps> = ({ id, type = "text", label, ...props }) => {
  const input = <StyledInput id={id} type={type} {...props} />;

  if (!label) {
    return input;
  }

  return (
    <Label type={type} htmlFor={id} title={label}>
      {input}
    </Label>
  );
};

export default Input;
