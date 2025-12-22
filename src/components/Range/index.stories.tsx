import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Range from ".";

const meta: Meta<typeof Range> = {
  component: Range,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
    docs: {
      description: {
        component:
          "Компонент Range для выбора значений в указанном диапазоне с ползунком и кнопками min/max. Поддерживает два режима: непрерывный (range) и дискретный (steps).",
      },
    },
  },
  argTypes: {
    product: {
      description: "Объект продукта с настройками диапазона (для режима range)",
      control: "object",
    },
    steps: {
      description: "Массив шагов для дискретного выбора (для режима steps)",
      control: "object",
    },
    mode: {
      control: { type: "radio" },
      options: ["range", "steps"],
      description: "Режим работы: range (непрерывный) или steps (дискретный)",
      table: {
        type: { summary: "'range' | 'steps'" },
        defaultValue: { summary: "'range'" },
      },
    },
    step: {
      control: { type: "number", min: 0.1, max: 100, step: 0.1 },
      description: "Шаг изменения (для режима range)",
    },
    value: {
      control: { type: "number" },
      description: "Текущее значение (для режима range)",
    },
    stepValue: {
      control: "text",
      description: "Текущий выбранный шаг (id) (для режима steps)",
    },
    onChange: {
      description: "Обработчик изменения значения",
      table: {
        type: { summary: "(value: number | string) => void" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Range>;

// Компонент-обёртка для режима range
const RangeWithState = (args: any) => {
  const [value, setValue] = useState(args.value || args.product?.min || 0);
  return <Range {...args} value={value} onChange={setValue} />;
};

// Компонент-обёртка для режима steps
const StepsWithState = (args: any) => {
  const [stepValue, setStepValue] = useState(
    args.stepValue || args.steps?.[0]?.id || ""
  );
  return <Range {...args} stepValue={stepValue} onChange={setStepValue} />;
};

// Базовые примеры продуктов для режима range
const volumeProduct = {
  min: 0,
  max: 100,
  title: "Громкость",
  calculation: "дБ",
};

const brightnessProduct = {
  min: 1,
  max: 10,
  title: "Яркость",
  calculation: "уровень",
};

const temperatureProduct = {
  min: 16,
  max: 30,
  title: "Температура",
  calculation: "°C",
};

const priceProduct = {
  min: 0,
  max: 10000,
  title: "Цена",
  calculation: "₽",
};

// Примеры шагов для режима steps
const sizeSteps = [
  { id: "xs", name: "XS, размер" },
  { id: "s", name: "S, размер" },
  { id: "m", name: "M, размер" },
  { id: "l", name: "L, размер" },
  { id: "xl", name: "XL, размер" },
];

const quantitySteps = [
  { id: "1", name: "1 x, штука" },
  { id: "2", name: "2 x, штуки" },
  { id: "3", name: "3 x, штуки" },
  { id: "4", name: "4 x, штуки" },
  { id: "5", name: "5 x, штук" },
  { id: "6", name: "6 x, штук" },
];

const qualitySteps = [
  { id: "low", name: "Низкое, качество" },
  { id: "medium", name: "Среднее, качество" },
  { id: "high", name: "Высокое, качество" },
  { id: "ultra", name: "Ультра, качество" },
];

const ratingSteps = [
  { id: "1", name: "1 звезда, рейтинг" },
  { id: "2", name: "2 звезды, рейтинг" },
  { id: "3", name: "3 звезды, рейтинг" },
  { id: "4", name: "4 звезды, рейтинг" },
  { id: "5", name: "5 звёзд, рейтинг" },
];

// Сторисы для режима range (оригинальные)
export const Default: Story = {
  render: RangeWithState,
  args: {
    product: volumeProduct,
    step: 1,
    value: 50,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Базовый пример компонента Range для управления громкостью.",
      },
    },
  },
};

export const BrightnessControl: Story = {
  render: RangeWithState,
  name: "Brightness Control",
  args: {
    product: brightnessProduct,
    step: 1,
    value: 5,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range для управления яркостью с небольшим диапазоном.",
      },
    },
  },
};

export const TemperatureControl: Story = {
  render: RangeWithState,
  name: "Temperature Control",
  args: {
    product: temperatureProduct,
    step: 0.5,
    value: 22,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range для управления температурой с дробным шагом.",
      },
    },
  },
};

export const LargeStep: Story = {
  render: RangeWithState,
  args: {
    product: {
      min: 0,
      max: 100,
      title: "Прогресс",
      calculation: "%",
    },
    step: 10,
    value: 50,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range с большим шагом изменения.",
      },
    },
  },
};

// Сторисы для режима steps (новые)
export const SizeSelection: Story = {
  render: StepsWithState,
  name: "Size Selection (Steps)",
  args: {
    steps: sizeSteps,
    stepValue: "m",
    mode: "steps",
  },
  parameters: {
    docs: {
      description: {
        story: "Дискретный выбор размера одежды из фиксированных вариантов.",
      },
    },
  },
};

export const QuantityPicker: Story = {
  render: StepsWithState,
  name: "Quantity Picker (Steps)",
  args: {
    steps: quantitySteps,
    stepValue: "3",
    mode: "steps",
  },
  parameters: {
    docs: {
      description: {
        story: "Выбор количества товара из фиксированных значений.",
      },
    },
  },
};

export const QualitySelector: Story = {
  render: StepsWithState,
  name: "Quality Selector (Steps)",
  args: {
    steps: qualitySteps,
    stepValue: "medium",
    mode: "steps",
  },
  parameters: {
    docs: {
      description: {
        story: "Выбор качества из текстовых вариантов.",
      },
    },
  },
};

