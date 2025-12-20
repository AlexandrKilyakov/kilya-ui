import { css } from "styled-components";
import { theme } from "../../../styles";

const sliderThumb = css`
  width: ${theme.range.sizes.thumb};
  height: ${theme.range.sizes.thumb};
  margin-top: var(--margin-top-thumb);
  border: none;
  border-radius: ${theme.range.radius};
  background-color: ${theme.colors.bgPrimary};
  cursor: pointer;
  transition: 0.2s;
`;

const sliderRunnableTrack = css`
  box-sizing: border-box;
  background-color: ${theme.colors.bgDefault};
  height: ${theme.range.sizes.track};
  border: none;
`;

const hoverSliderTumb = css`
  --border-image-source: ${theme.range.colors.borderImageSource.hover};
`;

const pressedSliderTumb = css`
  --border-image-source: ${theme.range.colors.borderImageSource.pressed};
`;

const disabledSliderTumb = css`
  box-shadow: 0 0 0 1.875rem inset ${theme.colors.disabled.brDefault};
`;

const focusSliderTumb = css`
  outline: 0.1875rem solid ${theme.colors.focused.bgPrimary};
  outline-offset: ${theme.range.sizes.track};
`;

const rangeInputStyles = css`
  --border-image-source: ${theme.range.colors.borderImageSource.default};
  --margin-top-thumb: calc(
    ${theme.range.sizes.thumb} / -2 + (${theme.range.sizes.track} / 2)
  );
  accent-color: ${theme.colors.bgPrimary};
  appearance: none;
  height: ${theme.range.sizes.thumb};
  overflow-x: clip;
  background-color: transparent;
  width: 100%;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    ${sliderRunnableTrack}
  }
  &::-moz-range-track {
    ${sliderRunnableTrack}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${sliderThumb}
  }
  &::-moz-range-thumb {
    -moz-appearance: none;
    ${sliderThumb}
  }

  /* Focus состояния */
  &:focus-visible {
    outline: none;

    &::-webkit-slider-thumb {
      ${focusSliderTumb}
    }
    &::-moz-range-thumb {
      ${focusSliderTumb}
    }
  }

  /* Hover состояния */
  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    &::-webkit-slider-thumb {
      ${hoverSliderTumb}
    }
    &::-moz-range-thumb {
      ${hoverSliderTumb}
    }
  }

  /* Active состояния */
  &:active:not(:disabled) {
    &::-webkit-slider-thumb {
      ${pressedSliderTumb}
    }
    &::-moz-range-thumb {
      ${pressedSliderTumb}
    }
  }

  /* Прогресс для Firefox */
  &::-moz-range-progress {
    background-color: var(--border-image-source);
    height: ${theme.range.sizes.track};
  }

  &::-webkit-slider-thumb {
    background-color: var(--border-image-source);
    border-image-outset: 0 100vw;
    border-image-repeat: stretch;
    border-image-slice: 0 1;
    border-image-source: linear-gradient(
      90deg,
      var(--border-image-source) 50%,
      transparent 0
    );
    border-image-width: calc(50% - ${theme.range.sizes.line}) 50%;
  }

  /* Disabled состояния */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;

    &::-webkit-slider-thumb {
      cursor: not-allowed;
      ${disabledSliderTumb}
    }

    &::-moz-range-thumb {
      cursor: not-allowed;
      ${disabledSliderTumb}
    }
  }
`;

export default rangeInputStyles;
