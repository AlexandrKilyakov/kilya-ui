import styled, { css } from "styled-components";
import type { InputType } from "../Input/types";
import { theme } from "../../styles";

interface StyledLabelProps {
  $type: InputType;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  gap: ${theme.input.sizes.label.gap};
  user-select: none;
  margin-bottom: 1.25rem;

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
