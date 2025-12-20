import { color } from "storybook/theming";

export const theme = {
  colors: {
    // Основные цвета
    bgPrimary: "var(--bg-primary, #1677ff)",
    bgDefault: "var(--bg-default, #d9d9d9)",
    bgWhite: "var(--bg-white, #fff)",
    text: "var(--color-text, #000)",
    white: "var(--color-white, #fff)",
    link: "var(--color-link, #1677ff)",
    brDefault: "var(--color-br-default, #d9d9d9)",
    inputText: "var(--color-input-text, #000)",
    inputBg: "var(--bg-input-text, #ffffff)",
    inputBorder: "var(--color-br-input-text, #a8a8a8)",

    // Hover состояния
    hover: {
      bgPrimary: "var(--hover-bg-primary, #4096ff)",
      bgDefault: "var(--hover-bg-default, #0000000f)",
      link: "var(--hover-color-link, #4096ff)",
      brDefault: "var(--hover-br-default, #0000000f)",
    },

    // Focus состояния
    focused: {
      bgPrimary: "var(--focused-bg-primary, #4096ff)",
      bgDefault: "var(--focused-bg-default, #0000000f)",
      link: "var(--focused-color-link, #4096ff)",
      brDefault: "var(--focused-br-default, #0000000f)",
    },

    // Pressed состояния
    pressed: {
      bgPrimary: "var(--pressed-bg-primary, #0958d9)",
      bgDefault: "var(--pressed-bg-default, #00000026)",
      link: "var(--pressed-color-link, #0958d9)",
      brDefault: "var(--pressed-br-default, #00000026)",
    },

    // Disabled состояния
    disabled: {
      bgPrimary: "var(--disabled-bg-primary, #ddd)",
      bgDefault: "var(--disabled-bg-default, #ddd)",
      bgWhite: "var(--disabled-bg-white, #ddd)",
      text: "var(--disabled-color-text, #818181)",
      white: "var(--disabled-color-white, #818181)",
      link: "var(--disabled-color-link, #818181)",
      brDefault: "var(--disabled-br-default, #ddd)",
    },

    button: {
      colorClose: "var(--button-color-close, #888888)",
      hoverColorClose: "var(--button-hover-color-close, #ff0000)",
    },
  },

  typography: {
    fontFamily: "var(--button-font-family, system-ui)",
    button: {
      fontFamily: "var(--button-font-family, system-ui)",
      fontSize: "var(--button-font-size, 0.875rem)",
      fontWeight: "var(--button-font-weight, 400)",
    },
    label: {
      fontSize: "var(--label-font-size, 1rem)",
      fontWeight: "var(--label-font-weight, 400)",
    },
  },

  range: {
    colors: {
      borderImageSource: {
        default: "var(--range-border-image-source, #1677ff)",
        hover: "var(--range-hover-border-image-source, #4096ff)",
        pressed: "var(--range-pressed-border-image-source, #0958d9)",
      },
    },
    sizes: {
      thumb: "var(--range-thumb-size, 1.25rem)",
      track: "var(--range-track-size, 0.125rem)",
      line: "var(--range-line-size, 0.125rem)",
    },
    radius: "var(--range-radius, 1.25rem)",
  },

  radius: {
    button: { brSmall: "var(--br-button-small, 0.25rem)" },
    checkbox: "var(--br-checkbox, 0.125rem)",
    input: "var(--br-checkbox, 0.3125rem)",
  },

  spacing: {
    unit: "0.5rem",
  },

  padding: {
    button: "var(--button-padding, 0.5rem 1rem)",
    input: "var(--button-padding, 0.5rem 0.75rem)",
  },

  shadow: {
    checkmark:
      "var(--shadow-checkmark, 0 0 0 0.25rem rgba(13, 110, 253, 0.25))",
  },
} as const;

export type ThemeType = typeof theme;
