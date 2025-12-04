import cn from "classnames";

/**
 * Хелпер для добавления префикса kilya- ко всем классам компонентов
 * @param baseClass - Базовый класс компонента (без префикса)
 * @param className - Дополнительные классы из пропсов
 * @returns Строка с классами с префиксом kilya-
 */
export const baseClass = (baseClass: string | string[], className?: string) => {
  return cn(prefixClasses(baseClass), className);
};

/**
 * Хелпер для добавления префикса к нескольким классам
 * @param classes - Объект или массив классов
 * @returns Классы с префиксом kilya-
 */
const prefixClasses = (classes: string | string[] | { [key: string]: any }) => {
  if (typeof classes === "string") {
    return `kilya-${classes}`;
  }

  if (Array.isArray(classes)) {
    return classes.map((cls) => `kilya-${cls}`).join(" ");
  }

  // Для объекта classnames
  const prefixedObj: { [key: string]: any } = {};
  Object.keys(classes).forEach((key) => {
    prefixedObj[`kilya-${key}`] = classes[key];
  });
  return prefixedObj;
};
