import { css } from "styled-components";
import { theme } from "../../../styles";

const textInputStyles = css`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  font-weight: ${theme.typography.label.fontWeight};
  color: ${theme.colors.inputText};
  background-color: ${theme.colors.inputBg};
  border: 0.0625rem solid ${theme.colors.inputBorder};
  border-radius: ${theme.radius.input};
  padding: ${theme.padding.input};
  transition: 0.2s border-color, 0.2s background-color, 0.2s color;

  &:focus-visible {
    outline: none;
    border-color: ${theme.colors.bgPrimary};
  }

  @media (hover: hover) {
    &:hover:not(:focus, :focus-visible, :disabled) {
      border-color: ${theme.colors.bgPrimary};
    }
  }

  @media (hover: none) {
    &:active:not(:focus, :focus-visible, :disabled) {
      border-color: ${theme.colors.bgPrimary};
    }
  }
`;

export default textInputStyles;
