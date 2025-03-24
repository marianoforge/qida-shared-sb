import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChartPie } from "./ChartPie";

const meta = {
  title: "Components/ChartPie",
  component: ChartPie,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Tamaño del gráfico",
      table: {
        defaultValue: { summary: "sm" },
      },
    },
    colors: {
      control: "select",
      options: [2, 3],
      description: "Número de colores en el gráfico",
      table: {
        defaultValue: { summary: "2" },
      },
    },
    value: {
      control: "number",
      description: "Valor a mostrar en el centro del gráfico",
      table: {
        defaultValue: { summary: "28" },
      },
    },
    baseColor: {
      control: "color",
      description: "Color base del gráfico",
      table: {
        defaultValue: { summary: "#b3b3b3" },
      },
    },
    primaryColor: {
      control: "color",
      description: "Color principal del gráfico",
      table: {
        defaultValue: { summary: "#336661" },
      },
    },
    secondaryColor: {
      control: "color",
      description: "Color secundario del gráfico (solo para 3 colores)",
      table: {
        defaultValue: { summary: "#ad941a" },
      },
    },
  },
} satisfies Meta<typeof ChartPie>;

export default meta;
type Story = StoryObj<typeof meta>;

// ChartPie básico con controles
export const Default: Story = {
  args: {
    size: "sm",
    colors: 2,
    value: 28,
  },
};

// ChartPie tamaño pequeño con 2 colores
export const SmallTwoColors: Story = {
  args: {
    size: "sm",
    colors: 2,
    value: 28,
  },
};

// ChartPie tamaño pequeño con 3 colores
export const SmallThreeColors: Story = {
  args: {
    size: "sm",
    colors: 3,
    value: 28,
  },
};

// ChartPie tamaño mediano con 2 colores
export const MediumTwoColors: Story = {
  args: {
    size: "md",
    colors: 2,
    value: 28,
  },
};

// ChartPie tamaño mediano con 3 colores
export const MediumThreeColors: Story = {
  args: {
    size: "md",
    colors: 3,
    value: 28,
  },
};

// ChartPie con diferentes valores
export const DifferentValues: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <div>
        <ChartPie value={10} size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          10%
        </div>
      </div>
      <div>
        <ChartPie value={50} size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          50%
        </div>
      </div>
      <div>
        <ChartPie value={75} size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          75%
        </div>
      </div>
      <div>
        <ChartPie value={99} size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          99%
        </div>
      </div>
    </div>
  ),
};

// Todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <div>
        <ChartPie size="sm" colors={2} />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Pequeño (sm)
        </div>
      </div>
      <div>
        <ChartPie size="md" colors={2} />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Mediano (md)
        </div>
      </div>
    </div>
  ),
};
