import { useMemo } from "react";
import type { SelectOptions, SelectOption } from "../types";

export const useLabelByValue = (
  options: SelectOptions | undefined,
  value: string | number | undefined
): string => {
  return useMemo(() => {
    if (!options || value === undefined) return "";

    // Массив объектов SelectOption
    if (
      Array.isArray(options) &&
      options.length > 0 &&
      typeof options[0] === "object" &&
      "value" in options[0]
    ) {
      const foundOption = options.find(
        (option): option is SelectOption =>
          (option as SelectOption).value === value
      );
      return foundOption ? String(foundOption.label) : "";
    }

    // Объект Record<string, string>
    if (typeof options === "object" && !Array.isArray(options)) {
      return options[value] || "";
    }

    // Массив примитивов
    if (Array.isArray(options)) {
      return String(value);
    }

    return "";
  }, [options, value]);
};
