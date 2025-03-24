import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["home", "evolution", "best-action", "content", "notification"],
      description: "Variante del card",
    },
    size: {
      control: "select",
      options: ["mobile", "desktop"],
      description: "Tamaño del card",
    },
    title: {
      control: "text",
      description: "Título del card",
    },
    subtitle: {
      control: "text",
      description: "Subtítulo del card",
    },
    content: {
      control: "object",
      description: "Contenido o párrafos del card",
    },
    imageUrl: {
      control: "text",
      description: "URL de la imagen",
    },
    iconUrl: {
      control: "text",
      description: "URL del ícono",
    },
    primaryButtonText: {
      control: "text",
      description: "Texto del botón primario",
    },
    secondaryButtonText: {
      control: "text",
      description: "Texto del botón secundario",
    },
    onPrimaryButtonClick: {
      action: "primaryButtonClicked",
      description: "Función que se ejecuta al hacer clic en el botón primario",
    },
    onSecondaryButtonClick: {
      action: "secondaryButtonClicked",
      description:
        "Función que se ejecuta al hacer clic en el botón secundario",
    },
    onCloseClick: {
      action: "closeClicked",
      description: "Función que se ejecuta al hacer clic en el botón de cerrar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Home Card - Desktop
export const HomeCardDesktop: Story = {
  args: {
    variant: "home",
    size: "desktop",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
    ],
    imageUrl: "https://picsum.photos/160/160",
    primaryButtonText: "LABEL",
    secondaryButtonText: "LABEL",
  },
};

// Home Card - Mobile
export const HomeCardMobile: Story = {
  args: {
    variant: "home",
    size: "mobile",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
    ],
    imageUrl: "https://picsum.photos/120/120",
    primaryButtonText: "LABEL",
    secondaryButtonText: "LABEL",
  },
};

// Evolution Card - Desktop
export const EvolutionCardDesktop: Story = {
  args: {
    variant: "evolution",
    size: "desktop",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
    ],
    imageUrl: "https://picsum.photos/60/60",
  },
};

// Evolution Card - Mobile
export const EvolutionCardMobile: Story = {
  args: {
    variant: "evolution",
    size: "mobile",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
      "Lorem ipsum dolor sit amet consectetur. Neque odio tincidunt lacus elit et quis massa morbi tempor.",
    ],
    imageUrl: "https://picsum.photos/60/60",
  },
};

// Best Action Card - Desktop
export const BestActionCardDesktop: Story = {
  args: {
    variant: "best-action",
    size: "desktop",
    content:
      "Lorem ipsum dolor sit amet consectetur. Turpis integer justo turpis vitae facilisis. Proin morbi pulvinar et ac phasellus aliquet.",
    iconUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23004039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'%3E%3C/path%3E%3Cpolyline points='22 4 12 14.01 9 11.01'%3E%3C/polyline%3E%3C/svg%3E",
    primaryButtonText: "LABEL",
    onCloseClick: () => {},
  },
};

// Best Action Card - Mobile
export const BestActionCardMobile: Story = {
  args: {
    variant: "best-action",
    size: "mobile",
    content:
      "Lorem ipsum dolor sit amet consectetur. Turpis integer justo turpis vitae facilisis. Proin morbi pulvinar et ac phasellus aliquet.",
    iconUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23004039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'%3E%3C/path%3E%3Cpolyline points='22 4 12 14.01 9 11.01'%3E%3C/polyline%3E%3C/svg%3E",
    primaryButtonText: "LABEL",
    onCloseClick: () => {},
  },
};

// Content Card
export const ContentCard: Story = {
  args: {
    variant: "content",
    title: "Title",
    subtitle: "Subtitle",
    content:
      "Turpis integer justo turpis vitae facilisis. Proin morbi pulvinar et ac phasellus aliquet.",
    imageUrl: "https://picsum.photos/245/145",
    primaryButtonText: "LABEL",
  },
};
