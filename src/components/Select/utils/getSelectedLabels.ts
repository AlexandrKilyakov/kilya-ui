import type { ReactNode } from "react";
import type { SelectOption } from "../types";

export const getSelectedLabels = (
  normalizedOptions: SelectOption[],
  selectedValues: (string | number)[],
  placeholder: ReactNode
): { displayLabel: ReactNode; selectedLabels: ReactNode[] } => {
  if (selectedValues.length === 0) {
    return { displayLabel: placeholder, selectedLabels: [] };
  }

  const selectedLabels = normalizedOptions
    .filter((opt) => selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  if (selectedLabels.length === 1) {
    return { displayLabel: selectedLabels[0], selectedLabels };
  }

  if (selectedLabels.length > 1) {
    const isRu =
      typeof navigator !== "undefined" && navigator.language.startsWith("ru");
    return {
      displayLabel: isRu
        ? `Выбрано: ${selectedLabels.length}`
        : `Selected: ${selectedLabels.length}`,
      selectedLabels,
    };
  }

  return { displayLabel: placeholder, selectedLabels: [] };
};
