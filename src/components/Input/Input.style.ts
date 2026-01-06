import styled, { css } from "styled-components";
import type { InputType } from "./types";
import { buttonDefault } from "../../styles/helpers/buttonMixins";
import { theme } from "../../styles";
import checkableInputStyles from "./styles/checkableInputStyles";
import textInputStyles from "./styles/textInputStyles";
import numberInputStyles from "./styles/numberInputStyles";
import rangeInputStyles from "./styles/rangeInputStyles";

/* ===== styled-only props ===== */
interface StyledInputProps {
  type: InputType;
}

interface StyledLabelProps {
  $type: InputType;
}

/* ===== styles ===== */

const buttonInputStyles = css`
  ${buttonDefault}
  display: inline-block;
`;

const colorInputStyles = css`
  width: ${theme.input.sizes.color.width};
  height: ${theme.input.sizes.color.height};
  padding: ${theme.input.sizes.color.padding};
  border: 0.0625rem solid ${theme.colors.brDefault};
  border-radius: ${theme.input.sizes.color.borderRadius};
  cursor: pointer;
`;

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

const hiddenInputStyles = css`
  display: none;
`;

/* ===== helpers ===== */

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

    default:
      return textInputStyles;
  }
};

/* ===== components ===== */

export const StyledInput = styled.input<StyledInputProps>`
  font-family: inherit;
  line-height: inherit;
  margin: 0;
  box-sizing: border-box;

  width: auto;
  max-width: 100%;

  ${({ type }) => getInputStyles(type)}
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  gap: ${theme.input.sizes.label.gap};
  user-select: none;

  ${({ $type }) =>
    $type === "checkbox" || $type === "radio"
      ? css``
      : css`
          flex-direction: column;

          p {
            order: -1;
          }
        `}

  p {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.label.fontSize};
    font-weight: ${theme.typography.label.fontWeight};
    margin: 0;
  }
`;
