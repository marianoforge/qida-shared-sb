import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
      description: "URL de la imagen del asesor",
      table: {
        defaultValue: {
          summary: "https://randomuser.me/api/portraits/women/44.jpg",
        },
      },
    },
    advisorName: {
      control: "text",
      description: "Nombre del asesor",
      table: {
        defaultValue: { summary: "Alicia Martín" },
      },
    },
    phone: {
      control: "text",
      description: "Teléfono de contacto",
      table: {
        defaultValue: { summary: "635 847 129" },
      },
    },
    email: {
      control: "text",
      description: "Email de contacto",
      table: {
        defaultValue: { summary: "alicia.martin@qida.es" },
      },
    },
    title: {
      control: "text",
      description: "Título del footer",
      table: {
        defaultValue: { summary: "¿Tienes alguna duda?" },
      },
    },
    subtitle: {
      control: "text",
      description: "Subtítulo o descripción",
      table: {
        defaultValue: { summary: "tu asesora familiar" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Footer por defecto
export const Default: Story = {
  args: {
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    advisorName: "Alicia Martín",
    phone: "635 847 129",
    email: "alicia.martin@qida.es",
    title: "¿Tienes alguna duda?",
    subtitle: "tu asesora familiar",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 180,
      },
    },
  },
};

// Versión Desktop
export const Desktop: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    ...Default.parameters,
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

// Versión Mobile
export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    ...Default.parameters,
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Footer con información diferente
export const CustomAdvisor: Story = {
  args: {
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    advisorName: "Carlos Sánchez",
    phone: "678 123 456",
    email: "carlos.sanchez@qida.es",
    title: "¿Necesitas ayuda?",
    subtitle: "tu asesor personal",
  },
  parameters: {
    ...Default.parameters,
  },
};
