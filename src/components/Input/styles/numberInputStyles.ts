import { css } from "styled-components";
import textInputStyles from "./textInputStyles";

const numberInputStyles = css`
  ${textInputStyles}
  -moz-appearance: textfield;
  appearance: none;
  outline: none;
  min-width: 1.75rem;
  width: fit-content;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default numberInputStyles;
