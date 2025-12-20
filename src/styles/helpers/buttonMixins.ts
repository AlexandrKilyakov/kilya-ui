import { css } from "styled-components";
import { hoverMixin, svgCurrent, fitContain } from "./mixins";

import { theme } from "../theme";

export const buttonReset = css`
  font-style: normal;
  line-height: 1.5;
  width: fit-content;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  padding: 0;
  cursor: pointer;
  user-select: none;
  transition: 0.2s color, 0.2s background-color, 0.2s border-color;

  ${svgCurrent}

  svg {
    ${fitContain}
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    background-color: ${theme.colors.disabled.bgPrimary};
    color: ${theme.colors.disabled.white};
    border-color: ${theme.colors.disabled.brDefault};
    pointer-events: none;
  }
`;

export const buttonFont = css`
  font-family: ${theme.typography.button.fontFamily};
  font-size: ${theme.typography.button.fontSize};
  font-weight: ${theme.typography.button.fontWeight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

export const buttonCustom = css`
  ${buttonFont}
  ${buttonReset}
  background-color: var(--background-color, ${theme.colors.bgPrimary});
  color: var(--color, ${theme.colors.white});
  border-color: var(--border-color, ${theme.colors.bgPrimary});
  border-radius: var(--border-radius, ${theme.radius.button.brSmall});
  padding: 0.5rem 1rem;

  ${hoverMixin(css`
    background-color: var(
      --hover-background-color,
      ${theme.colors.hover.bgPrimary}
    );
    color: var(--hover-color, ${theme.colors.white});
    border-color: var(--hover-border-color, ${theme.colors.hover.bgPrimary});
  `)}

  &:active:not(:disabled) {
    background-color: var(
      --pressed-background-color,
      ${theme.colors.pressed.bgPrimary}
    );
    color: var(--pressed-color, ${theme.colors.white});
    border-color: var(
      --pressed-border-color,
      ${theme.colors.pressed.bgPrimary}
    );
  }
`;

export const buttonDefault = css`
  ${buttonReset}
  ${buttonCustom}
  --background-color: ${theme.colors.bgPrimary};
  --color: ${theme.colors.white};
  --border-color: ${theme.colors.bgPrimary};
  --border-radius: ${theme.radius.button.brSmall};
  --hover-background-color: ${theme.colors.hover.bgPrimary};
  --hover-color: ${theme.colors.white};
  --hover-border-color: ${theme.colors.hover.bgPrimary};
  --pressed-background-color: ${theme.colors.pressed.bgPrimary};
  --pressed-color: ${theme.colors.white};
  --pressed-border-color: ${theme.colors.pressed.bgPrimary};
`;
