import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

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
  },
};

export const Reset: Story = {
  args: {
    type: "reset",
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
  },
};

export const Date: Story = {
  args: {
    type: "date",
  },
};

export const DatetimeLocal: Story = {
  args: {
    type: "datetime-local",
  },
};

export const Month: Story = {
  args: {
    type: "month",
  },
};

export const Week: Story = {
  args: {
    type: "week",
  },
};

export const Time: Story = {
  args: {
    type: "time",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Image: Story = {
  args: {
    type: "image",
  },
};

export const Range: Story = {
  args: {
    type: "range",
  },
};

export const Color: Story = {
  args: {
    type: "color",
  },
};

export const Email: Story = {
  args: {
    type: "email",
  },
};

export const Number: Story = {
  args: {
    type: "number",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const Search: Story = {
  args: {
    type: "search",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
  },
};

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Url: Story = {
  args: {
    type: "url",
  },
};

export const Hidden: Story = {
  args: {
    type: "hidden",
  },
};
