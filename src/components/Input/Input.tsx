import { type FC } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import type { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  type,
  className,
  name,
  id,
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
      className={cn(styles[`input-${type}`], className)}
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
