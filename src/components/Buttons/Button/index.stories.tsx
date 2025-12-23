import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    button: {
      control: "select",
      options: [
        "default",
        "outlined",
        "ghost",
        "text",
        "link",
        "white",
        "reset",
      ],
      description: "Тип кнопки",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Состояние disabled",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML type атрибут",
      table: {
        defaultValue: { summary: "button" },
      },
    },
    children: {
      control: "text",
      description: "Содержимое кнопки",
      table: {
        defaultValue: { summary: "Кнопка" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
    },
  },
  parameters: {
    controls: {
      exclude: ["className"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "button",
    button: "default",
    disabled: false,
    children: "Кнопка по умолчанию",
  },
};

export const Outlined: Story = {
  args: {
    type: "button",
    button: "outlined",
    disabled: false,
    children: "Контурная кнопка",
  },
};

export const Ghost: Story = {
  args: {
    type: "button",
    button: "ghost",
    disabled: false,
    children: "Призрачная кнопка",
  },
};

export const Text: Story = {
  args: {
    type: "button",
    button: "text",
    disabled: false,
    children: "Текстовая кнопка",
  },
};

export const Link: Story = {
  args: {
    type: "button",
    button: "link",
    disabled: false,
    children: "Ссылка",
  },
};

export const White: Story = {
  args: {
    type: "button",
    button: "white",
    disabled: false,
    children: "Белая кнопка",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Reset: Story = {
  args: {
    type: "button",
    button: "reset",
    disabled: false,
    children: "Сброс",
  },
};

export const Disabled: Story = {
  args: {
    type: "button",
    button: "default",
    disabled: true,
    children: "Отключенная кнопка",
  },
};

export const WithIcon: Story = {
  args: {
    type: "button",
    button: "default",
    disabled: false,
    children: (
      <>
        <span>Кнопка с иконкой</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4L12 8L8 12L4 8L8 4Z" />
        </svg>
      </>
    ),
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
    button: "default",
    disabled: false,
    children: "Отправить",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        maxWidth: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button {...args} button="default">
          Default
        </Button>
        <Button {...args} button="outlined">
          Outlined
        </Button>
        <Button {...args} button="ghost">
          Ghost
        </Button>
        <Button {...args} button="text">
          Text
        </Button>
        <Button {...args} button="link">
          Link
        </Button>
        <Button {...args} button="white">
          White
        </Button>
        <Button {...args} button="reset">
          Reset
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button {...args} button="default" disabled>
          Default
        </Button>
        <Button {...args} button="outlined" disabled>
          Outlined
        </Button>
        <Button {...args} button="ghost" disabled>
          Ghost
        </Button>
        <Button {...args} button="text" disabled>
          Text
        </Button>
        <Button {...args} button="link" disabled>
          Link
        </Button>
        <Button {...args} button="white" disabled>
          White
        </Button>
        <Button {...args} button="reset" disabled>
          Reset
        </Button>
      </div>
    </div>
  ),
  args: {
    type: "button",
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: ["button", "disabled", "children", "type"],
    },
  },
};
