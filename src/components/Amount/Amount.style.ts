// Input.style.ts
import styled, { css } from "styled-components";
import { theme } from "../../styles";
import { ava, hoverMixin } from "../../styles/helpers/mixins";

const AmountContainer = styled.div<{ $center?: boolean }>`
  display: flex;
  width: fit-content;
  ${({ $center }) =>
    !$center &&
    css`
      flex-direction: row-reverse;

      input {
        order: 1;
      }
    `}

  input {
    font-famile: ${theme.typography.amount.fontFamily};
    font-size: ${theme.typography.amount.fontSize};
    font-weight: ${theme.typography.amount.fontWeight};
    line-height: 1.375;
    min-width: 1.75rem;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  button {
    max-width: 1.5rem;
    min-width: 1.5rem;
    width: 1.5rem;
    height: auto;
    padding: 0.125rem;
    background-color: transparent;
    color: ${theme.colors.text};
    border-color: transparent;

    ${hoverMixin(css`
      background-color: transparent;
      color: ${theme.colors.hover.bgPrimary};
      border-color: transparent;
    `)}
  }
`;

export { AmountContainer };
