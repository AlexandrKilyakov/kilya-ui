import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

/* =========================
   Playground
========================= */

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    disabled: false,
  },
};

/* =========================
   Button-like inputs
========================= */

export const Button: Story = {
  args: {
    type: "button",
    value: "Click me",
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
    value: "Submit form",
  },
};

export const Reset: Story = {
  args: {
    type: "reset",
    value: "Reset form",
  },
};

/* =========================
   Checkable inputs
========================= */

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    label: "Checkbox",
    defaultChecked: true,
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
    label: "Radio",
    defaultChecked: true,
  },
};

/* =========================
   Date & time inputs
========================= */

export const Date: Story = {
  args: {
    type: "date",
    defaultValue: "2024-01-01",
  },
};

export const DatetimeLocal: Story = {
  args: {
    type: "datetime-local",
    defaultValue: "2024-01-01T12:00",
  },
};

export const Month: Story = {
  args: {
    type: "month",
    defaultValue: "2024-01",
  },
};

export const Week: Story = {
  args: {
    type: "week",
    defaultValue: "2024-W01",
  },
};

export const Time: Story = {
  args: {
    type: "time",
    defaultValue: "12:30",
  },
};

/* =========================
   File & media inputs
========================= */

export const File: Story = {
  args: {
    type: "file",
    accept: "image/*",
    multiple: true,
  },
};

export const Image: Story = {
  args: {
    type: "image",
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='%23007aff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='12'>Image</text></svg>",
    alt: "Image input",
  },
};

/* =========================
   Numeric inputs
========================= */

export const Range: Story = {
  args: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 5,
  },
};

export const Color: Story = {
  args: {
    type: "color",
    defaultValue: "#1eff00",
  },
};

/* =========================
   Text inputs
========================= */

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "example@mail.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "•••••••",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search…",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "+1 234 567 890",
  },
};

export const Url: Story = {
  args: {
    type: "url",
    placeholder: "https://example.com",
  },
};
