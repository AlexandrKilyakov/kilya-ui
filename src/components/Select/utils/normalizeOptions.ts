import type { SelectOption, SelectOptions } from "../types";

export const normalizeOptions = (options?: SelectOptions): SelectOption[] => {
  if (!options) return [];

  // Если options - массив объектов SelectOption
  if (Array.isArray(options)) {
    const result: SelectOption[] = [];

    for (const item of options) {
      // Если это объект с value и label
      if (
        item &&
        typeof item === "object" &&
        "value" in item &&
        "label" in item
      ) {
        const selectOption = item as SelectOption;
        result.push({
          value: selectOption.value,
          label: selectOption.label,
          disabled: selectOption.disabled || false,
        });
        continue;
      }

      // Если это примитив (string/number)
      if (
        item != null &&
        (typeof item === "string" || typeof item === "number")
      ) {
        result.push({
          value: item,
          label: String(item),
          disabled: false,
        });
        continue;
      }

      // Игнорируем некорректные элементы
    }

    return result;
  }

  // Если options - объект Record<string/number, string/ReactNode>
  if (options && typeof options === "object" && !Array.isArray(options)) {
    return Object.entries(options).map(([key, label]) => ({
      value: key,
      label,
      disabled: false,
    }));
  }

  return [];
};
