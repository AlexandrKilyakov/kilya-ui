import { css } from "styled-components";
import { theme } from "../../../styles";
import { ava, hoverMixin } from "../../../styles/helpers/mixins";

const checkableInputStyles = css`
  -webkit-appearance: none;
  appearance: none;
  ${ava("1rem")}
  border: 0.0625rem solid ${theme.colors.bgPrimary};
  border-radius: ${theme.radius.checkbox};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${theme.colors.bgWhite};
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin: 0;
  cursor: pointer;

  &[type="radio"] {
    border-radius: var(--ava);
  }

  &:checked {
    background-color: ${theme.colors.bgPrimary};
    border-color: ${theme.colors.bgPrimary};

    &[type="checkbox"] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    }

    &[type="radio"] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    }
  }

  ${hoverMixin(css`
    border-color: ${theme.colors.hover.bgPrimary};

    &:checked {
      background-color: ${theme.colors.hover.bgPrimary};
    }
  `)}

  &:focus-visible {
    outline: none;
    border-color: ${theme.colors.hover.bgPrimary};
    box-shadow: ${theme.shadow.checkmark};
  }

  &:disabled {
    filter: none;
    opacity: 0.5;
    cursor: not-allowed;

    ~ p {
      opacity: 0.5;
    }
  }

  body & ~ p {
    margin-top: -0.1875em;
  }
`;

export default checkableInputStyles;
