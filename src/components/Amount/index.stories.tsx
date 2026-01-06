import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Amount from ".";

const meta: Meta<typeof Amount> = {
  title: "Components/Amount",
  component: Amount,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
    docs: {
      description: {
        component:
          "Amount — контролируемый компонент для изменения числового значения с помощью кнопок и поля ввода.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "number" },
      description: "Текущее значение",
    },
    min: {
      control: { type: "number" },
      description: "Минимальное допустимое значение",
    },
    max: {
      control: { type: "number" },
      description: "Максимальное допустимое значение",
    },
    step: {
      control: { type: "number" },
      description: "Шаг изменения значения",
    },
    center: {
      control: "boolean",
      description: "Центрировать поле между кнопками",
    },
    onInput: {
      description: "Колбэк при изменении значения",
      table: {
        type: { summary: "(value: number) => void" },
      },
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Amount>;

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

const StateWrapper = (args: React.ComponentProps<typeof Amount>) => {
  const [value, setValue] = useState(
    typeof args.value === "number" ? args.value : args.min ?? 1
  );

  return <Amount {...args} value={value} onInput={setValue} />;
};

/* ------------------------------------------------------------------ */
/* Base examples                                                       */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  render: StateWrapper,
  args: {
    value: 5,
    min: 1,
    max: 10,
    step: 1,
    center: false,
  },
};

export const Centered: Story = {
  render: StateWrapper,
  args: {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
    center: true,
  },
};

/* ------------------------------------------------------------------ */
/* Step & range                                                        */
/* ------------------------------------------------------------------ */

export const LargeStep: Story = {
  render: StateWrapper,
  name: "Large step",
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 10,
  },
};

export const FractionalStep: Story = {
  render: StateWrapper,
  name: "Fractional step",
  args: {
    value: 1.5,
    min: 0,
    max: 5,
    step: 0.5,
  },
};

export const LimitedRange: Story = {
  render: StateWrapper,
  args: {
    value: 2,
    min: 2,
    max: 5,
    step: 1,
  },
};

export const WideRange: Story = {
  render: StateWrapper,
  args: {
    value: 500,
    min: 0,
    max: 1000,
    step: 100,
  },
};

/* ------------------------------------------------------------------ */
/* Edge cases                                                          */
/* ------------------------------------------------------------------ */

export const ZeroMinimum: Story = {
  render: StateWrapper,
  args: {
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "Без `onInput` компонент отображается, но не изменяет значение.",
      },
    },
  },
};

export const DisabledButtons: Story = {
  render: StateWrapper,
  args: {
    value: 1,
    min: 1,
    max: 1,
    step: 1,
  },
};

/* ------------------------------------------------------------------ */
/* Real-world example                                                  */
/* ------------------------------------------------------------------ */

export const InShoppingCart: Story = {
  render: () => {
    const [quantity, setQuantity] = useState(2);
    const price = 2499;

    return (
      <div
        style={{
          padding: 16,
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          maxWidth: 320,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h3 style={{ marginBottom: 8 }}>Наушники</h3>
        <p style={{ marginBottom: 12, color: "#666" }}>Количество:</p>

        <Amount
          value={quantity}
          onInput={setQuantity}
          min={1}
          max={99}
          step={1}
          center
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
            paddingTop: 12,
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <div>
            <div>Итого</div>
            <small>
              {quantity} × {price.toLocaleString()} ₽
            </small>
          </div>
          <strong>{(quantity * price).toLocaleString()} ₽</strong>
        </div>
      </div>
    );
  },
};
