import styled, { css } from "styled-components";
import { theme } from "../../styles";
import { hoverMixin } from "../../styles/helpers/mixins";

const AmountContainer = styled.div<{ $center?: boolean }>`
  display: flex;
  gap: 0.25rem;
  width: fit-content;
  align-items: center;

  ${({ $center }) =>
    !$center &&
    css`
      flex-direction: row-reverse;

      input {
        order: 1;
      }
    `}

  input {
    font-family: ${theme.amount.typography.fontFamily};
    font-size: ${theme.amount.typography.fontSize};
    font-weight: ${theme.amount.typography.fontWeight};
    line-height: ${theme.amount.typography.lineHeight};
    min-width: ${theme.amount.input.minWidth};
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
  }

  button {
    max-width: ${theme.amount.button.maxWidth};
    min-width: ${theme.amount.button.minWidth};
    width: ${theme.amount.button.width};
    padding: ${theme.amount.button.padding};
    background-color: ${theme.amount.button.backgroundColor};
    color: ${theme.amount.button.color};
    border-color: ${theme.amount.button.borderColor};

    ${hoverMixin(css`
      background-color: ${theme.amount.button.hover.backgroundColor};
      color: ${theme.amount.button.hover.color};
      border-color: ${theme.amount.button.hover.borderColor};
    `)}
  }
`;

export { AmountContainer };
