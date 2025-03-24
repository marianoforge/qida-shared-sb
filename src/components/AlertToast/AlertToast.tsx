import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./AlertToast.css";

export type ToastType = "informative" | "success" | "warning" | "error";

export interface AlertToastProps {
  /**
   * Tipo de toast que determina el color y el icono
   */
  type?: ToastType;

  /**
   * Mensaje del toast
   */
  message: string;

  /**
   * Duración en milisegundos que el toast permanecerá visible
   */
  duration?: number;

  /**
   * Callback cuando el toast se cierra
   */
  onClose?: () => void;

  /**
   * ID único para el toast
   */
  id?: string;
}

export const AlertToast: React.FC<AlertToastProps> = ({
  type = "informative",
  message,
  duration = 4000,
  onClose,
  id,
}) => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const toastId = id || `toast-${Math.random().toString(36).substr(2, 9)}`;

  // Efecto para mostrar y luego ocultar el toast
  useEffect(() => {
    // Muestra el toast con un pequeño retraso para permitir la animación
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 10);

    // Programa el cierre del toast después de la duración especificada
    const hideTimeout = setTimeout(() => {
      handleClose();
    }, duration);

    // Limpia los timeouts al desmontar
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration]);

  // Maneja el cierre del toast
  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300); // Duración de la animación de salida
  };

  // Si no es visible, no renderizar nada
  if (!visible && !exiting) {
    return null;
  }

  const typeClass = `qida-toast--${type}`;

  const toast = (
    <div
      className={`qida-toast ${typeClass} ${exiting ? "qida-toast--exiting" : ""} ${visible ? "qida-toast--visible" : ""}`}
      role="status"
      aria-live="polite"
      id={toastId}
    >
      <div className="qida-toast__icon" aria-hidden="true"></div>
      <div className="qida-toast__message">{message}</div>
    </div>
  );

  // Usar un portal para renderizar el toast en un contenedor fuera del flujo normal
  return ReactDOM.createPortal(toast, document.body);
};

// Componente gestor de toasts
interface ToastManagerProps {
  children?: React.ReactNode;
}

interface ToastOptions extends Omit<AlertToastProps, "id"> {}

export const ToastManager: React.FC<ToastManagerProps> = ({ children }) => {
  return <div className="qida-toast-container">{children}</div>;
};

// Sistema de notificaciones global
let toastContainer: HTMLDivElement | null = null;
let toastCounter = 0;

function getContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "qida-toast-container";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

export const toast = {
  show: (options: ToastOptions) => {
    const id = `toast-${toastCounter++}`;
    const container = getContainer();

    const toastRoot = document.createElement("div");
    toastRoot.id = `toast-root-${id}`;
    container.appendChild(toastRoot);

    const handleClose = () => {
      if (options.onClose) options.onClose();
      setTimeout(() => {
        if (toastRoot.parentNode) {
          container.removeChild(toastRoot);
        }
      }, 300);
    };

    ReactDOM.render(
      <AlertToast {...options} id={id} onClose={handleClose} />,
      toastRoot
    );

    return id;
  },

  // Helpers para diferentes tipos de toasts
  informative: (message: string, options: Partial<ToastOptions> = {}) => {
    return toast.show({ type: "informative", message, ...options });
  },

  success: (message: string, options: Partial<ToastOptions> = {}) => {
    return toast.show({ type: "success", message, ...options });
  },

  warning: (message: string, options: Partial<ToastOptions> = {}) => {
    return toast.show({ type: "warning", message, ...options });
  },

  error: (message: string, options: Partial<ToastOptions> = {}) => {
    return toast.show({ type: "error", message, ...options });
  },
};

export default AlertToast;
