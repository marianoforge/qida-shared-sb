import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["AD", "VCX"],
      description: "Estilo visual del breadcrumb",
      table: {
        defaultValue: { summary: "AD" },
      },
    },
    onBackClick: {
      action: "navigated back",
      description: "Callback para la navegación de retroceso (solo móvil)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Ejemplo básico
export const Default: Story = {
  args: {
    variant: "AD",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Página Actual", href: "/category/page" },
    ],
  },
};

// Variante AD con 1 nivel
export const AD_OneBreadcrumb: Story = {
  args: {
    variant: "AD",
    items: [{ label: "Página Actual", href: "/page" }],
  },
};

// Variante AD con 2 niveles
export const AD_TwoBreadcrumbs: Story = {
  args: {
    variant: "AD",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Página Actual", href: "/page" },
    ],
  },
};

// Variante AD con 3 niveles
export const AD_ThreeBreadcrumbs: Story = {
  args: {
    variant: "AD",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Página Actual", href: "/category/page" },
    ],
  },
};

// Variante AD con muchos niveles (muestra truncamiento)
export const AD_ManyBreadcrumbs: Story = {
  args: {
    variant: "AD",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Subcategoría", href: "/category/subcategory" },
      { label: "Sección", href: "/category/subcategory/section" },
      { label: "Página Actual", href: "/category/subcategory/section/page" },
    ],
  },
};

// Variante VCX con 1 nivel
export const VCX_OneBreadcrumb: Story = {
  args: {
    variant: "VCX",
    items: [{ label: "Página Actual", href: "/page" }],
  },
};

// Variante VCX con 2 niveles
export const VCX_TwoBreadcrumbs: Story = {
  args: {
    variant: "VCX",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Página Actual", href: "/page" },
    ],
  },
};

// Variante VCX con 3 niveles
export const VCX_ThreeBreadcrumbs: Story = {
  args: {
    variant: "VCX",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Página Actual", href: "/category/page" },
    ],
  },
};

// Variante VCX con muchos niveles
export const VCX_ManyBreadcrumbs: Story = {
  args: {
    variant: "VCX",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Subcategoría", href: "/category/subcategory" },
      { label: "Sección", href: "/category/subcategory/section" },
      { label: "Página Actual", href: "/category/subcategory/section/page" },
    ],
  },
};

// Ejemplo de cómo se vería en un contenedor móvil
export const MobileView: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: "390px", border: "1px solid #ccc", padding: "16px" }}
    >
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    variant: "AD",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Página Actual", href: "/category/page" },
    ],
  },
};

export const MobileViewVCX: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: "390px", border: "1px solid #ccc", padding: "16px" }}
    >
      <Breadcrumb {...args} />
    </div>
  ),
  args: {
    variant: "VCX",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/category" },
      { label: "Página Actual", href: "/category/page" },
    ],
  },
};
