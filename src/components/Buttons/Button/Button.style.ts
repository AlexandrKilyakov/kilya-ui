// Button.style.ts
import styled, { css } from "styled-components";
import type { ButtonProps } from "./types";
import {
  buttonReset,
  buttonFont,
  buttonCustom,
  buttonDefault,
} from "../../../styles/helpers/buttonMixins";
import { hoverMixin } from "../../../styles/helpers/mixins";
import { theme } from "../../../styles";

// Создаем базовый стилизованный компонент
const StyledButton = styled.button<ButtonProps>`
  ${buttonReset}
  ${buttonFont}
  
  // Общие стили для всех кнопок
  border-radius: ${theme.radius.button.brSmall};
  padding: ${theme.padding.button};
`;

// Стили для конкретных типов кнопок
export const buttonBorderStyles = css<ButtonProps>`
  ${buttonCustom}
  --background-color: transparent;
  --color: ${theme.colors.text};
  --border-color: ${theme.colors.bgPrimary};
  --border-radius: ${theme.radius.button.brSmall};
  --hover-background-color: ${theme.colors.hover.bgPrimary};
  --hover-color: ${theme.colors.white};
  --hover-border-color: ${theme.colors.hover.bgPrimary};
  --pressed-background-color: ${theme.colors.pressed.bgPrimary};
  --pressed-color: ${theme.colors.white};
  --pressed-border-color: ${theme.colors.pressed.bgPrimary};
`;

export const buttonDefaultStyles = css<ButtonProps>`
  ${buttonDefault}
`;

export const buttonLinkStyles = css<ButtonProps>`
  color: var(--color, ${theme.colors.link});
  border: none;
  border-radius: 0;
  padding: 0;

  ${hoverMixin(css`
    color: var(--hover-color, ${theme.colors.hover.link});
  `)}

  &:active:not(:disabled) {
    color: var(--pressed-color, ${theme.colors.pressed.link});
  }
`;

export const buttonResetStyles = css<ButtonProps>`
  ${buttonReset}
`;

export const buttonWhiteStyles = css<ButtonProps>`
  ${buttonCustom}
  --background-color: ${theme.colors.bgWhite};
  --color: ${theme.colors.text};
  --border-color: ${theme.colors.bgWhite};
  --border-radius: ${theme.radius.button.brSmall};
  --hover-background-color: ${theme.colors.hover.bgPrimary};
  --hover-color: ${theme.colors.white};
  --hover-border-color: ${theme.colors.hover.bgPrimary};
  --pressed-background-color: ${theme.colors.pressed.bgPrimary};
  --pressed-color: ${theme.colors.white};
  --pressed-border-color: ${theme.colors.pressed.bgPrimary};
`;

// Создаем компонент с динамическими стилями
export const ButtonStyled = styled(StyledButton)<ButtonProps>`
  ${({ button }) => {
    switch (button) {
      case "border":
        return buttonBorderStyles;
      case "link":
        return buttonLinkStyles;
      case "white":
        return buttonWhiteStyles;
      case "reset":
        return buttonResetStyles;
      case "default":
      default:
        return buttonDefaultStyles;
    }
  }}
`;
