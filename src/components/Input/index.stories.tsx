import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["type", "className"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Button: Story = {
  args: {
    type: "button",
    value: "Click me",
  },
};

export const Reset: Story = {
  args: {
    type: "reset",
    value: "Reset form",
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
    value: "Submit form",
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    checked: false,
    label: "Test",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
    checked: false,
  },
};

export const DateInput: Story = {
  args: {
    type: "date",
    value: "2024-01-01",
  },
};

export const DatetimeLocal: Story = {
  args: {
    type: "datetime-local",
    value: "2024-01-01T12:00",
  },
};

export const Month: Story = {
  args: {
    type: "month",
    value: "2024-01",
  },
};

export const Week: Story = {
  args: {
    type: "week",
    value: "2024-W01",
  },
};

export const Time: Story = {
  args: {
    type: "time",
    value: "12:30",
  },
};

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
    src: "https://peerobyte.com/wp-content/uploads/2025/11/iaas.png",
    alt: "Image Button",
    width: 100,
    height: 100,
  },
};

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
    value: "#1eff00",
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
    placeholder: "Search...",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "+1 234 567 890",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const Url: Story = {
  args: {
    type: "url",
    placeholder: "https://example.com",
  },
};

export const Hidden: Story = {
  args: {
    type: "hidden",
    value: "secret-value",
  },
};
