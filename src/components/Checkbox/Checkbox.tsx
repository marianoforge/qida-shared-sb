import React, { InputHTMLAttributes } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * Si el checkbox está seleccionado
   */
  checked?: boolean;

  /**
   * Label del checkbox
   */
  label?: string;

  /**
   * Si el checkbox está en estado de error
   */
  error?: boolean;

  /**
   * Mensaje de error a mostrar
   */
  errorMessage?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente de checkbox para formularios
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  label,
  error = false,
  errorMessage,
  className = "",
  ...props
}) => {
  const checkboxClassName = [
    "qida-checkbox",
    disabled ? "qida-checkbox--disabled" : "",
    error ? "qida-checkbox--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconClassName = [
    "qida-checkbox__icon",
    checked ? "qida-checkbox__icon--checked" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="qida-checkbox-container">
      <label className={checkboxClassName}>
        <div className="qida-checkbox__input-container">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="qida-checkbox__input"
            {...props}
          />
          <div className={iconClassName}>
            <div className="qida-checkbox__box"></div>
            {checked && (
              <svg
                className="qida-checkbox__check"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 6.59L10.09 1L11.5 2.41L4.5 9.41L0 4.91L1.41 3.5L4.5 6.59Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        {label && <span className="qida-checkbox__label">{label}</span>}
      </label>
      {error && errorMessage && (
        <div className="qida-checkbox__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default Checkbox;
