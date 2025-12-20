// Input.tsx
import { type FC } from "react";
import type { InputProps } from "./types";
import { StyledInput, StyledLabel } from "./Input.style";

const Input: FC<InputProps> = ({ id, type = "text", label, ...props }) => {
  const Component = () => <StyledInput id={id} type={type} {...props} />;

  if (label) {
    return (
      <StyledLabel $type={type}>
        <Component />
        <text>{label}</text>
      </StyledLabel>
    );
  }

  return <Component />;
};

export default Input;
