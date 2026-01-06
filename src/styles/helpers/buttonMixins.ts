// buttonMixins.ts
import { css } from "styled-components";
import { hoverMixin, svgCurrent } from "./mixins";
import { theme } from "../theme";

// Базовый сброс стилей для всех кнопок
export const buttonReset = css`
  --svg-size: 1.5rem;
  font-style: normal;
  line-height: ${theme.button.typography.lineHeight};
  width: fit-content;
  background-color: transparent;
  border: ${theme.button.default.borderWidth} solid transparent;
  padding: 0;
  cursor: pointer;
  user-select: none;
  transition: 0.2s color, 0.2s background-color, 0.2s border-color;

  ${svgCurrent}

  svg {
    width: var(--svg-size);
    height: var(--svg-size);
    object-fit: contain;
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }
`;

// Базовая типография кнопок
export const buttonTypography = css`
  font-family: ${theme.button.typography.fontFamily};
  font-size: ${theme.button.typography.fontSize};
  font-weight: ${theme.button.typography.fontWeight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.button.default.gap};
`;

// Базовый набор CSS переменных для кастомизации
export const buttonVariables = css`
  --button-background-color: transparent;
  --button-color: currentColor;
  --button-border-color: transparent;
  --button-border-radius: ${theme.button.default.borderRadius};
  --button-border-style: ${theme.button.default.borderStyle};
  --button-border-width: ${theme.button.default.borderWidth};
  --button-padding: ${theme.button.default.padding};
  --button-min-width: ${theme.button.default.minWidth};
  --button-min-height: ${theme.button.default.minHeight};
  --button-gap: ${theme.button.default.gap};

  --button-hover-background-color: transparent;
  --button-hover-color: currentColor;
  --button-hover-border-color: transparent;

  --button-pressed-background-color: transparent;
  --button-pressed-color: currentColor;
  --button-pressed-border-color: transparent;

  --button-disabled-background-color: transparent;
  --button-disabled-color: currentColor;
  --button-disabled-border-color: transparent;
`;

// Универсальный миксин для кнопок с CSS переменными
export const buttonBase = css`
  ${buttonReset}
  ${buttonTypography}
  ${buttonVariables}
  
  background-color: var(--button-background-color);
  color: var(--button-color);
  border-color: var(--button-border-color);
  border-radius: var(--button-border-radius);
  border-style: var(--button-border-style);
  border-width: var(--button-border-width);
  padding: var(--button-padding);
  min-width: var(--button-min-width);
  min-height: var(--button-min-height);
  gap: var(--button-gap);

  ${hoverMixin(css`
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-color);
    border-color: var(--button-hover-border-color);
  `)}

  &:active:not(:disabled) {
    background-color: var(--button-pressed-background-color);
    color: var(--button-pressed-color);
    border-color: var(--button-pressed-border-color);
  }

  &:disabled {
    background-color: var(--button-disabled-background-color);
    color: var(--button-disabled-color);
    border-color: var(--button-disabled-border-color);
  }
`;

type ButtonWithStates = {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  hover?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
  pressed?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
  disabled?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
};

const hasStates = (config: unknown): config is ButtonWithStates => {
  return typeof config === "object" && config !== null && "hover" in config;
};

const fallback = "transparent";

const prop = <T extends object, K extends keyof T>(
  obj: T | undefined,
  key: K
) => obj?.[key] ?? fallback;

// Функция для быстрого создания вариантов кнопок
export const createButtonVariant = (variant: keyof typeof theme.button) => {
  const variantConfig = theme.button[variant];

  // Особые случаи
  if (variant === "link" || variant === "close") {
    return css`
      ${buttonBase}
    `;
  }

  // Если это не кнопка со state'ами — просто base
  if (!hasStates(variantConfig)) {
    return css`
      ${buttonBase}
    `;
  }

  const { hover, pressed, disabled } = variantConfig;

  return css`
    ${buttonBase}

    --button-background-color: ${prop(variantConfig, "backgroundColor")};
    --button-color: ${prop(variantConfig, "color")};
    --button-border-color: ${prop(variantConfig, "borderColor")};

    --button-hover-background-color: ${prop(hover, "backgroundColor")};
    --button-hover-color: ${prop(hover, "color")};
    --button-hover-border-color: ${hover?.borderColor ??
    hover?.backgroundColor ??
    fallback};

    --button-pressed-background-color: ${prop(pressed, "backgroundColor")};
    --button-pressed-color: ${prop(pressed, "color")};
    --button-pressed-border-color: ${pressed?.borderColor ??
    pressed?.backgroundColor ??
    fallback};

    --button-disabled-background-color: ${prop(disabled, "backgroundColor")};
    --button-disabled-color: ${prop(disabled, "color")};
    --button-disabled-border-color: ${disabled?.borderColor ??
    disabled?.backgroundColor ??
    fallback};
  `;
};

// Экспортируем готовые варианты
export const buttonDefault = createButtonVariant("default");
export const buttonOutlined = createButtonVariant("outlined");
export const buttonGhost = createButtonVariant("ghost");
export const buttonText = createButtonVariant("text");
export const buttonWhite = createButtonVariant("white");