export const RatingSelector: Story = {
  render: StepsWithState,
  name: "Rating Selector (Steps)",
  args: {
    steps: ratingSteps,
    stepValue: "4",
    mode: "steps",
  },
  parameters: {
    docs: {
      description: {
        story: "Выбор рейтинга из звёздочек.",
      },
    },
  },
};

export const ManySteps: Story = {
  render: StepsWithState,
  name: "Many Steps",
  args: {
    steps: Array.from({ length: 12 }, (_, i) => ({
      id: `${i + 1}`,
      name: `${i + 1} месяц, подписка`,
    })),
    stepValue: "6",
    mode: "steps",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример с большим количеством шагов. На мобильных экранах последний шаг может скрываться.",
      },
    },
  },
};

// Примеры использования в контексте
export const ProductConfiguration: Story = {
  render: () => {
    const [size, setSize] = useState("m");
    const [quantity, setQuantity] = useState("1");
    const [brightness, setBrightness] = useState(5);

    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          maxWidth: "400px",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h3 style={{ margin: "0 0 20px 0", fontSize: "18px" }}>
          Конфигурация товара
        </h3>

        <div style={{ marginBottom: "25px" }}>
          <Range
            mode="steps"
            steps={sizeSteps}
            stepValue={size}
            onChange={setSize}
          />
          <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
            Выбран размер: <strong>{size.toUpperCase()}</strong>
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <Range
            mode="steps"
            steps={quantitySteps}
            stepValue={quantity}
            onChange={setQuantity}
          />
          <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
            Количество: <strong>{quantity} шт.</strong>
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <Range
            mode="range"
            product={{
              min: 1,
              max: 10,
              title: "Яркость подсветки",
              calculation: "уровень",
            }}
            value={brightness}
            onChange={setBrightness}
            step={1}
          />
          <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
            Уровень яркости: <strong>{brightness}/10</strong>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "15px",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "14px", color: "#666" }}>Конфигурация:</div>
          <div style={{ fontSize: "14px", textAlign: "right" }}>
            <div>
              Размер: <strong>{size.toUpperCase()}</strong>
            </div>
            <div>
              Количество: <strong>{quantity} шт.</strong>
            </div>
            <div>
              Яркость: <strong>{brightness}/10</strong>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример комплексной конфигурации товара с использованием обоих режимов Range.",
      },
    },
  },
};

// Продолжение оригинальных сторисов (с указанием режима)
export const PriceFilter: Story = {
  render: RangeWithState,
  name: "Price Filter",
  args: {
    product: priceProduct,
    step: 100,
    value: 5000,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range для фильтрации по цене с большим диапазоном.",
      },
    },
  },
};

export const WithoutCalculation: Story = {
  render: RangeWithState,
  name: "Without Calculation (Range)",
  args: {
    product: {
      min: 1,
      max: 5,
      title: "Рейтинг",
      calculation: "",
    },
    step: 0.5,
    value: 3.5,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range без блока calculation.",
      },
    },
  },
};

export const DisabledState: Story = {
  render: (args) => (
    <div style={{ opacity: 0.5, pointerEvents: "none" }}>
      <Range {...args} />
    </div>
  ),
  args: {
    product: volumeProduct,
    step: 1,
    value: 50,
    mode: "range",
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "Range в заблокированном состоянии.",
      },
    },
  },
};

export const AudioPlayerControls: Story = {
  render: () => {
    const [volume, setVolume] = useState(75);
    const [balance, setBalance] = useState(50);

    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          maxWidth: "400px",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h3 style={{ margin: "0 0 20px 0", fontSize: "18px" }}>
          Настройки аудио
        </h3>

        <div style={{ marginBottom: "25px" }}>
          <Range
            mode="range"
            product={{
              min: 0,
              max: 100,
              title: "Громкость",
              calculation: "%",
            }}
            value={volume}
            onChange={setVolume}
            step={1}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <Range
            mode="range"
            product={{
              min: 0,
              max: 100,
              title: "Баланс",
              calculation: "L/R",
            }}
            value={balance}
            onChange={setBalance}
            step={1}
          />
          <div
            style={{
              fontSize: "12px",
              color: "#666",
              marginTop: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>L {balance}</span>
            <span>R {100 - balance}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "15px",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "14px", color: "#666" }}>
            Текущие настройки:
          </div>
          <div style={{ fontSize: "14px" }}>
            <div>
              Громкость: <strong>{volume}%</strong>
            </div>
            <div>
              Баланс:{" "}
              <strong>
                {balance}L / {100 - balance}R
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример использования компонента Range в контексте аудио-плеера.",
      },
    },
  },
};

export const CustomProduct: Story = {
  render: RangeWithState,
  args: {
    product: {
      min: 2000,
      max: 2024,
      title: "Год выпуска",
      calculation: "год",
    },
    step: 1,
    value: 2020,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range с кастомными параметрами продукта.",
      },
    },
  },
};

export const AtMinValue: Story = {
  render: RangeWithState,
  name: "At Minimum Value",
  args: {
    product: {
      min: 0,
      max: 10,
      title: "Уровень",
      calculation: "",
    },
    step: 1,
    value: 0,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range установленный на минимальное значение.",
      },
    },
  },
};

export const AtMaxValue: Story = {
  render: RangeWithState,
  name: "At Maximum Value",
  args: {
    product: {
      min: 0,
      max: 10,
      title: "Уровень",
      calculation: "",
    },
    step: 1,
    value: 10,
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: "Range установленный на максимальное значение.",
      },
    },
  },
};
