import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";
import type { SelectMultipleValue, SelectOption, SelectValue } from "./types";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Универсальный компонент выбора с поддержкой различных форматов данных, мульти-выбора и кастомизации.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Текущее значение (строка или число)",
      table: {
        type: { summary: "string | number | (string | number)[]" },
      },
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения значения",
      table: {
        type: {
          summary: "(value: string | number | (string | number)[]) => void",
        },
      },
    },
    options: {
      description: "Опции для выбора в различных форматах",
      control: { type: "object" },
      table: {
        type: {
          summary:
            "SelectOption[] | Record<string, string> | (string | number)[]",
        },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Текст-плейсхолдер при отсутствии выбора",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: '"Select an option"' },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Отключенное состояние компонента",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    direction: {
      control: { type: "select" },
      options: ["auto", "top", "bottom"],
      description: "Направление открытия выпадающего списка",
      table: {
        type: { summary: '"auto" | "top" | "bottom"' },
        defaultValue: { summary: '"auto"' },
      },
    },
    maxHeight: {
      control: { type: "text" },
      description: "Максимальная высота выпадающего списка (px, vh, %)",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: '"50vh"' },
      },
    },
    showArrow: {
      control: { type: "boolean" },
      description: "Показывать стрелку раскрытия",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    multiple: {
      control: { type: "boolean" },
      description: "Режим множественного выбора",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    noOptionsMessage: {
      control: { type: "text" },
      description: "Сообщение при отсутствии опций",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: '"No options"' },
      },
    },
    image: {
      control: { type: "text" },
      description: "URL изображения для отображения в кнопке",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Дополнительные CSS классы",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

// Примеры опций в разных форматах
const objectOptions: SelectOption[] = [
  { value: "ru", label: "Русский" },
  { value: "en", label: "Английский" },
  { value: "es", label: "Испанский" },
  { value: "fr", label: "Французский", disabled: true },
  { value: "de", label: "Немецкий" },
  { value: "it", label: "Итальянский" },
  { value: "jp", label: "Японский" },
  { value: "cn", label: "Китайский" },
];

const recordOptions = {
  small: "Маленький",
  medium: "Средний",
  large: "Большой",
  xlarge: "Очень большой",
  xxlarge: "Гигантский",
};

const arrayOptions = ["Опция 1", "Опция 2", "Опция 3", "Опция 4", "Опция 5"];

const complexOptions: SelectOption[] = [
  { value: "new", label: "🆕 Новый", disabled: false },
  { value: "in_progress", label: "⏳ В процессе" },
  { value: "review", label: "👁‍🗨 На проверке" },
  { value: "done", label: "✅ Завершено" },
  { value: "archived", label: "📁 Архивировано", disabled: true },
];

// Компонент с состоянием для интерактивных историй
const SelectWithState = (args: React.ComponentProps<typeof Select>) => {
  const [value, setValue] = useState(args.value);
  return <Select {...args} value={value} onChange={setValue} />;
};

const MultipleSelectWithState = (args: React.ComponentProps<typeof Select>) => {
  const [value, setValue] = useState<SelectMultipleValue>(
    Array.isArray(args.value) ? args.value : []
  );

  const handleChange = (next: SelectValue | SelectMultipleValue) => {
    if (Array.isArray(next)) {
      setValue(next);
    }
  };

  return <Select {...args} multiple value={value} onChange={handleChange} />;
};

export const Default: Story = {
  render: SelectWithState,
  args: {
    options: objectOptions,
    placeholder: "Выберите язык",
  },
  parameters: {
    docs: {
      description: {
        story: "Базовый пример использования Select с массивом объектов.",
      },
    },
  },
};

export const WithInitialValue: Story = {
  render: SelectWithState,
  name: "With Initial Value",
  args: {
    options: objectOptions,
    value: "en",
    placeholder: "Язык по умолчанию - английский",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с предварительно выбранным значением.",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "Использование объекта Record<string, string> в качестве опций.",
      },
    },
  },
};

