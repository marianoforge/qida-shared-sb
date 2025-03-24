import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { PlusIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary-200",
        "primary-400",
        "primary-500",
        "primary-600",
        "secondary-default",
        "secondary-primary",
        "secondary-primary-light",
        "secondary-primary-dark",
        "secondary-thick-border",
        "tertiary-default",
        "tertiary-primary",
        "tertiary-primary-light",
        "tertiary-primary-dark",
        "icon-primary-200",
        "icon-primary-400",
        "icon-primary-500",
        "icon-primary-600",
        "icon-bordered-default",
        "icon-bordered-primary",
        "icon-bordered-primary-light",
        "icon-bordered-primary-dark",
        "icon-transparent",
        "icon-neutral-200",
        "icon-neutral-300",
        "icon-neutral-100",
        "fab-primary-200",
        "fab-primary-400",
        "fab-primary-500",
        "fab-primary-600",
      ],
      description: "Estilo visual del botón",
      table: {
        defaultValue: { summary: "primary-500" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "fab-sm", "fab-lg"],
      description: "Tamaño del botón",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el botón",
    },
    fullWidth: {
      control: "boolean",
      description: "El botón ocupa todo el ancho disponible",
    },
    bordered: {
      control: "boolean",
      description: "El botón tiene un borde",
    },
    startIcon: {
      control: "boolean",
      description: "Muestra un icono al inicio",
    },
    endIcon: {
      control: "boolean",
      description: "Muestra un icono al final",
    },
    iconOnly: {
      control: "boolean",
      description: "Si el botón es solo un icono",
    },
    isFab: {
      control: "boolean",
      description: "Si el botón es un FAB",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Botón básico con controles
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary-500",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-17&mode=dev",
    },
  },
};

// Botón con icono a la derecha
export const WithEndIcon: Story = {
  args: {
    children: "Button with Icon",
    variant: "primary-500",
    size: "md",
    endIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-23&mode=dev",
    },
  },
};

// Botón con icono a la izquierda
export const WithStartIcon: Story = {
  args: {
    children: "Button with Icon",
    variant: "primary-500",
    size: "md",
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-24&mode=dev",
    },
  },
};

// Botón con borde
export const Bordered: Story = {
  args: {
    children: "Bordered Button",
    variant: "primary-500",
    size: "md",
    bordered: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-25&mode=dev",
    },
  },
};

// Botón ancho
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary-500",
    size: "md",
    fullWidth: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-26&mode=dev",
    },
  },
};

// Secondary Variants
export const SecondaryDefault: Story = {
  args: {
    children: "Secondary Default",
    variant: "secondary-default",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-27&mode=dev",
    },
  },
};

export const SecondaryPrimary: Story = {
  args: {
    children: "Secondary Primary",
    variant: "secondary-primary",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-28&mode=dev",
    },
  },
};

export const SecondaryThickBorder: Story = {
  args: {
    children: "Secondary Thick Border",
    variant: "secondary-thick-border",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-29&mode=dev",
    },
  },
};

// Tertiary Variants
export const TertiaryDefault: Story = {
  args: {
    children: "Tertiary Default",
    variant: "tertiary-default",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-30&mode=dev",
    },
  },
};

export const TertiaryPrimary: Story = {
  args: {
    children: "Tertiary Primary",
    variant: "tertiary-primary",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-31&mode=dev",
    },
  },
};

export const TertiaryPrimaryLight: Story = {
  args: {
    children: "Tertiary Primary Light",
    variant: "tertiary-primary-light",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-32&mode=dev",
    },
  },
};

export const TertiaryPrimaryDark: Story = {
  args: {
    children: "Tertiary Primary Dark",
    variant: "tertiary-primary-dark",
    size: "md",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-33&mode=dev",
    },
  },
};

// Icon Button Variants
export const IconPrimary500: Story = {
  args: {
    variant: "icon-primary-500",
    size: "md",
    iconOnly: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-34&mode=dev",
    },
  },
};

export const IconBorderedPrimary: Story = {
  args: {
    variant: "icon-bordered-primary",
    size: "md",
    iconOnly: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-35&mode=dev",
    },
  },
};

export const IconTransparent: Story = {
  args: {
    variant: "icon-transparent",
    size: "md",
    iconOnly: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-36&mode=dev",
    },
  },
};

export const IconNeutral200: Story = {
  args: {
    variant: "icon-neutral-200",
    size: "md",
    iconOnly: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-37&mode=dev",
    },
  },
};

// FAB Button Variants
export const FabPrimary500Small: Story = {
  args: {
    variant: "fab-primary-500",
    size: "fab-sm",
    iconOnly: true,
    isFab: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-38&mode=dev",
    },
  },
};

export const FabPrimary500Large: Story = {
  args: {
    variant: "fab-primary-500",
    size: "fab-lg",
    iconOnly: true,
    isFab: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-39&mode=dev",
    },
  },
};

export const FabPrimary200Small: Story = {
  args: {
    variant: "fab-primary-200",
    size: "fab-sm",
    iconOnly: true,
    isFab: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-40&mode=dev",
    },
  },
};

export const FabPrimary600Large: Story = {
  args: {
    variant: "fab-primary-600",
    size: "fab-lg",
    iconOnly: true,
    isFab: true,
    startIcon: <PlusIcon />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ivoOZA4k78cU21qygb04FI/00.-Sistema-de-Dise%C3%B1o?node-id=2172-41&mode=dev",
    },
  },
};
