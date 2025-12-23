// Button.style.ts
import styled, { css } from "styled-components";
import type { ButtonProps } from "./types";
import {
  buttonBase,
  buttonDefault,
  buttonOutlined,
  buttonGhost,
  buttonText,
  buttonWhite,
} from "../../../styles/helpers/buttonMixins";
import { theme } from "../../../styles";

// Специальные миксины для link и close кнопок
export const buttonLinkStyles = css<ButtonProps>`
  ${buttonBase}
  --button-color: ${theme.button.link.color};
  --button-hover-color: ${theme.button.link.hover.color};
  --button-pressed-color: ${theme.button.link.pressed.color};
  --button-disabled-color: ${theme.button.link.disabled.color};
  --button-border-radius: 0;
  --button-padding: 0;
  --button-min-width: auto;
  --button-min-height: auto;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const buttonResetStyles = css<ButtonProps>`
  ${buttonBase}
  --button-padding: 0;
  --button-min-width: auto;
  --button-min-height: auto;
`;

// Основной стилизованный компонент
export const ButtonStyled = styled.button<ButtonProps>`
  ${({ button = "default" }) => {
    switch (button) {
      case "default":
        return buttonDefault;
      case "outlined":
        return buttonOutlined;
      case "ghost":
        return buttonGhost;
      case "text":
        return buttonText;
      case "white":
        return buttonWhite;
      case "link":
        return buttonLinkStyles;
      case "reset":
      default:
        return buttonResetStyles;
    }
  }}
`;
