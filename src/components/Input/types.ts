import React from "react";

export type InputType =
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

// Базовые props, которые подходят ВСЕМ типам input
export interface BaseInputProps {
  id?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;

  // Базовые события
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

// Props для input с текстовым значением
export interface InputTextProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

// Props для input с числовым значением
export interface InputNumberProps {
  value?: number | string;
  defaultValue?: number | string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

// Props для checkbox/radio
export interface InputCheckableProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Props для file input (особый случай)
export interface InputFileProps {
  accept?: string;
  multiple?: boolean;
  capture?: boolean | "user" | "environment";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Props для date inputs
export interface InputDateProps {
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Props для image input
export interface InputImageProps {
  alt?: string;
  src?: string;
  width?: number | string;
  height?: number | string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

// Props для button inputs
export interface InputButtonProps {
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export type InputProps = BaseInputProps & {
  type: InputType;
} & ( // Button types
    | ({ type: "button" | "reset" | "submit" } & InputButtonProps)

    // Checkbox
    | ({ type: "checkbox" } & InputCheckableProps)

    // Radio
    | ({ type: "radio" } & InputCheckableProps)

    // File
    | ({ type: "file" } & InputFileProps)

    // Number inputs
    | ({ type: "number" | "range" } & InputNumberProps)

    // Text-based inputs
    | ({
        type: "text" | "password" | "search" | "email" | "tel" | "url";
      } & InputTextProps)

    // Date-based inputs
    | ({
        type: "date" | "datetime-local" | "time" | "week" | "month";
      } & InputDateProps)

    // Image
    | ({ type: "image" } & InputImageProps)

    // Color
    | ({ type: "color" } & {
        value?: string;
        defaultValue?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
      })

    // Hidden
    | ({ type: "hidden" } & {
        value?: string | number;
        defaultValue?: string | number;
      })
  );
