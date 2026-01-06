import styled from "styled-components";
import { theme } from "../../../../styles";

const RangeNumberStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.text};
  transition: color 0.2s ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    color: ${theme.colors.hover.bgPrimary};
  }
  &:active {
    color: ${theme.colors.pressed.bgPrimary};
  }
  &:focus-visible {
    outline: 0.125rem solid ${theme.colors.focused.bgPrimary};
    outline-offset: 0.125rem;
  }
`;

export default RangeNumberStyle;
