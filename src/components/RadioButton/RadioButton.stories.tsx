import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Si el radio button está seleccionado",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Si el radio button está deshabilitado",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    label: {
      control: "text",
      description: "Texto a mostrar junto al radio button",
    },
    error: {
      control: "boolean",
      description: "Si el radio button está en estado de error",
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
      description:
        "Evento que se dispara al cambiar el estado del radio button",
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// RadioButton básico con controles interactivos
export const Default: Story = {
  args: {
    label: "Lorem ipsum",
  },
};

// RadioButton seleccionado
export const Checked: Story = {
  args: {
    label: "Lorem ipsum",
    checked: true,
  },
};

// RadioButton deshabilitado
export const Disabled: Story = {
  args: {
    label: "Lorem ipsum",
    disabled: true,
  },
};

// RadioButton seleccionado y deshabilitado
export const CheckedDisabled: Story = {
  args: {
    label: "Lorem ipsum",
    checked: true,
    disabled: true,
  },
};

// RadioButton con error
export const Error: Story = {
  args: {
    label: "Lorem ipsum",
    error: true,
    errorMessage: "Error message",
  },
};

// Grupo de RadioButtons
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState("option1");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "280px",
        }}
      >
        <RadioButton
          label="Opción 1"
          name="radio-group"
          value="option1"
          checked={selected === "option1"}
          onChange={() => setSelected("option1")}
        />
        <RadioButton
          label="Opción 2"
          name="radio-group"
          value="option2"
          checked={selected === "option2"}
          onChange={() => setSelected("option2")}
        />
        <RadioButton
          label="Opción 3"
          name="radio-group"
          value="option3"
          checked={selected === "option3"}
          onChange={() => setSelected("option3")}
        />
      </div>
    );
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
      <RadioButton label="Estado normal" />
      <RadioButton
        label="Estado hover"
        style={{ backgroundColor: "#e5e5e5", borderColor: "#999" }}
      />
      <RadioButton label="Estado seleccionado" checked />
      <RadioButton
        label="Estado con error"
        error
        errorMessage="Error message"
      />
      <RadioButton label="Estado deshabilitado" disabled />
      <RadioButton
        label="Estado seleccionado y deshabilitado"
        checked
        disabled
      />
      <RadioButton
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
