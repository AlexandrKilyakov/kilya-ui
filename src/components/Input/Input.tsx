// Input.tsx
import { type FC } from "react";
import type { InputProps } from "./types";
import StyledInput from "./Input.style";

const Input: FC<InputProps> = ({
  id,
  type,
  name,
  className,
  disabled,
  required,
  readOnly,
  onBlur,
  onFocus,
  onClick,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      className={className}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={onClick}
      {...rest} // <- сюда попадут корректные типо-специфичные пропсы
    />
  );
};

export default Input;
