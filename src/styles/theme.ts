import type { color } from "storybook/theming";

const getVar = (name: string, value: string) => {
  return `var(--kilya-${name}, ${value})`;
};

export const theme = {
  colors: {
    // Основные цвета
    bgPrimary: getVar("bg-primary", "#1677ff"),
    bgDefault: getVar("bg-default", "#d9d9d9"),
    bgWhite: getVar("bg-white", "#fff"),
    text: getVar("color-text", "#000"),
    white: getVar("color-white", "#fff"),
    link: getVar("color-link", "#1677ff"),
    brDefault: getVar("color-br-default", "#d9d9d9"),

    // Hover состояния
    hover: {
      bgPrimary: getVar("hover-bg-primary", "#4096ff"),
      bgDefault: getVar("hover-bg-default", "#e1e1e1"),
      link: getVar("hover-color-link", "#4096ff"),
      brDefault: getVar("hover-br-default", "#e1e1e1"),
    },

    // Focus состояния
    focused: {
      bgPrimary: getVar("focused-bg-primary", "#4096ff"),
      bgDefault: getVar("focused-bg-default", "#e1e1e1"),
      link: getVar("focused-color-link", "#4096ff"),
      brDefault: getVar("focused-br-default", "#e1e1e1"),
    },

    // Pressed состояния
    pressed: {
      bgPrimary: getVar("pressed-bg-primary", "#0958d9"),
      bgDefault: getVar("pressed-bg-default", "#00000026"),
      link: getVar("pressed-color-link", "#0958d9"),
      brDefault: getVar("pressed-br-default", "#00000026"),
    },

    // Disabled состояния
    disabled: {
      bgPrimary: getVar("disabled-bg-primary", "#ddd"),
      bgDefault: getVar("disabled-bg-default", "#ddd"),
      bgWhite: getVar("disabled-bg-white", "#ddd"),
      text: getVar("disabled-color-text", "#818181"),
      white: getVar("disabled-color-white", "#818181"),
      link: getVar("disabled-color-link", "#818181"),
      brDefault: getVar("disabled-br-default", "#ddd"),
    },

    button: {
      colorClose: getVar("button-color-close", "#888888"),
      hoverColorClose: getVar("button-hover-color-close", "#ff0000"),
    },
  },

  typography: {
    fontFamily: getVar("font-family", "system-ui"),
    button: {
      fontFamily: getVar("button-font-family", "system-ui"),
      fontSize: getVar("button-font-size", "0.875rem"),
      fontWeight: getVar("button-font-weight", "400"),
    },
    label: {
      fontSize: getVar("label-font-size", "1rem"),
      fontWeight: getVar("label-font-weight", "400"),
    },
  },

  radius: {
    button: { brSmall: getVar("br-button-small", "0.25rem") },
  },

  spacing: {
    unit: "0.5rem",
  },

  padding: {
    button: getVar("button-padding", "0.5rem 1rem"),
  },

  // =========================================================
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
      color: getVar("amount-button-color", "#000"),
      borderColor: getVar("amount-button-border-color", "transparent"),
      hover: {
        backgroundColor: getVar(
          "amount-button-hover-background-color",
          "transparent"
        ),
        color: getVar("amount-button-hover-color", "#4096ff"),
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
      backgroundColor: getVar("button-default-background-color", "#1677ff"),
      color: getVar("button-default-color", "#fff"),
      borderColor: getVar("button-default-border-color", "#1677ff"),
      borderRadius: getVar("button-default-border-radius", "0.25rem"),
      borderWidth: getVar("button-default-border-width", "0.0625rem"),
      borderStyle: getVar("button-default-border-style", "solid"),
      minWidth: getVar("button-default-min-width", "auto"),
      minHeight: getVar("button-default-min-height", "auto"),
      gap: getVar("button-default-gap", "0.625rem"),
      hover: {
        backgroundColor: getVar(
          "button-default-hover-background-color",
          "#4096ff"
        ),
        color: getVar("button-default-hover-color", "#fff"),
        borderColor: getVar("button-default-hover-border-color", "#4096ff"),
      },
      pressed: {
        backgroundColor: getVar(
          "button-default-pressed-background-color",
          "#0958d9"
        ),
        color: getVar("button-default-pressed-color", "#fff"),
        borderColor: getVar("button-default-pressed-border-color", "#0958d9"),
      },
      disabled: {
        backgroundColor: getVar(
          "button-default-disabled-background-color",
          "#ddd"
        ),
        color: getVar("button-default-disabled-color", "#818181"),
        borderColor: getVar("button-default-disabled-border-color", "#ddd"),
      },
    },
    outlined: {
      backgroundColor: getVar(
        "button-outlined-background-color",
        "transparent"
      ),
      color: getVar("button-outlined-color", "#1677ff"),
      borderColor: getVar("button-outlined-border-color", "#1677ff"),
      hover: {
        backgroundColor: getVar(
          "button-outlined-hover-background-color",
          "#e1e1e1"
        ),
        color: getVar("button-outlined-hover-color", "#4096ff"),
        borderColor: getVar("button-outlined-hover-border-color", "#4096ff"),
      },
      pressed: {
        backgroundColor: getVar(
          "button-outlined-pressed-background-color",
          "#00000026"
        ),
        color: getVar("button-outlined-pressed-color", "#0958d9"),
        borderColor: getVar("button-outlined-pressed-border-color", "#0958d9"),
      },
      disabled: {
        backgroundColor: getVar(
          "button-outlined-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-outlined-disabled-color", "#818181"),
        borderColor: getVar("button-outlined-disabled-border-color", "#ddd"),
      },
    },
    ghost: {
      backgroundColor: getVar("button-ghost-background-color", "transparent"),
      color: getVar("button-ghost-color", "#1677ff"),
      borderColor: getVar("button-ghost-border-color", "transparent"),
      hover: {
        backgroundColor: getVar(
          "button-ghost-hover-background-color",
          "#e1e1e1"
        ),
        color: getVar("button-ghost-hover-color", "#4096ff"),
      },
      pressed: {
        backgroundColor: getVar(
          "button-ghost-pressed-background-color",
          "#00000026"
        ),
        color: getVar("button-ghost-pressed-color", "#0958d9"),
      },
      disabled: {
        backgroundColor: getVar(
          "button-ghost-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-ghost-disabled-color", "#818181"),
      },
    },
    text: {
      backgroundColor: getVar("button-text-background-color", "transparent"),
      color: getVar("button-text-color", "#1677ff"),
      borderColor: getVar("button-text-border-color", "transparent"),
      hover: {
        backgroundColor: getVar(
          "button-text-hover-background-color",
          "transparent"
        ),
        color: getVar("button-text-hover-color", "#4096ff"),
      },
      pressed: {
        backgroundColor: getVar(
          "button-text-pressed-background-color",
          "transparent"
        ),
        color: getVar("button-text-pressed-color", "#0958d9"),
      },
      disabled: {
        backgroundColor: getVar(
          "button-text-disabled-background-color",
          "transparent"
        ),
        color: getVar("button-text-disabled-color", "#818181"),
      },
    },
    link: {
      color: getVar("button-link-color", "#1677ff"),
      hover: {
        color: getVar("button-link-hover-color", "#4096ff"),
      },
      pressed: {
        color: getVar("button-link-pressed-color", "#0958d9"),
      },
      disabled: {
        color: getVar("button-link-disabled-color", "#818181"),
      },
    },
    white: {
      backgroundColor: getVar("button-white-background-color", "#fff"),
      color: getVar("button-white-color", "#000"),
      borderColor: getVar("button-white-border-color", "#fff"),
      hover: {
        backgroundColor: getVar(
          "button-white-hover-background-color",
          "#4096ff"
        ),
        color: getVar("button-white-hover-color", "#fff"),
        borderColor: getVar("button-white-hover-border-color", "#4096ff"),
      },
      pressed: {
        backgroundColor: getVar(
          "button-white-pressed-background-color",
          "#0958d9"
        ),
        color: getVar("button-white-pressed-color", "#fff"),
        borderColor: getVar("button-white-pressed-border-color", "#0958d9"),
      },
      disabled: {
        backgroundColor: getVar(
          "button-white-disabled-background-color",
          "#ddd"
        ),
        color: getVar("button-white-disabled-color", "#818181"),
        borderColor: getVar("button-white-disabled-border-color", "#ddd"),
      },
    },
    close: {
      size: getVar("button-close-size", "1.875rem"),
      color: getVar("button-close-color", "#888888"),
      hoverColor: getVar("button-close-hover-color", "#ff0000"),
      disabledColor: getVar("button-close-disabled-color", "#818181"),
    },
  },

  input: {
    typography: {
      fontFamily: getVar("input-font-family", "system-ui"),
      fontSize: getVar("input-font-size", "1rem"),
      fontWeight: getVar("input-font-weight", "400"),
    },
    colors: {
      text: getVar("input-color", "#000"),
      backgroundColor: getVar("input-background-color", "#ffffff"),
      borderColor: getVar("input-border-color", "#a8a8a8"),
      focus: {
        borderColor: getVar("input-focus-border-color", "#1677ff"),
      },
      hover: {
        borderColor: getVar("input-hover-border-color", "#1677ff"),
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
          default: getVar("range-border-image-source", "#1677ff"),
          hover: getVar("range-hover-border-image-source", "#4096ff"),
          pressed: getVar("range-pressed-border-image-source", "#0958d9"),
        },
        backgroundСolor: {
          default: getVar("range-background-color", "#1677ff"),
          track: getVar("range-track-background-color", "#d9d9d9"),
        },
        shadow: {
          disabled: getVar("range-disabled-shadow", "#ddd"),
        },
        outline: {
          focused: getVar("range-focused-outline", "#4096ff"),
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
          default: getVar("checkable-border-color", "#1677ff"),
          hover: getVar("checkable-hover-border-color", "#4096ff"),
          checked: getVar("checkable-checked-border-color", "#1677ff"),
        },
        backgroundColor: {
          default: getVar("checkable-background-color", "#fff"),
          hover: getVar("checkable-hover-background-color", "#4096ff"),
          checked: getVar("checkable-checked-background-color", "#1677ff"),
        },
        focus: {
          border: getVar("checkable-focus-border-color", "#4096ff"),
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
      text: getVar("select-color", getVar("input-color", "#000")),
      backgroundColor: getVar(
        "select-background-color",
        getVar("input-background-color", "#ffffff")
      ),
      borderColor: getVar(
        "select-border-color",
        getVar("input-border-color", "#a8a8a8")
      ),
      option: {
        border: getVar("select-option-border-color", "#d9d9d9"),
        selected: {
          backgroundColor: getVar(
            "select-option-selected-background-color",
            "#e1e1e1"
          ),
          color: getVar("select-option-selected-color", "#1677ff"),
        },
      },
      hover: {
        backgroundColor: getVar("select-background-color", "#e1e1e1"),
        borderColor: getVar(
          "select-hover-border-color",
          getVar("input-hover-border-color", "#e1e1e1")
        ),
        option: {
          backgroundColor: getVar(
            "select-option-hover-background-color",
            "#e1e1e1"
          ),
          color: getVar("select-option-hover-color", "#4096ff"),
        },
      },
      focus: {
        shadow: getVar(
          "select-shadow",
          "0 0 0 0.125rem rgba(22, 119, 255, 0.1)"
        ),
        borderColor: getVar(
          "select-focus-border-color",
          getVar("input-focus-border-color", "#4096ff")
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
        getVar("select-background-color", "#ffffff")
      ),
      borderColor: getVar(
        "dropdown-border-color",
        getVar("select-border-color", "#d9d9d9")
      ),
      shadow: getVar(
        "dropdown-shadow",
        "0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
      ),
      hover: {
        backgroundColor: getVar("dropdown-background-color", "#e1e1e1"),
      },
    },
  },
} as const;

export type ThemeType = typeof theme;
