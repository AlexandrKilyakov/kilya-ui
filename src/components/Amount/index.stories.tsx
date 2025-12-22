import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Amount from ".";

const meta: Meta<typeof Amount> = {
  component: Amount,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
    docs: {
      description: {
        component:
          "Компонент Amount для управления числовыми значениями с кнопками увеличения/уменьшения.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "Текущее значение",
    },
    min: {
      control: { type: "number", min: 0, max: 100 },
      description: "Минимальное значение",
    },
    max: {
      control: { type: "number", min: 1, max: 1000 },
      description: "Максимальное значение",
    },
    step: {
      control: { type: "number", min: 1, max: 100 },
      description: "Шаг изменения",
    },
    center: {
      control: "boolean",
      description: "Центрировать компонент",
    },
    onChange: {
      description: "Обработчик изменения значения",
      table: {
        type: { summary: "(value: number) => void" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Amount>;

// Компонент-обертка для управления состоянием
const AmountWithState = (args: any) => {
  const [value, setValue] = useState(args.value || args.min || 1);
  return <Amount {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: AmountWithState,
  args: {
    value: 5,
    min: 1,
    max: 10,
    step: 1,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Базовый пример использования компонента Amount.",
      },
    },
  },
};

export const Centered: Story = {
  render: AmountWithState,
  args: {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
    center: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с центрированием по горизонтали.",
      },
    },
  },
};

export const LargeStep: Story = {
  render: AmountWithState,
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 10,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с большим шагом изменения (10 единиц).",
      },
    },
  },
};

export const LimitedRange: Story = {
  render: AmountWithState,
  args: {
    value: 2,
    min: 2,
    max: 5,
    step: 1,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с ограниченным диапазоном значений (2-5).",
      },
    },
  },
};

export const ZeroMinimum: Story = {
  render: AmountWithState,
  name: "Zero Minimum",
  args: {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с минимальным значением 0.",
      },
    },
  },
};

export const WideRange: Story = {
  render: AmountWithState,
  args: {
    value: 500,
    min: 0,
    max: 1000,
    step: 100,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Amount с большим диапазоном значений. Обратите внимание на автоматическую ширину поля ввода.",
      },
    },
  },
};

export const SmallIncrement: Story = {
  render: AmountWithState,
  name: "Small Increment",
  args: {
    value: 1.5,
    min: 0,
    max: 5,
    step: 0.5,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с дробным шагом изменения (0.5).",
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
    center: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Amount без обработчика onChange - кнопки будут заблокированы.",
      },
    },
  },
};

export const DisabledButtons: Story = {
  render: (args) => <Amount {...args} />,
  args: {
    value: 1,
    min: 1,
    max: 1,
    step: 1,
    center: false,
    onChange: (value) => console.log("Changed to:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "Amount с заблокированными кнопками (min = max = 1).",
      },
    },
  },
};

// Демонстрация использования в контексте
export const InShoppingCart: Story = {
  render: () => {
    const [quantity, setQuantity] = useState(2);
    const price = 2499;

    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          maxWidth: "300px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
            Товар: Наушники
          </h3>
          <p style={{ margin: "0 0 15px 0", color: "#666", fontSize: "14px" }}>
            Выберите количество:
          </p>

          <Amount
            value={quantity}
            onChange={setQuantity}
            min={1}
            max={99}
            step={1}
            center={true}
          />
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
          <div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Итого:</div>
            <div style={{ fontSize: "14px", color: "#666" }}>
              {quantity} × {price.toLocaleString()} ₽
            </div>
          </div>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            {(quantity * price).toLocaleString()} ₽
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример использования компонента Amount в контексте корзины покупок.",
      },
    },
  },
};
