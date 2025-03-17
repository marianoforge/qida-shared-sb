import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AlertToast } from "./AlertToast";

const meta = {
  title: "Components/AlertToast",
  component: AlertToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["informative", "success", "warning", "error"],
    },
    title: { control: "text" },
    message: { control: "text" },
    duration: { control: "number" },
    showIcon: { control: "boolean" },
  },
} satisfies Meta<typeof AlertToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Informative: Story = {
  args: {
    type: "informative",
    title: "Información",
    message: "Esta es una alerta informativa con detalles adicionales.",
    duration: 0, // No auto-cerrar en Storybook
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Operación exitosa",
    message: "Los cambios se han guardado correctamente.",
    duration: 0, // No auto-cerrar en Storybook
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Advertencia",
    message: "Esta acción podría tener consecuencias inesperadas.",
    duration: 0, // No auto-cerrar en Storybook
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error",
    message: "No se pudo completar la operación. Inténtalo de nuevo más tarde.",
    duration: 0, // No auto-cerrar en Storybook
  },
};

export const WithoutIcon: Story = {
  args: {
    type: "informative",
    title: "Sin icono",
    message: "Esta alerta se muestra sin icono.",
    showIcon: false,
    duration: 0, // No auto-cerrar en Storybook
  },
};

export const AllTypes: Story = {
  args: {
    type: "informative",
    title: "Alert Toast Types",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <AlertToast
        type="informative"
        title="Información"
        message="Esta es una alerta informativa."
        duration={0}
      />
      <AlertToast
        type="success"
        title="Operación exitosa"
        message="Los cambios se han guardado correctamente."
        duration={0}
      />
      <AlertToast
        type="warning"
        title="Advertencia"
        message="Esta acción podría tener consecuencias inesperadas."
        duration={0}
      />
      <AlertToast
        type="error"
        title="Error"
        message="No se pudo completar la operación."
        duration={0}
      />
    </div>
  ),
};