export const WithArrayOptions: Story = {
  render: SelectWithState,
  name: "With Array Options",
  args: {
    options: arrayOptions,
    value: "Опция 2",
    placeholder: "Выберите опцию из массива",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Использование массива примитивов (string или number) в качестве опций.",
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  render: SelectWithState,
  name: "With Disabled Options",
  args: {
    options: objectOptions,
    placeholder: "Некоторые опции недоступны",
  },
  parameters: {
    docs: {
      description: {
        story: "Пример с отключенными опциями (французский язык недоступен).",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    options: objectOptions,
    value: "en",
    disabled: true,
    placeholder: "Выбор отключен",
  },
  parameters: {
    docs: {
      description: {
        story: "Полностью отключенный компонент Select.",
      },
    },
  },
};

export const WithImage: Story = {
  render: SelectWithState,
  name: "With Image",
  args: {
    options: objectOptions,
    image: "https://flagcdn.com/w40/ru.png",
    placeholder: "Выберите язык с флагом",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с изображением (например, флагом страны).",
      },
    },
  },
};

export const CustomDirectionTop: Story = {
  render: SelectWithState,
  name: "Top Direction",
  args: {
    options: objectOptions,
    direction: "top",
    placeholder: "Список открывается вверх",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с принудительным открытием списка вверх.",
      },
    },
  },
};

export const CustomDirectionBottom: Story = {
  render: SelectWithState,
  name: "Bottom Direction",
  args: {
    options: objectOptions,
    direction: "bottom",
    placeholder: "Список открывается вниз",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с принудительным открытием списка вниз.",
      },
    },
  },
};

export const CustomMaxHeight: Story = {
  render: SelectWithState,
  name: "Custom Max Height",
  args: {
    options: Array.from({ length: 30 }, (_, i) => ({
      value: i,
      label: `Опция ${i + 1}`,
    })),
    maxHeight: "150px",
    placeholder: "Высота списка ограничена 150px",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с ограничением максимальной высоты выпадающего списка.",
      },
    },
  },
};

export const ManyOptions: Story = {
  render: SelectWithState,
  name: "Many Options",
  args: {
    options: Array.from({ length: 50 }, (_, i) => ({
      value: i,
      label: `Опция ${i + 1} с длинным названием для демонстрации прокрутки`,
    })),
    maxHeight: "300px",
    placeholder: "Выберите из множества опций",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с большим количеством опций и вертикальной прокруткой.",
      },
    },
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: "Нет доступных опций",
    noOptionsMessage: "Опции не найдены",
  },
  parameters: {
    docs: {
      description: {
        story: "Состояние компонента при отсутствии опций для выбора.",
      },
    },
  },
};

export const CustomNoOptionsMessage: Story = {
  args: {
    options: [],
    placeholder: "Выберите что-нибудь",
    noOptionsMessage: "😔 К сожалению, опций пока нет",
  },
  parameters: {
    docs: {
      description: {
        story: "Кастомное сообщение при отсутствии опций.",
      },
    },
  },
};

export const SingleOption: Story = {
  args: {
    options: [{ value: "only", label: "Единственная опция" }],
    placeholder: "Доступна только одна опция",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с единственной доступной опцией.",
      },
    },
  },
};

export const WithoutArrow: Story = {
  render: SelectWithState,
  name: "Without Arrow",
  args: {
    options: objectOptions,
    showArrow: false,
    placeholder: "Стрелка скрыта",
  },
  parameters: {
    docs: {
      description: {
        story: "Select без стрелки раскрытия.",
      },
    },
  },
};

export const MultipleSelect: Story = {
  render: MultipleSelectWithState,
  name: "Multiple Select",
  args: {
    options: objectOptions,
    multiple: true,
    placeholder: "Выберите языки",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Select в режиме множественного выбора с возможностью выбора нескольких опций.",
      },
    },
  },
};

export const MultipleSelectWithValues: Story = {
  render: MultipleSelectWithState,
  name: "Multiple Select With Values",
  args: {
    options: objectOptions,
    multiple: true,
    value: ["ru", "en"],
    placeholder: "Уже выбраны русский и английский",
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple select с предварительно выбранными значениями.",
      },
    },
  },
};

export const ComplexLabels: Story = {
  render: SelectWithState,
  name: "Complex Labels",
  args: {
    options: complexOptions,
    placeholder: "Выберите статус",
  },
  parameters: {
    docs: {
      description: {
        story: "Select с комплексными лейблами (эмодзи и текст).",
      },
    },
  },
};

export const FullWidth: Story = {
  render: SelectWithState,
  name: "Full Width",
  args: {
    options: objectOptions,
    placeholder: "Select на всю ширину контейнера",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "600px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Select занимает всю доступную ширину родительского контейнера.",
      },
    },
  },
};

// Playground - полностью интерактивная история
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: objectOptions,
    placeholder: "Настройте меня в Controls панели",
  },
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивная песочница для тестирования различных параметров Select.",
      },
    },
  },
};
