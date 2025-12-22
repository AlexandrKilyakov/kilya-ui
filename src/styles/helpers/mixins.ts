import { css } from "styled-components";

export const hoverMixin = (content: any) => css`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      ${content}
    }
  }

  @media (hover: none) {
    &:active:not(:disabled) {
      ${content}
    }
  }
`;

export const marginBottom = (n: string = "1rem") => css`
  &:not(:last-child) {
    margin-block-end: ${n};
  }
`;

export const marginTop = (n: string = "1rem") => css`
  &:not(:first-child) {
    margin-block-start: ${n};
  }
`;

export const marginBlock = (first: string = "1rem", last?: string) => css`
  ${marginTop(first)}
  ${marginBottom(last || first)}
`;

export const ava = (w: string = "1.5rem", h?: string) => css`
  --ava: ${w};
  max-width: var(--ava);
  min-width: var(--ava);
  width: var(--ava);
  height: ${h === w || !h ? "var(--ava)" : h};
  max-height: var(--ava);
`;

export const avaRound = (size: string = "1.5rem") => css`
  ${ava(size)}
  border-radius: var(--ava);
`;

export const svgCurrent = css`
  path,
  rect,
  circle {
    &[fill] {
      fill: currentColor;
    }

    &[stroke] {
      stroke: currentColor;
    }
  }
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const listReset = css`
  list-style: none;
  margin: 0;
  padding-inline-start: 0;
  ${marginBlock("0")}
`;

export const fitContain = css`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const fitCover = css`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
