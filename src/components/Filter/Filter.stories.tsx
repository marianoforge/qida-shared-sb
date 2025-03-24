import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";
import { SliderIcon } from "../Icons";

const meta = {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto del filtro",
    },
    disabled: {
      control: "boolean",
      description: "Si el filtro está deshabilitado",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic en el filtro",
    },
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Filtro básico
export const Default: Story = {
  args: {
    label: "Filter",
    icon: <SliderIcon />,
  },
};

// Estados del filtro
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Filter label="Enabled" icon={<SliderIcon />} />
        <div style={{ fontSize: "14px" }}>Estado normal</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Filter
          label="Hover"
          icon={<SliderIcon />}
          style={{ backgroundColor: "#e5e5e5" }}
        />
        <div style={{ fontSize: "14px" }}>Estado hover</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Filter
          label="Pressed"
          icon={<SliderIcon />}
          style={{ backgroundColor: "#ccc" }}
        />
        <div style={{ fontSize: "14px" }}>Estado presionado</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Filter label="Disabled" icon={<SliderIcon />} disabled />
        <div style={{ fontSize: "14px" }}>Estado deshabilitado</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Filter
          label="Focused"
          icon={<SliderIcon />}
          style={{ border: "4px solid #8aa7a4", padding: "5px 21px 5px 13px" }}
        />
        <div style={{ fontSize: "14px" }}>Estado enfocado</div>
      </div>
    </div>
  ),
};

// Filtro sin icono
export const WithoutIcon: Story = {
  args: {
    label: "Filter",
    icon: undefined,
  },
};

// Filtro con texto largo
export const LongLabel: Story = {
  args: {
    label: "Filter with very long text",
    icon: <SliderIcon />,
  },
};

// Ejemplo de uso
export const Usage: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <h3 style={{ margin: 0 }}>Filtros en una barra de herramientas</h3>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Filter label="Date" icon={<SliderIcon />} />
        <Filter label="Category" icon={<SliderIcon />} />
        <Filter label="Status" icon={<SliderIcon />} />
        <Filter
          label="Location"
          icon={<SliderIcon />}
          style={{ backgroundColor: "#e5e5e5" }}
        />
      </div>
    </div>
  ),
};
