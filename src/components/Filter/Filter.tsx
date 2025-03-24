import React, { ButtonHTMLAttributes } from "react";
import "./Filter.css";

export interface FilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Texto del filtro
   */
  label?: string;

  /**
   * Icono opcional para mostrar
   */
  icon?: React.ReactNode;

  /**
   * Si el filtro está deshabilitado
   */
  disabled?: boolean;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Filter para mostrar opciones de filtrado
 */
export const Filter: React.FC<FilterProps> = ({
  label = "Filter",
  icon,
  disabled = false,
  className = "",
  ...props
}) => {
  const filterClassName = [
    "qida-filter",
    disabled ? "qida-filter--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={filterClassName}
      disabled={disabled}
      type="button"
      {...props}
    >
      {icon && <div className="qida-filter__icon">{icon}</div>}
      <span className="qida-filter__label">{label}</span>
    </button>
  );
};

export default Filter;
