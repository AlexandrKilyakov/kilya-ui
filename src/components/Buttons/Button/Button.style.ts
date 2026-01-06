// Button.style.ts
import styled, { css } from "styled-components";
import type { StyledButtonProps } from "./types";
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
export const buttonLinkStyles = css`
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

export const buttonResetStyles = css<StyledButtonProps>`
  ${buttonBase}
  --button-padding: 0;
  --button-min-width: auto;
  --button-min-height: auto;
`;

// Основной стилизованный компонент
export const ButtonStyled = styled.button<StyledButtonProps>`
  ${({ $format = "default" }) => {
    switch ($format) {
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
