import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Range from "./Range";
import type { ExtendedRangeProps } from "./types";

const meta: Meta<typeof Range> = {
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
    docs: {
      description: {
        component:
          "Компонент Range для выбора значений с ползунком или шагами.",
      },
    },
  },
  argTypes: {
    product: {
      description: "Объект с минимальным и максимальным значением",
      control: "object",
    },
    steps: {
      description: "Массив шагов (если нужен выбор из списка)",
      control: "object",
    },
    title: {
      description: "Заголовок компонента",
      control: "text",
    },
    step: {
      description: "Шаг изменения значения для ползунка",
      control: { type: "number", min: 1, max: 100 },
    },
    value: {
      description: "Текущее значение",
      control: { type: "number" },
    },
    onInput: {
      action: "onInput",
      description: "Колбэк при изменении значения",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Range>;

// 🟢 Компонент-обёртка для интерактивной истории
const RangeWithState = (args: ExtendedRangeProps) => {
  const [value, setValue] = useState(args.value ?? args.product.min ?? 0);
  return <Range {...args} value={value} onInput={setValue} />;
};

// 📊 Стандартный ползунок
export const Default: Story = {
  render: RangeWithState,
  name: "Range Slider",
  args: {
    product: {
      min: 0,
      max: 100,
      title: "Количество",
      calculation: "шт.",
    },
    step: 5,
    value: 50,
    title: "Выберите значение",
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартный ползунок для выбора числового значения.",
      },
    },
  },
};

// 📋 Выбор из шагов
export const WithSteps: Story = {
  render: RangeWithState,
  name: "Range with Steps",
  args: {
    product: {
      min: 0,
      max: 3,
      title: "Вариант доставки",
    },
    steps: [
      { value: "standard", name: "Стандартная" },
      { value: "express", name: "Экспресс" },
      { value: "pickup", name: "Самовывоз" },
      { value: "international", name: "Международная" },
    ],
    title: "Способ доставки",
  },
  parameters: {
    docs: {
      description: {
        story: "Выбор из предопределенных шагов вместо ползунка.",
      },
    },
  },
};

// 📦 Шаги с объёмом памяти
export const WithGb: Story = {
  render: RangeWithState,
  name: "Range with Gb",
  args: {
    product: {
      min: 0,
      max: 8,
      title: "Объём памяти",
    },
    steps: [
      { value: "4Gb", name: "4Gb" },
      { value: "8Gb", name: "8Gb" },
      { value: "16Gb", name: "16Gb" },
      { value: "32Gb", name: "32Gb" },
      { value: "64Gb", name: "64Gb" },
      { value: "128Gb", name: "128Gb" },
      { value: "256Gb", name: "256Gb" },
      { value: "512Gb", name: "512Gb" },
      { value: "1Tb", name: "1Tb" },
    ],
    title: "Выбор объёма памяти",
  },
  parameters: {
    docs: {
      description: {
        story: "Выбор из предопределенных шагов памяти.",
      },
    },
  },
};

// ⚙️ Ползунок с расчетом (например сумма кредита)
export const WithCalculation: Story = {
  render: RangeWithState,
  name: "Range with Calculation",
  args: {
    product: {
      min: 1000,
      max: 10000,
      title: "Сумма кредита",
      calculation: "₽",
    },
    step: 1000,
    value: 5000,
    title: "Размер кредита",
  },
};

// 🔒 Минимальный диапазон
export const Minimal: Story = {
  render: RangeWithState,
  name: "Minimal Range",
  args: {
    product: {
      min: 0,
      max: 10,
      title: "Rating",
    },
  },
};

// 🎨 Кастомный стиль
export const CustomStyled: Story = {
  render: (args) => (
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      <Range {...args} />
    </div>
  ),
  name: "Custom Styled",
  args: {
    product: {
      min: 0,
      max: 100,
      title: "Brightness",
    },
    value: 75,
    className: "custom-range-class",
  },
};
