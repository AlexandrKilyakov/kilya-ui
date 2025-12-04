import "./ButtonClose.scss";
import { type FC } from "react";
import type { ButtonCloseProps } from "./types";
import { baseClass } from "../../../utils/classNames";

const ButtonClose: FC<ButtonCloseProps> = ({
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={baseClass("button-close", className)}
      disabled={disabled}
      {...props}
    >
      Close
      <svg viewBox="0 0 24 25">
        <path d="M6.34314 18.1567L17.6568 6.84303"></path>
        <path d="M17.6569 18.1567L6.34315 6.84303"></path>
      </svg>
    </button>
  );
};

export default ButtonClose;
