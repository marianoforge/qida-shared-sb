import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownItem } from "./DropdownItem";

const meta = {
  title: "Components/DropdownItem",
  component: DropdownItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto del item",
    },
    type: {
      control: "select",
      options: ["text", "checkbox", "icon"],
      description: "Tipo de item",
    },
    checked: {
      control: "boolean",
      description: "Si el item está seleccionado (solo para type='checkbox')",
    },
    disabled: {
      control: "boolean",
      description: "Si el item está deshabilitado",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer click en el item",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "160px",
          boxShadow:
            "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          padding: "4px 8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Item básico tipo texto
export const TextItem: Story = {
  args: {
    label: "Label",
    type: "text",
  },
};

// Item tipo checkbox
export const CheckboxItem: Story = {
  args: {
    label: "Label",
    type: "checkbox",
    checked: false,
  },
};

// Item tipo checkbox seleccionado
export const CheckboxItemChecked: Story = {
  args: {
    label: "Label",
    type: "checkbox",
    checked: true,
  },
};

// Item con icono
export const IconItem: Story = {
  args: {
    label: "Label",
    type: "icon",
    icon: (
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 4.5H4.5V7.5H3.5V4.5H0.5V3.5H3.5V0.5H4.5V3.5H7.5V4.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
};

// Item deshabilitado
export const DisabledItem: Story = {
  args: {
    label: "Label",
    type: "text",
    disabled: true,
  },
};

// Todos los estados
export const AllStates: Story = {
  args: {
    label: "Label",
  },
  render: (args) => (
    <div>
      <DropdownItem label="Enabled" type="text" />
      <DropdownItem
        label="Hovered"
        type="text"
        style={{ backgroundColor: "#e5e5e5" }}
      />
      <DropdownItem
        label="Focused"
        type="text"
        style={{
          borderRadius: "8px",
          border: "4px solid #8aa7a4",
          padding: "4px 12px",
        }}
      />
      <DropdownItem label="Disabled" type="text" disabled />
    </div>
  ),
};

// Tipos de items
export const AllTypes: Story = {
  args: {
    label: "Label",
  },
  render: (args) => (
    <div>
      <DropdownItem label="Text Item" type="text" />
      <DropdownItem label="Checkbox Item" type="checkbox" checked={false} />
      <DropdownItem label="Checkbox Checked" type="checkbox" checked={true} />
      <DropdownItem
        label="Icon Item"
        type="icon"
        icon={
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 4.5H4.5V7.5H3.5V4.5H0.5V3.5H3.5V0.5H4.5V3.5H7.5V4.5Z"
              fill="currentColor"
            />
          </svg>
        }
      />
    </div>
  ),
};
