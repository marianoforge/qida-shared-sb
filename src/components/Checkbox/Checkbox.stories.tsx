import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Si el checkbox está seleccionado",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Si el checkbox está deshabilitado",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    label: {
      control: "text",
      description: "Texto a mostrar junto al checkbox",
    },
    error: {
      control: "boolean",
      description: "Si el checkbox está en estado de error",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    errorMessage: {
      control: "text",
      description: "Mensaje de error a mostrar",
    },
    onChange: {
      action: "changed",
      description: "Evento que se dispara al cambiar el estado del checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Checkbox básico con controles interactivos
export const Default: Story = {
  args: {
    label: "Lorem ipsum",
  },
};

// Checkbox seleccionado
export const Checked: Story = {
  args: {
    label: "Lorem ipsum",
    checked: true,
  },
};

// Checkbox deshabilitado
export const Disabled: Story = {
  args: {
    label: "Lorem ipsum",
    disabled: true,
  },
};

// Checkbox seleccionado y deshabilitado
export const CheckedDisabled: Story = {
  args: {
    label: "Lorem ipsum",
    checked: true,
    disabled: true,
  },
};

// Checkbox con error
export const Error: Story = {
  args: {
    label: "Lorem ipsum",
    error: true,
    errorMessage: "Error message",
  },
};

// Todos los estados
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "280px",
      }}
    >
      <Checkbox label="Estado normal" />
      <Checkbox
        label="Estado hover"
        style={{ backgroundColor: "#e5e5e5", borderColor: "#999" }}
      />
      <Checkbox label="Estado seleccionado" checked />
      <Checkbox label="Estado con error" error errorMessage="Error message" />
      <Checkbox label="Estado deshabilitado" disabled />
      <Checkbox label="Estado seleccionado y deshabilitado" checked disabled />
      <Checkbox
        label="Estado focus"
        style={{
          border: "4px solid #8aa7a4",
          height: "52px",
          padding: "6px 14px 6px 6px",
        }}
      />
    </div>
  ),
};
