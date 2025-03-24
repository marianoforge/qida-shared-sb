import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AlertToast, toast } from "./AlertToast";
import "./AlertToastStory.css"; // Estilos específicos para la historia

const meta: Meta<typeof AlertToast> = {
  title: "Components/AlertToast",
  component: AlertToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["informative", "success", "warning", "error"],
      description: "Tipo de toast",
      table: {
        defaultValue: { summary: "informative" },
      },
    },
    message: {
      control: "text",
      description: "Mensaje del toast",
    },
    duration: {
      control: "number",
      description: "Duración en milisegundos que el toast permanecerá visible",
      table: {
        defaultValue: { summary: 4000 },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertToast>;

// Componente para la demostración que muestra el toast centrado
const ToastDemo = (args: any) => {
  const [showToast, setShowToast] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handleClick = () => {
    setShowToast(true);
    setShowControls(false); // Ocultar controles (instrucciones y botón)

    // Auto-ocultar después de la duración
    setTimeout(() => {
      setShowToast(false);
      // Mostrar controles de nuevo después de un breve retraso
      setTimeout(() => {
        setShowControls(true);
      }, 300); // Tiempo para que termine la animación de salida del toast
    }, args.duration || 4000);
  };

  return (
    <div className="toast-demo-container">
      {/* Contenedor para el toast que aparece centrado */}
      <div className="toast-demo-toast-area">
        {showToast && (
          <div className="toast-demo-toast">
            <div
              className={`qida-toast qida-toast--${args.type || "informative"} qida-toast--visible`}
            >
              <div className="qida-toast__icon" aria-hidden="true"></div>
              <div className="qida-toast__message">{args.message}</div>
            </div>
          </div>
        )}
      </div>

      {/* Controles (instrucciones y botón) que se muestran/ocultan */}
      <div
        className={`toast-demo-controls ${showControls ? "" : "toast-demo-controls--hidden"}`}
      >
        <p className="toast-demo-text">
          Haz clic en el botón para mostrar el toast directamente encima.
        </p>

        <button onClick={handleClick} className="toast-demo-button">
          Mostrar Toast
        </button>
      </div>
    </div>
  );
};

// Historias individuales
export const Informative: Story = {
  args: {
    type: "informative",
    message: "Lorem ipsum dolor sit amet",
    duration: 4000,
  },
  render: (args) => <ToastDemo {...args} />,
};

export const Success: Story = {
  args: {
    type: "success",
    message: "Lorem ipsum dolor sit amet",
    duration: 4000,
  },
  render: (args) => <ToastDemo {...args} />,
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Lorem ipsum dolor sit amet",
    duration: 4000,
  },
  render: (args) => <ToastDemo {...args} />,
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Lorem ipsum dolor sit amet",
    duration: 4000,
  },
  render: (args) => <ToastDemo {...args} />,
};

// Toast con duración más larga
export const LongDuration: Story = {
  args: {
    type: "informative",
    message: "Este toast permanecerá visible por 8 segundos",
    duration: 8000,
  },
  render: (args) => <ToastDemo {...args} />,
};

// Múltiples toasts (usando la demostración local)
export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<
      Array<{ type: string; message: string; id: number }>
    >([]);
    const [showControls, setShowControls] = useState(true);

    const showMultipleToasts = () => {
      setShowControls(false); // Ocultar controles

      const newToasts = [
        {
          type: "informative",
          message: "Primera notificación informativa",
          id: Date.now(),
        },
        {
          type: "success",
          message: "Operación completada con éxito",
          id: Date.now() + 1,
        },
        {
          type: "warning",
          message: "Atención: conexión inestable",
          id: Date.now() + 2,
        },
        {
          type: "error",
          message: "Error al procesar la solicitud",
          id: Date.now() + 3,
        },
      ];

      setToasts(newToasts);

      // Clear toasts after some time
      setTimeout(() => {
        setToasts([]);
        // Mostrar controles de nuevo
        setTimeout(() => {
          setShowControls(true);
        }, 300);
      }, 5000);
    };

    return (
      <div className="toast-demo-container">
        {/* Área para los toasts múltiples */}
        <div className="toast-demo-multi-toast-area">
          {toasts.map((t, index) => (
            <div
              key={t.id}
              className={`toast-demo-multi-toast toast-demo-multi-toast--${index}`}
            >
              <div
                className={`qida-toast qida-toast--${t.type} qida-toast--visible`}
              >
                <div className="qida-toast__icon" aria-hidden="true"></div>
                <div className="qida-toast__message">{t.message}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`toast-demo-controls ${showControls ? "" : "toast-demo-controls--hidden"}`}
        >
          <p className="toast-demo-text">
            Haz clic para mostrar múltiples toasts a la vez.
          </p>

          <button onClick={showMultipleToasts} className="toast-demo-button">
            Mostrar Múltiples Toasts
          </button>
        </div>
      </div>
    );
  },
};

// Uso programático (simulado para la historia)
export const ProgrammaticUsage: Story = {
  render: () => {
    const [activeToast, setActiveToast] = useState<{
      type: string;
      message: string;
    } | null>(null);
    const [showControls, setShowControls] = useState(true);

    const showToast = (type: string, message: string) => {
      setShowControls(false);
      setActiveToast({ type, message });

      setTimeout(() => {
        setActiveToast(null);
        setTimeout(() => {
          setShowControls(true);
        }, 300);
      }, 3000);
    };

    return (
      <div className="toast-demo-container">
        <div className="toast-demo-toast-area">
          {activeToast && (
            <div className="toast-demo-toast">
              <div
                className={`qida-toast qida-toast--${activeToast.type} qida-toast--visible`}
              >
                <div className="qida-toast__icon" aria-hidden="true"></div>
                <div className="qida-toast__message">{activeToast.message}</div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`toast-demo-controls ${showControls ? "" : "toast-demo-controls--hidden"}`}
        >
          <p className="toast-demo-text">
            Haz clic en un botón para mostrar el toast correspondiente.
          </p>

          <div className="toast-demo-buttons">
            <button
              onClick={() => showToast("informative", "Mensaje informativo")}
              className="toast-demo-button toast-demo-button--informative"
            >
              Toast Informativo
            </button>
            <button
              onClick={() =>
                showToast("success", "Operación completada con éxito")
              }
              className="toast-demo-button toast-demo-button--success"
            >
              Toast de Éxito
            </button>
            <button
              onClick={() => showToast("warning", "Atención requerida")}
              className="toast-demo-button toast-demo-button--warning"
            >
              Toast de Advertencia
            </button>
            <button
              onClick={() => showToast("error", "Ha ocurrido un error")}
              className="toast-demo-button toast-demo-button--error"
            >
              Toast de Error
            </button>
          </div>
        </div>
      </div>
    );
  },
};
