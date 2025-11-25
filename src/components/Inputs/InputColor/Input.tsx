import { type FC } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps {
  className: string;
  disabled?: boolean;
  type: InputType;
}

const Input: FC<InputProps> = ({
  disabled = false,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      className={cn(styles["input"], className)}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
