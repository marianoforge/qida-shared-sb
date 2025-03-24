import React, { useState, useEffect, useRef } from "react";
import "./AlertSticky.css";

export type AlertType = "informative" | "success" | "warning" | "error";

export interface AlertStickyProps {
  /**
   * Tipo de alerta que determina el color y el icono
   */
  type?: AlertType;

  /**
   * Mensaje principal de la alerta
   */
  message: string;

  /**
   * Texto del enlace (opcional)
   */
  linkText?: string;

  /**
   * URL para el enlace (opcional)
   */
  linkUrl?: string;

  /**
   * Callback para cuando se hace click en el enlace
   */
  onLinkClick?: () => void;

  /**
   * Mostrar botón de cierre
   */
  showCloseButton?: boolean;

  /**
   * Callback para cuando se cierra la alerta
   */
  onClose?: () => void;

  /**
   * Clase CSS adicional
   */
  className?: string;

  /**
   * Posición del AlertSticky
   */
  position?: "top" | "bottom";

  /**
   * Auto-cierre después de X milisegundos (opcional)
   */
  autoCloseAfter?: number;

  /**
   * Identificador único para la alerta
   */
  id?: string;
}

export const AlertSticky: React.FC<AlertStickyProps> = ({
  type = "informative",
  message,
  linkText,
  linkUrl,
  onLinkClick,
  showCloseButton = true,
  onClose,
  className = "",
  position = "top",
  autoCloseAfter,
  id,
}) => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const alertId = id || `alert-${Math.random().toString(36).substr(2, 9)}`;

  // Manejar el cierre de la alerta
  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300); // Duración de la animación
  };

  // Manejar el click en el enlace
  const handleLinkClick = (e: React.MouseEvent) => {
    if (!linkUrl) {
      e.preventDefault();
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };

  // Configurar el auto-cierre si está definido
  useEffect(() => {
    if (autoCloseAfter && autoCloseAfter > 0) {
      timeoutRef.current = window.setTimeout(() => {
        handleClose();
      }, autoCloseAfter);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoCloseAfter]);

  // Si la alerta no es visible, no renderizar nada
  if (!visible) {
    return null;
  }

  // Determinar la clase del tipo de alerta
  const typeClass = `qida-alert-sticky--${type}`;

  // Determinar si el mensaje tiene múltiples líneas
  const hasMultipleLines = message.length > 60;

  // Determinar la clase de posición
  const positionClass = `qida-alert-sticky--${position}`;

  // Crear la estructura del enlace si existe
  const linkElement = linkText ? (
    <div className="qida-alert-sticky__link-container">
      <a
        href={linkUrl || "#"}
        className="qida-alert-sticky__link"
        onClick={handleLinkClick}
      >
        {linkText}
        <span
          className="qida-alert-sticky__link-icon"
          aria-hidden="true"
        ></span>
      </a>
    </div>
  ) : null;

  return (
    <div
      className={`qida-alert-sticky ${typeClass} ${positionClass} ${hasMultipleLines ? "qida-alert-sticky--multi-line" : ""} ${exiting ? "qida-alert-sticky--exiting" : ""} ${className}`}
      role="alert"
      aria-live="assertive"
      id={alertId}
    >
      <div className="qida-alert-sticky__content">
        <div className="qida-alert-sticky__icon" aria-hidden="true"></div>

        <div className="qida-alert-sticky__message-container">
          <div className="qida-alert-sticky__message">{message}</div>
          {linkElement}
        </div>

        {showCloseButton && (
          <button
            className="qida-alert-sticky__close-button"
            onClick={handleClose}
            aria-label="Cerrar alerta"
            type="button"
          >
            <span
              className="qida-alert-sticky__close-icon"
              aria-hidden="true"
            ></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertSticky;
