import styled, { css } from "styled-components";
import type { InputProps, InputType } from "./types";
import { buttonDefault } from "../../styles/helpers/buttonMixins";
import { theme } from "../../styles";
import checkableInputStyles from "./styles/checkableInputStyles";
import textInputStyles from "./styles/textInputStyles";
import numberInputStyles from "./styles/numberInputStyles";
import rangeInputStyles from "./styles/rangeInputStyles";

// Стили для кнопок-инпутов
const buttonInputStyles = css`
  ${buttonDefault}
  display: inline-block;
`;

// Стили для цветового пикера
const colorInputStyles = css`
  width: ${theme.input.sizes.color.width};
  height: ${theme.input.sizes.color.height};
  padding: ${theme.input.sizes.color.padding};
  border: 0.0625rem solid ${theme.colors.brDefault};
  border-radius: ${theme.input.sizes.color.borderRadius};
  cursor: pointer;
`;

// Стили для файлового инпута
const fileInputStyles = css`
  padding: ${theme.input.sizes.file.padding};
  border: 0.0625rem solid ${theme.colors.brDefault};
  border-radius: ${theme.input.sizes.file.borderRadius};
  cursor: pointer;

  &::file-selector-button {
    ${buttonDefault}
    margin-right: ${theme.input.sizes.file.buttonMargin};
  }
`;

// Стили для инпута-изображения
const imageInputStyles = css`
  padding: ${theme.input.sizes.image.padding};
  border: none;
  border-radius: ${theme.input.sizes.image.borderRadius};
  cursor: pointer;
  font-weight: ${theme.input.sizes.image.fontWeight};
  background-color: ${theme.colors.bgPrimary};
  color: ${theme.colors.white};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.hover.bgPrimary};
  }
`;

// Стили для скрытого инпута
const hiddenInputStyles = css`
  display: none;
`;

const textLabelStyles = css`
  flex-direction: column;

  p {
    order: -1;
  }
`;

const checkableLabelStyles = css``;

// Определяем стили в зависимости от типа
const getInputStyles = (type: InputType) => {
  switch (type) {
    case "button":
    case "submit":
    case "reset":
      return buttonInputStyles;

    case "checkbox":
    case "radio":
      return checkableInputStyles;

    case "color":
      return colorInputStyles;

    case "date":
    case "datetime-local":
    case "month":
    case "time":
    case "week":
      return textInputStyles;

    case "file":
      return fileInputStyles;

    case "image":
      return imageInputStyles;

    case "number":
      return numberInputStyles;

    case "range":
      return rangeInputStyles;

    case "hidden":
      return hiddenInputStyles;

    // text, password, email, search, tel, url
    default:
      return textInputStyles;
  }
};

const getLabelStyles = (type: string) => {
  switch (type) {
    case "checkbox":
    case "radio":
      return checkableLabelStyles;

    default:
      return textLabelStyles;
  }
};

// Создаем стилизованный компонент
const StyledInput = styled.input<InputProps>`
  width: auto;
  max-width: 100%;
  ${({ type }) => getInputStyles(type)}
`;

const StyledLabel = styled.label<{ $type: string }>`
  ${({ $type }) => getLabelStyles($type)}
  display: flex;
  gap: ${theme.input.sizes.label.gap};
  user-select: none;

  p {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.label.fontSize};
    font-weight: ${theme.typography.label.fontWeight};
    margin: 0;
  }
`;

export { StyledInput, StyledLabel };
