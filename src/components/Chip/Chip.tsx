import React, { InputHTMLAttributes } from "react";
import "./Chip.css";

export interface ChipProps extends InputHTMLAttributes<HTMLDivElement> {
  /**
   * Texto a mostrar dentro del chip
   */
  label: string;

  /**
   * Si el chip está deshabilitado
   */
  disabled?: boolean;

  /**
   * Si tiene un botón de cierre
   */
  closable?: boolean;

  /**
   * Función que se ejecuta al hacer click en el botón de cierre
   */
  onClose?: () => void;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Chip para mostrar etiquetas compactas
 */
export const Chip: React.FC<ChipProps> = ({
  label,
  disabled = false,
  closable = true,
  onClose,
  className = "",
  ...props
}) => {
  const chipClassName = [
    "qida-chip",
    disabled ? "qida-chip--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={chipClassName}
      tabIndex={disabled ? undefined : 0}
      {...props}
    >
      <span className="qida-chip__label">{label}</span>
      {closable && (
        <div className="qida-chip__close" onClick={handleClose}>
          <svg
            className="qida-chip__close-icon"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Chip;
