import { css } from "styled-components";
import { theme } from "../../../styles";

const textInputStyles = css`
  font-family: ${theme.input.typography.fontFamily};
  font-size: ${theme.input.typography.fontSize};
  font-weight: ${theme.input.typography.fontWeight};
  color: ${theme.input.colors.text};
  background-color: ${theme.input.colors.backgroundColor};
  border: 0.0625rem solid ${theme.input.colors.borderColor};
  border-radius: ${theme.input.radius};
  padding: ${theme.input.padding};
  transition: 0.2s border-color, 0.2s background-color, 0.2s color;

  &:focus-visible {
    outline: none;
    border-color: ${theme.input.colors.focus.borderColor};
  }

  @media (hover: hover) {
    &:hover:not(:focus, :focus-visible, :disabled) {
      border-color: ${theme.input.colors.hover.borderColor};
    }
  }

  @media (hover: none) {
    &:active:not(:focus, :focus-visible, :disabled) {
      border-color: ${theme.input.colors.hover.borderColor};
    }
  }
`;

export default textInputStyles;
