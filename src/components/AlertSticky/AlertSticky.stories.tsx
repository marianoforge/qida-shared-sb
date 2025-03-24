import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AlertSticky } from "./AlertSticky";

const meta: Meta<typeof AlertSticky> = {
  title: "Components/AlertSticky",
  component: AlertSticky,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["informative", "success", "warning", "error"],
      description: "Tipo de alerta",
      table: {
        defaultValue: { summary: "informative" },
      },
    },
    message: {
      control: "text",
      description: "Mensaje principal de la alerta",
    },
    linkText: {
      control: "text",
      description: "Texto del enlace (opcional)",
    },
    showCloseButton: {
      control: "boolean",
      description: "Mostrar el botón de cierre",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    position: {
      control: "radio",
      options: ["top", "bottom"],
      description: "Posición del AlertSticky",
      table: {
        defaultValue: { summary: "top" },
      },
    },
    autoCloseAfter: {
      control: "number",
      description: "Auto-cierre después de X milisegundos (0 para desactivar)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertSticky>;

// Historia básica - Informative
export const Informative: Story = {
  args: {
    type: "informative",
    message: "Lorem ipsum dolor sit amet consectetur.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};

// Success
export const Success: Story = {
  args: {
    type: "success",
    message: "Lorem ipsum dolor sit amet consectetur.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};

// Warning
export const Warning: Story = {
  args: {
    type: "warning",
    message: "Lorem ipsum dolor sit amet consectetur.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};

// Error
export const Error: Story = {
  args: {
    type: "error",
    message: "Lorem ipsum dolor sit amet consectetur.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};

// Multi-line
export const MultiLine: Story = {
  args: {
    type: "informative",
    message:
      "Lorem ipsum dolor sit amet consectetur. Ut at amet amet aliquam sit donec pharetra pulvinar aliquet. Id eu mi adipiscing neque viverra. Adipiscing eu eu scelerisque tellus adipiscing ac. Non purus sit magna a massa.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};

// Sin enlace
export const WithoutLink: Story = {
  args: {
    type: "informative",
    message: "Lorem ipsum dolor sit amet consectetur.",
    linkText: undefined,
    showCloseButton: true,
    position: "top",
  },
};

// Sin botón de cierre
export const WithoutCloseButton: Story = {
  args: {
    type: "informative",
    message: "Esta alerta no tiene botón de cierre.",
    linkText: "Lorem ipsum",
    showCloseButton: false,
    position: "top",
  },
};

// Posición inferior
export const BottomPosition: Story = {
  args: {
    type: "informative",
    message: "Esta alerta aparece en la parte inferior de la pantalla.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "bottom",
  },
};

// Auto-cierre
export const AutoClose: Story = {
  args: {
    type: "success",
    message: "Esta alerta se cerrará automáticamente en 5 segundos.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
    autoCloseAfter: 5000,
  },
};

// Multiple alerts stacked
export const MultipleAlerts: Story = {
  render: () => (
    <div>
      <AlertSticky
        type="informative"
        message="Primera alerta informativa."
        linkText="Lorem ipsum"
        position="top"
      />
      <div style={{ marginTop: "60px" }}>
        <AlertSticky
          type="warning"
          message="Segunda alerta de advertencia."
          linkText="Lorem ipsum"
          position="top"
        />
      </div>
      <div style={{ marginTop: "120px" }}>
        <AlertSticky
          type="error"
          message="Tercera alerta de error."
          linkText="Lorem ipsum"
          position="top"
        />
      </div>
    </div>
  ),
};

// Mobile view
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    type: "informative",
    message: "Vista móvil de la alerta.",
    linkText: "Lorem ipsum",
    showCloseButton: true,
    position: "top",
  },
};
