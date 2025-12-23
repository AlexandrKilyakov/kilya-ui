import { css } from "styled-components";
import { theme } from "../../../styles";

const sliderThumb = css`
  width: ${theme.input.range.sizes.thumb};
  height: ${theme.input.range.sizes.thumb};
  margin-top: var(--margin-top-thumb);
  border: none;
  border-radius: ${theme.input.range.radius};
  background-color: ${theme.input.range.colors.backgroundСolor.default};
  cursor: pointer;
  transition: 0.2s;
`;

const sliderRunnableTrack = css`
  box-sizing: border-box;
  background-color: ${theme.input.range.colors.backgroundСolor.track};
  height: ${theme.input.range.sizes.track};
  border: none;
`;

const hoverSliderTumb = css`
  --border-image-source: ${theme.input.range.colors.borderImageSource.hover};
`;

const pressedSliderTumb = css`
  --border-image-source: ${theme.input.range.colors.borderImageSource.pressed};
`;

const disabledSliderTumb = css`
  box-shadow: 0 0 0 1.875rem inset ${theme.input.range.colors.shadow.disabled};
`;

const focusSliderTumb = css`
  outline: 0.1875rem solid ${theme.input.range.colors.outline.focused};
  outline-offset: ${theme.input.range.sizes.track};
`;

const rangeInputStyles = css`
  --border-image-source: ${theme.input.range.colors.borderImageSource.default};
  --margin-top-thumb: calc(
    ${theme.input.range.sizes.thumb} / -2 +
      (${theme.input.range.sizes.track} / 2)
  );
  accent-color: ${theme.input.range.colors.backgroundСolor.default};
  appearance: none;
  height: ${theme.input.range.sizes.thumb};
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
    height: ${theme.input.range.sizes.track};
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
    border-image-width: calc(50% - ${theme.input.range.sizes.line}) 50%;
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
