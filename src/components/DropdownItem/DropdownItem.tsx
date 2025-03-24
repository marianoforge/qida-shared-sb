import React, { HTMLAttributes } from "react";
import "./DropdownItem.css";

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Texto del item
   */
  label: string;

  /**
   * Tipo de item
   */
  type?: "text" | "checkbox" | "icon";

  /**
   * Si el item está seleccionado (solo para type="checkbox")
   */
  checked?: boolean;

  /**
   * Si el item está deshabilitado
   */
  disabled?: boolean;

  /**
   * Icono para mostrar (solo para type="icon")
   */
  icon?: React.ReactNode;

  /**
   * Función que se ejecuta al hacer click en el item
   */
  onClick?: () => void;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente DropdownItem para usar dentro de un menú desplegable
 */
export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  type = "text",
  checked = false,
  disabled = false,
  icon,
  onClick,
  className = "",
  ...props
}) => {
  const itemClassName = [
    "qida-dropdown-item",
    `qida-dropdown-item--${type}`,
    disabled ? "qida-dropdown-item--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled && onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === "Enter" || e.key === " ") && onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
  };

  return (
    <div
      className={itemClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-checked={type === "checkbox" ? checked : undefined}
      {...props}
    >
      {type === "checkbox" && (
        <div className="qida-dropdown-item__checkbox">
          <div className="qida-dropdown-item__checkbox-icon">
            <div
              className={`qida-dropdown-item__checkbox-box ${
                checked ? "qida-dropdown-item__checkbox-box--checked" : ""
              }`}
            >
              {checked && (
                <svg
                  className="qida-dropdown-item__checkbox-check"
                  width="10"
                  height="8"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00016 6.586L1.70716 4.293L0.292969 5.707L4.00016 9.414L12.0002 1.414L10.5862 0L4.00016 6.586Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      )}

      {type === "icon" && icon && (
        <div className="qida-dropdown-item__icon">{icon}</div>
      )}

      <div className="qida-dropdown-item__label">{label}</div>
    </div>
  );
};

export default DropdownItem;
