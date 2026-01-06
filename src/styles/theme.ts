const getVar = (name: string, value: string) => {
  return `var(--kilya-${name}, ${value})`;
};

const primary = "var(--primary, #1677ff)";
const primaryHover = "var(--primary-hover, #4096ff)";
const primaryPressed = "var(--primary-pressed, #0958d9)";
const black = "var(--black, #000)";
const blackAlpha = "var(--black-alpha-15, #00000026)";
const red = "var(--red, #ff0000)";
const white = "var(--black, #fff)";
const grayD9 = "var(--gray-d9, #d9d9d9)";
const grayDD = "var(--gray-dd, #ddd)";
const gray81 = "var(--gray-81, #818181)";
const grayE1 = "var(--gray-e1, #e1e1e1)";
const grayA8 = "var(--gray-a8, #a8a8a8)";
const gray88 = "var(--gray-88, #888)";

export const theme = {
  colors: {
    // Основные цвета
    bgPrimary: getVar("bg-primary", primary),
    text: getVar("color-text", black),
    white: getVar("color-white", white),
    brDefault: getVar("color-br-default", grayD9),

    // Hover состояния
    hover: {
      bgPrimary: getVar("hover-bg-primary", primaryHover),
    },

    // Focus состояния
    focused: {
      bgPrimary: getVar("focused-bg-primary", primaryHover),
    },

    // Pressed состояния
    pressed: {
      bgPrimary: getVar("pressed-bg-primary", primaryPressed),
    },
  },

  typography: {
    fontFamily: getVar("font-family", "system-ui"),
    label: {
      fontSize: getVar("label-font-size", "1rem"),
      fontWeight: getVar("label-font-weight", "400"),
    },
  },

  amount: {
    typography: {
      fontFamily: getVar("amount-font-family", "system-ui"),
      fontSize: getVar("amount-font-size", "1rem"),
      fontWeight: getVar("amount-font-weight", "400"),
      lineHeight: getVar("amount-line-height", "1.375"),
    },
    input: {
      minWidth: getVar("amount-input-min-width", "1.75rem"),
    },
    button: {
      padding: getVar("amount-button-padding", "0.125rem"),
      maxWidth: getVar("amount-button-max-width", "1.5rem"),
      minWidth: getVar("amount-button-min-width", "1.5rem"),
      width: getVar("amount-button-width", "1.5rem"),
      backgroundColor: getVar("amount-button-background-color", "transparent"),
      color: getVar("amount-button-color", black),
      borderColor: getVar("amount-button-border-color", "transparent"),
      hover: {
        backgroundColor: getVar(
          "amount-button-hover-background-color",
          "transparent"
        ),
        color: getVar("amount-button-hover-color", primaryHover),
        borderColor: getVar("amount-button-hover-border-color", "transparent"),
      },
    },
  },

  button: {
    typography: {
      fontFamily: getVar("button-typography-font-family", "system-ui"),
      fontSize: getVar("button-typography-font-size", "0.875rem"),
      fontWeight: getVar("button-typography-font-weight", "400"),
      lineHeight: getVar("button-typography-line-height", "1.5"),
    },
    default: {
      padding: getVar("button-default-padding", "0.5rem 1rem"),
      backgroundColor: getVar("button-default-background-color", primary),
      color: getVar("button-default-color", white),
      borderColor: getVar("button-default-border-color", primary),
      borderRadius: getVar("button-default-border-radius", "0.25rem"),
      borderWidth: getVar("button-default-border-width", "0.0625rem"),
      borderStyle: getVar("button-default-border-style", "solid"),
      minWidth: getVar("button-default-min-width", "auto"),
      minHeight: getVar("button-default-min-height", "auto"),
      gap: getVar("button-default-gap", "0.625rem"),
      hover: {
        backgroundColor: getVar(
          "button-default-hover-background-color",
          primaryHover
        ),
        color: getVar("button-default-hover-color", white),
        borderColor: getVar("button-default-hover-border-color", primaryHover),
      },
      pressed: {
        backgroundColor: getVar(
          "button-default-pressed-background-color",
          primaryPressed
        ),
        color: getVar("button-default-pressed-color", white),
        borderColor: getVar(
          "button-default-pressed-border-color",
          primaryPressed
        ),
      },
      disabled: {
        backgroundColor: getVar(
          "button-default-disabled-background-color",
          grayDD
        ),
        color: getVar("button-default-disabled-color", gray81),
        borderColor: getVar("button-default-disabled-border-color", grayDD),
      },
    },
    outlined: {
      backgroundColor: getVar(
        "button-outlined-background-color",
        "transparent"
      ),
      color: getVar("button-outlined-color", primary),
      borderColor: getVar("button-outlined-border-color", primary),
      hover: {
        backgroundColor: getVar(
          "button-outlined-hover-background-color",
          grayE1
        ),
        color: getVar("button-outlined-hover-color", primaryHover),
        borderColor: getVar("button-outlined-hover-border-color", primaryHover),
      },
      pressed: {
        backgroundColor: getVar(
          "button-outlined-pressed-background-color",
          blackAlpha
        ),
        color: getVar("button-outlined-pressed-color", primaryPressed),
        borderColor: getVar(
          "button-outlined-pressed-border-color",
          primaryPressed
        ),
      },
      disabled: {
        backgroundColor: getVar(
          "button-outlined-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-outlined-disabled-color", gray81),
        borderColor: getVar("button-outlined-disabled-border-color", grayDD),
      },
    },
    ghost: {
      backgroundColor: getVar("button-ghost-background-color", "transparent"),
      color: getVar("button-ghost-color", primary),
      borderColor: getVar("button-ghost-border-color", "transparent"),
      hover: {
        backgroundColor: getVar("button-ghost-hover-background-color", grayE1),
        color: getVar("button-ghost-hover-color", primaryHover),
      },
      pressed: {
        backgroundColor: getVar(
          "button-ghost-pressed-background-color",
          blackAlpha
        ),
        color: getVar("button-ghost-pressed-color", primaryPressed),
      },
      disabled: {
        backgroundColor: getVar(
          "button-ghost-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-ghost-disabled-color", gray81),
      },
    },
    text: {
      backgroundColor: getVar("button-text-background-color", "transparent"),
      color: getVar("button-text-color", primary),
      borderColor: getVar("button-text-border-color", "transparent"),
      hover: {
        backgroundColor: getVar(
          "button-text-hover-background-color",
          "transparent"
        ),
        color: getVar("button-text-hover-color", primaryHover),
      },
      pressed: {
        backgroundColor: getVar(
          "button-text-pressed-background-color",
          "transparent"
        ),
        color: getVar("button-text-pressed-color", primaryPressed),
      },
      disabled: {
        backgroundColor: getVar(
          "button-text-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-text-disabled-color", gray81),
      },
    },
    link: {
      color: getVar("button-link-color", primary),
      hover: {
        color: getVar("button-link-hover-color", primaryHover),
      },
      pressed: {
        color: getVar("button-link-pressed-color", primaryPressed),
      },
      disabled: {
        color: getVar("button-link-disabled-color", gray81),
      },
    },
    white: {
      backgroundColor: getVar("button-white-background-color", white),
      color: getVar("button-white-color", black),
      borderColor: getVar("button-white-border-color", white),
      hover: {
        backgroundColor: getVar(
          "button-white-hover-background-color",
          primaryHover
        ),
        color: getVar("button-white-hover-color", white),
        borderColor: getVar("button-white-hover-border-color", primaryHover),
      },
      pressed: {
        backgroundColor: getVar(
          "button-white-pressed-background-color",
          primaryPressed
        ),
        color: getVar("button-white-pressed-color", white),
        borderColor: getVar(
          "button-white-pressed-border-color",
          primaryPressed
        ),
      },
      disabled: {
        backgroundColor: getVar(
          "button-white-disabled-background-color",
          grayDD
        ),
        color: getVar("button-white-disabled-color", gray81),
        borderColor: getVar("button-white-disabled-border-color", grayDD),
      },
    },
    close: {
      size: getVar("button-close-size", "1.875rem"),
      color: getVar("button-close-color", gray88),
      hoverColor: getVar("button-close-hover-color", red),
      disabledColor: getVar("button-close-disabled-color", gray81),
    },
    radius: getVar("button-radius", "0.25rem"),
  },

  input: {
    typography: {
      fontFamily: getVar("input-font-family", "system-ui"),
      fontSize: getVar("input-font-size", "1rem"),
      fontWeight: getVar("input-font-weight", "400"),
    },
    colors: {
      text: getVar("input-color", black),
      backgroundColor: getVar("input-background-color", white),
      borderColor: getVar("input-border-color", grayA8),
      focus: {
        borderColor: getVar("input-focus-border-color", primary),
      },
      hover: {
        borderColor: getVar("input-hover-border-color", primary),
      },
    },
    radius: getVar("input-radius", "0.3125rem"),
    padding: getVar("input-padding", "0.5rem 0.75rem"),
    sizes: {
      color: {
        width: getVar("input-color-width", "3.125rem"),
        height: getVar("input-color-height", "1.875rem"),
        padding: getVar("input-color-padding", "0.125rem"),
        borderRadius: getVar("input-color-radius", "0.25rem"),
      },
      file: {
        padding: getVar("input-file-padding", "0.5rem"),
        borderRadius: getVar("input-file-radius", "0.25rem"),
        buttonMargin: getVar("input-file-button-margin", "0.75rem"),
      },
      image: {
        padding: getVar("input-image-padding", "0.625rem 1.25rem"),
        borderRadius: getVar("input-image-radius", "0.25rem"),
        fontWeight: getVar("input-image-font-weight", "700"),
      },
      number: {
        minWidth: getVar("input-number-min-width", "1.75rem"),
      },
      label: {
        gap: getVar("label-gap", "0.25rem"),
      },
    },
    range: {
      colors: {
        borderImageSource: {
          default: getVar("range-border-image-source", primary),
          hover: getVar("range-hover-border-image-source", primaryHover),
          pressed: getVar("range-pressed-border-image-source", primaryPressed),
        },
        backgroundColor: {
          default: getVar("range-background-color", primary),
          track: getVar("range-track-background-color", grayD9),
        },
        shadow: {
          disabled: getVar("range-disabled-shadow", grayDD),
        },
        outline: {
          focused: getVar("range-focused-outline", primaryHover),
        },
      },
      sizes: {
        thumb: getVar("range-thumb-size", "1.25rem"),
        track: getVar("range-track-size", "0.125rem"),
        line: getVar("range-line-size", "0.125rem"),
      },
      radius: getVar("range-radius", "1.25rem"),
    },
    checkable: {
      colors: {
        border: {
          default: getVar("checkable-border-color", primary),
          hover: getVar("checkable-hover-border-color", primaryHover),
          checked: getVar("checkable-checked-border-color", primary),
        },
        backgroundColor: {
          default: getVar("checkable-background-color", white),
          hover: getVar("checkable-hover-background-color", primaryHover),
          checked: getVar("checkable-checked-background-color", primary),
        },
        focus: {
          border: getVar("checkable-focus-border-color", primaryHover),
          shadow: getVar(
            "checkable-focus-shadow",
            "0 0 0 0.25rem rgba(13, 110, 253, 0.25)"
          ),
        },
      },
      sizes: {
        thumb: getVar("checkable-thumb-size", "1.25rem"),
        track: getVar("checkable-track-size", "0.125rem"),
        line: getVar("checkable-line-size", "0.125rem"),
      },
      radius: getVar("checkable-radius", "0.125rem"),
    },
  },

  select: {
    typography: {
      fontFamily: getVar("select-font-family", "system-ui"),
      fontSize: getVar("select-font-size", "1rem"),
      fontWeight: getVar("select-font-weight", "400"),
      lineHeight: getVar("select-line-height", "1.375"),
    },
    colors: {
      text: getVar("select-color", getVar("input-color", black)),
      backgroundColor: getVar(
        "select-background-color",
        getVar("input-background-color", white)
      ),
      borderColor: getVar(
        "select-border-color",
        getVar("input-border-color", grayA8)
      ),
      option: {
        border: getVar("select-option-border-color", grayD9),
        selected: {
          backgroundColor: getVar(
            "select-option-selected-background-color",
            grayE1
          ),
          color: getVar("select-option-selected-color", primary),
        },
      },
      hover: {
        backgroundColor: getVar("select-background-color", grayE1),
        borderColor: getVar(
          "select-hover-border-color",
          getVar("input-hover-border-color", grayE1)
        ),
        option: {
          backgroundColor: getVar(
            "select-option-hover-background-color",
            grayE1
          ),
          color: getVar("select-option-hover-color", primaryHover),
        },
      },
      focus: {
        shadow: getVar(
          "select-shadow",
          "0 0 0 0.125rem rgba(22, 119, 255, 0.1)"
        ),
        borderColor: getVar(
          "select-focus-border-color",
          getVar("input-focus-border-color", primaryHover)
        ),
      },
    },
    radius: getVar("select-radius", "0.3125rem"),
    padding: getVar("select-padding", "0.5rem 0.75rem"),
    gap: getVar("select-gap", "0.5rem"),
  },

  dropdown: {
    colors: {
      backgroundColor: getVar(
        "dropdown-background-color",
        getVar("select-background-color", white)
      ),
      borderColor: getVar(
        "dropdown-border-color",
        getVar("select-border-color", grayD9)
      ),
      shadow: getVar(
        "dropdown-shadow",
        "0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
      ),
      hover: {
        backgroundColor: getVar("dropdown-background-color", grayE1),
      },
    },
  },
} as const;

export type ThemeType = typeof theme;
