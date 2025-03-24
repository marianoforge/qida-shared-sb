import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto a mostrar dentro del chip",
    },
    disabled: {
      control: "boolean",
      description: "Si el chip está deshabilitado",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    closable: {
      control: "boolean",
      description: "Si tiene un botón de cierre",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onClose: {
      action: "closed",
      description:
        "Función que se ejecuta al hacer click en el botón de cierre",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Chip básico con controles interactivos
export const Default: Story = {
  args: {
    label: "Label",
  },
};

// Chip sin botón de cierre
export const WithoutClose: Story = {
  args: {
    label: "Label",
    closable: false,
  },
};

// Chip deshabilitado
export const Disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
  },
};

// Todos los estados
export const AllStates: Story = {
  args: {
    label: "Label",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "280px",
      }}
    >
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Chip label="Enabled" />
        <Chip label="Hovered" style={{ backgroundColor: "#e5e5e5" }} />
        <Chip
          label="Focused"
          style={{
            border: "4px solid #8aa7a4",
            padding: "0px 4px",
            height: "28px",
          }}
        />
        <Chip label="Disabled" disabled />
      </div>
    </div>
  ),
};

// Múltiples chips
export const ChipGroup: Story = {
  args: {
    label: "Label",
  },
  render: (args) => {
    const [chips, setChips] = React.useState([
      { id: 1, label: "React" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "CSS" },
      { id: 4, label: "Storybook" },
    ]);

    const handleClose = (id: number) => {
      setChips(chips.filter((chip) => chip.id !== id));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
          width: "300px",
        }}
      >
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.label}
            onClose={() => handleClose(chip.id)}
          />
        ))}
      </div>
    );
  },
};
