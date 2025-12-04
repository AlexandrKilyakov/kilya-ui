import "./Input.scss";
import { type FC } from "react";
import type { InputProps } from "./types";
import { baseClass } from "../../utils/classNames";

export const Input: FC<InputProps> = ({
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
    <input
      type={type}
      className={baseClass(`input-${type}`, className)}
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
