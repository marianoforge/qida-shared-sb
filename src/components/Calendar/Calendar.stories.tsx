import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Calendar, MarkedDate } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["desktop", "mobile"],
      description: "Variante de visualización del calendario",
    },
    monthsToShow: {
      control: { type: "number", min: 1, max: 6 },
      description: "Número de meses a mostrar (solo para variante desktop)",
    },
    selectedDate: {
      control: "date",
      description: "Fecha inicialmente seleccionada",
    },
    minDate: {
      control: "date",
      description: "Fecha mínima seleccionable",
    },
    maxDate: {
      control: "date",
      description: "Fecha máxima seleccionable",
    },
    rangeSelection: {
      control: "boolean",
      description: "Permitir selección de rango de fechas",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Historia básica - Vista desktop
export const Desktop: Story = {
  args: {
    variant: "desktop",
    monthsToShow: 3,
    selectedDate: new Date(2023, 0, 1),
  },
};

// Historia básica - Vista mobile
export const Mobile: Story = {
  args: {
    variant: "mobile",
    selectedDate: new Date(2023, 8, 20), // 20 de septiembre de 2023
  },
};

// Calendario con fechas destacadas y fechas especiales
export const WithMarkedDates: Story = {
  render: () => {
    // Crear fechas marcadas para el ejemplo - limitado a menos fechas
    const today = new Date();
    const markedDates: MarkedDate[] = [
      // Día destacado
      {
        date: new Date(today.getFullYear(), 8, 20), // 20 de septiembre
        type: "highlighted",
      },
      // Día especial
      {
        date: new Date(today.getFullYear(), 8, 1), // 1 de septiembre
        type: "special",
        specialColor: "#ca8a04",
      },
      // Día seleccionado
      {
        date: new Date(today.getFullYear(), 3, 1), // 1 de abril
        type: "selected",
      },
    ];

    return (
      <Calendar
        variant="desktop"
        monthsToShow={3}
        markedDates={markedDates}
        initialDate={new Date(today.getFullYear(), 0, 1)}
      />
    );
  },
};

// Calendario con selección de rango
export const RangeSelection: Story = {
  args: {
    variant: "desktop",
    monthsToShow: 2,
    rangeSelection: true,
    initialDate: new Date(2023, 0, 1),
  },
};

// Calendario con fechas mínimas y máximas
export const WithMinMaxDates: Story = {
  args: {
    variant: "mobile",
    minDate: new Date(2023, 0, 15),
    maxDate: new Date(2023, 11, 15),
    initialDate: new Date(2023, 6, 1),
  },
};

// Ejemplo de uso con evento
export const WithEventHandling: Story = {
  render: () => {
    const handleDateSelect = (date: Date) => {
      alert(`Fecha seleccionada: ${date.toLocaleDateString()}`);
    };

    return (
      <Calendar
        variant="mobile"
        onDateSelect={handleDateSelect}
        initialDate={new Date()}
      />
    );
  },
};

// Ejemplo con etiquetas personalizadas
export const WithCustomLabels: Story = {
  args: {
    variant: "mobile",
    weekdayLabels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    monthLabels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    initialDate: new Date(),
  },
};
