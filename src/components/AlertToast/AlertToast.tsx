import React, { useState, useEffect } from "react";
import "./AlertToast.css";

export interface AlertToastProps {
  /**
   * Tipo de alerta
   */
  type: "informative" | "success" | "warning" | "error";
  /**
   * Título de la alerta
   */
  title: string;
  /**
   * Mensaje de la alerta
   */
  message?: string;
  /**
   * Duración en milisegundos (0 para no auto-cerrar)
   */
  duration?: number;
  /**
   * Función a ejecutar al cerrar la alerta
   */
  onClose?: () => void;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Mostrar icono
   */
  showIcon?: boolean;
}

/**
 * Componente AlertToast para mostrar mensajes de alerta o notificaciones
 */
export const AlertToast: React.FC<AlertToastProps> = ({
  type,
  title,
  message,
  duration = 5000,
  onClose,
  className = "",
  showIcon = true,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (duration > 0) {
      timer = window.setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  const renderIcon = () => {
    if (!showIcon) return null;

    switch (type) {
      case "informative":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
              fill="currentColor"
            />
          </svg>
        );
      case "success":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              fill="currentColor"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
              fill="currentColor"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`alert-toast alert-toast-${type} ${className}`}>
      {showIcon && <div className="alert-toast-icon">{renderIcon()}</div>}
      <div className="alert-toast-content">
        <div className="alert-toast-title">{title}</div>
        {message && <div className="alert-toast-message">{message}</div>}
      </div>
      <button
        className="alert-toast-close"
        onClick={handleClose}
        aria-label="Cerrar"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default AlertToast;
