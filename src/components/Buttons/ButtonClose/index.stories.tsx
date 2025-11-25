import type { Meta, StoryObj } from "@storybook/react";
import ButtonClose from "./ButtonClose";

const meta: Meta<typeof ButtonClose> = {
  component: ButtonClose,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonClose>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
