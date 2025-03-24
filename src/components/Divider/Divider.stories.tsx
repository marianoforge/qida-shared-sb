import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto a mostrar en el divider",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Divider básico
export const Default: Story = {
  args: {
    label: "1 de julio de 2024",
  },
  render: (args) => (
    <div style={{ width: "400px", marginTop: "32px" }}>
      <Divider {...args} />
    </div>
  ),
};

// Sin label
export const WithoutLabel: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: "400px", marginTop: "32px" }}>
      <Divider {...args} />
    </div>
  ),
};

// Ejemplo de uso en una página
export const Example: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: "400px", padding: "16px" }}>
      <h2>Sección 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor
        id nibh ultricies vehicula ut id elit.
      </p>

      <Divider />

      <h2>Sección 2</h2>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
        porta felis euismod semper.
      </p>

      <Divider label="1 de julio de 2024" />

      <h2>Sección 3</h2>
      <p>
        Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
        mollis interdum.
      </p>
    </div>
  ),
};
