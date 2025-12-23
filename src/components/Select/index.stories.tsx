import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Универсальный компонент выбора с поддержкой различных форматов данных.",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "Текущее значение",
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения значения",
    },
    options: {
      description: "Опции для выбора",
      control: "object",
    },
    placeholder: {
      control: "text",
      description: "Плейсхолдер при отсутствии выбора",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    direction: {
      control: "select",
      options: ["auto", "top", "bottom"],
      description: "Направление открытия dropdown",
    },
    maxHeight: {
      control: "text",
      description: "Максимальная высота dropdown",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Примеры опций
const objectOptions = [
  { value: "ru", label: "Русский" },
  { value: "en", label: "Английский" },
  { value: "es", label: "Испанский" },
  { value: "fr", label: "Французский" },
  { value: "de", label: "Немецкий" },
];

const recordOptions = {
  small: "Маленький",
  medium: "Средний",
  large: "Большой",
  xlarge: "Очень большой",
};

const arrayOptions = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];

// Компонент с состоянием для интерактивных историй
const SelectWithState = (args: any) => {
  const [value, setValue] = useState(args.value);
  return <Select {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: SelectWithState,
  args: {
    options: objectOptions,
    placeholder: "Выберите язык",
  },
};

export const WithRecordOptions: Story = {
  render: SelectWithState,
  name: "With Record Options",
  args: {
    options: recordOptions,
    value: "medium",
    placeholder: "Выберите размер",
  },
};

export const WithArrayOptions: Story = {
  render: SelectWithState,
  name: "With Array Options",
  args: {
    options: arrayOptions,
    placeholder: "Выберите опцию",
  },
};

export const Disabled: Story = {
  args: {
    options: objectOptions,
    value: "en",
    disabled: true,
  },
};

export const WithImage: Story = {
  render: SelectWithState,
  name: "With Image",
  args: {
    options: objectOptions,
    image:
      "https://i.pinimg.com/originals/ea/e0/b4/eae0b42a7c7c387f409b6e5ef62d3ce5.jpg?nii=t",
    placeholder: "Выберите с иконкой",
  },
};

export const CustomDirection: Story = {
  render: SelectWithState,
  name: "Top Direction",
  args: {
    options: objectOptions,
    direction: "top",
    placeholder: "Открывается вверх",
  },
};

export const ManyOptions: Story = {
  render: SelectWithState,
  name: "Many Options",
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: i,
      label: `Опция ${i + 1}`,
    })),
    maxHeight: "200px",
    placeholder: "Выберите из многих опций",
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: "Нет доступных опций",
  },
};

export const SingleOption: Story = {
  args: {
    options: [{ value: "only", label: "Единственная опция" }],
    placeholder: "Только одна опция",
  },
};

export const MultipleSelect: Story = {
  render: SelectWithState,
  name: "Multiple Select",
  args: {
    options: objectOptions,
    multiple: true,
    placeholder: "Выберите языки",
  },
};
