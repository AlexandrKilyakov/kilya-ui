import type { Meta, StoryObj } from "@storybook/react";
import ButtonClose from "./ButtonClose";

const meta: Meta<typeof ButtonClose> = {
  title: "Components/ButtonClose",
  component: ButtonClose,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["className"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonClose>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
