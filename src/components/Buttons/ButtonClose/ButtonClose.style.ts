import type { ButtonCloseProps } from "./types";
import styled from "styled-components";
import { buttonBase } from "../../../styles/helpers/buttonMixins";
import { theme } from "../../../styles";

const StyledButton = styled.button<ButtonCloseProps>`
  ${buttonBase}

  // Специфичные стили для кнопки close
  width: ${theme.button.close.size};
  height: ${theme.button.close.size};
  border-radius: ${theme.button.radius};
  font-size: 0;
  position: relative;

  // Убираем дефолтные значения для close кнопки
  --button-padding: 0;
  --button-min-width: ${theme.button.close.size};
  --button-min-height: ${theme.button.close.size};
  --button-gap: 0;

  // Цвета из темы или кастомные через props
  --button-color: ${(props) => props.color || theme.button.close.color};
  --button-hover-color: ${(props) =>
    props.hoverColor || theme.button.close.hoverColor};
  --button-disabled-color: ${theme.button.close.disabledColor};

  // SVG специфичные стили
  svg {
    max-width: 100%;
    max-height: 100%;
  }

  // Псевдоэлемент для overlay
  &:before {
    content: "";
    height: 100dvh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    z-index: -1;
  }

  // Стили для SVG path
  path {
    stroke: currentColor;
    stroke-width: 0.125rem;
  }
`;

export default StyledButton;
