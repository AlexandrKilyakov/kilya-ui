import type { Meta, StoryObj } from "@storybook/react";
import Range from "./Range";

const meta: Meta<typeof Range> = {
  title: "Components/Range", // Иерархия в сторибуке
  component: Range,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"], // Исключаем className из контролов
    },
    docs: {
      description: {
        component:
          "Компонент Range для выбора значений с ползунком или шагами.",
      },
    },
  },
  argTypes: {
    onChange: { action: "onChange" }, // Логируем вызов onChange
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
  },
};

export default meta;
type Story = StoryObj<typeof Range>;

// 📊 История для ползунка (range)
export const Default: Story = {
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

// 📋 История для выбора из шагов (steps)
export const WithSteps: Story = {
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

export const WithGb: Story = {
  name: "Range with Gb",
  args: {
    product: {
      min: 0,
      max: 3,
      title: "Вариант доставки",
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

// ⚙️ История с кастомным расчетом
export const WithCalculation: Story = {
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

// 🔒 История с минимальными значениями
export const Minimal: Story = {
  name: "Minimal Range",
  args: {
    product: {
      min: 0,
      max: 10,
      title: "Rating",
    },
  },
};

// 🎨 История с кастомным классом
export const CustomStyled: Story = {
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
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", background: "#f0f0f0" }}>
        <Story />
      </div>
    ),
  ],
};
