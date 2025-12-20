import type { ButtonCloseProps } from "./types";
import styled, { css } from "styled-components";
import { buttonReset } from "../../../styles/helpers/buttonMixins";
import { hoverMixin, ava } from "../../../styles/helpers/mixins";
import { theme } from "../../../styles";

const StyledButton = styled.button<ButtonCloseProps>`
  ${buttonReset}
  ${ava("1.875rem")}
  
  font-size: 0;
  position: relative;
  border-radius: 0.25rem;
  color: ${(props) => {
    if (props.disabled) {
      return theme.colors.disabled.text;
    }
    return props.color || theme.colors.button.colorClose;
  }};

  ${hoverMixin(css<ButtonCloseProps>`
    color: ${(props) => {
      if (props.disabled) {
        return theme.colors.disabled.text;
      }
      return props.hoverColor || theme.colors.button.hoverColorClose;
    }};
  `)}

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

  path {
    stroke: currentColor;
    stroke-width: 0.125rem;
  }
`;

export default StyledButton;
