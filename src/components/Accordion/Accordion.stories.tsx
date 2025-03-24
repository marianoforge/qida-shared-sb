import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionGroup } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título del acordeón",
    },
    defaultExpanded: {
      control: "boolean",
      description: "Define si el acordeón estará expandido por defecto",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Historia básica
export const Default: Story = {
  args: {
    title: "Título del acordeón",
    children: (
      <p>
        Este es el contenido del acordeón. Puede contener cualquier tipo de
        elemento HTML o componentes de React. Este contenido se muestra cuando
        el acordeón está expandido y se oculta cuando está contraído.
      </p>
    ),
    defaultExpanded: false,
  },
};

// Acordeón abierto por defecto
export const ExpandedByDefault: Story = {
  args: {
    title: "Acordeón expandido por defecto",
    children: (
      <p>
        Este acordeón está expandido por defecto. Puedes hacer clic en el
        encabezado para contraerlo.
      </p>
    ),
    defaultExpanded: true,
  },
};

// Acordeón con contenido extenso
export const WithExtensiveContent: Story = {
  args: {
    title: "Información detallada",
    children: (
      <div>
        <p>
          Este acordeón contiene una cantidad sustancial de contenido para
          demostrar cómo maneja el componente grandes cantidades de texto e
          información.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          Phasellus molestie magna non est bibendum non venenatis nisl tempor.
        </p>
        <ul>
          <li>Punto importante 1</li>
          <li>Punto importante 2</li>
          <li>Punto importante 3</li>
        </ul>
        <p>
          Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
          euismod lacus luctus magna.
        </p>
      </div>
    ),
  },
};

// Grupo de acordeones
export const AccordionGroupExample: Story = {
  render: () => (
    <AccordionGroup>
      <Accordion title="Sección 1">
        <p>Contenido de la sección 1.</p>
      </Accordion>
      <Accordion title="Sección 2">
        <p>Contenido de la sección 2.</p>
      </Accordion>
      <Accordion title="Sección 3">
        <p>Contenido de la sección 3.</p>
      </Accordion>
    </AccordionGroup>
  ),
};

// Ejemplo de pantalla móvil
export const MobileView: Story = {
  render: () => (
    <div style={{ maxWidth: "390px", width: "100%" }}>
      <Accordion title="Versión móvil">
        <p>
          Este es un ejemplo de cómo se vería el acordeón en un dispositivo
          móvil.
        </p>
      </Accordion>
    </div>
  ),
};

// Ejemplo de FAQ
export const FAQExample: Story = {
  render: () => (
    <div style={{ maxWidth: "824px", width: "100%" }}>
      <h2
        style={{
          marginBottom: "24px",
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Aeonik, sans-serif",
        }}
      >
        Preguntas Frecuentes
      </h2>
      <AccordionGroup>
        <Accordion title="¿Cómo puedo cambiar mi contraseña?">
          <p>
            Para cambiar tu contraseña, accede a la página de configuración de
            tu cuenta, y busca la opción "Cambiar contraseña". Sigue las
            instrucciones para crear una nueva contraseña segura.
          </p>
        </Accordion>
        <Accordion title="¿Dónde puedo encontrar mis facturas?">
          <p>
            Tus facturas están disponibles en la sección "Facturación" dentro de
            tu cuenta. Allí encontrarás un historial completo de todas tus
            transacciones y podrás descargar tus facturas en formato PDF.
          </p>
        </Accordion>
        <Accordion title="¿Cómo contactar con atención al cliente?">
          <p>
            Puedes contactar con nuestro equipo de atención al cliente a través
            de:
          </p>
          <ul>
            <li>Email: soporte@ejemplo.com</li>
            <li>Teléfono: +34 900 123 456</li>
            <li>
              Chat en vivo: disponible en nuestra página web, de lunes a
              viernes, de 9:00 a 18:00
            </li>
          </ul>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};
