import React, { InputHTMLAttributes } from "react";
import "./RadioButton.css";

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * Si el radio button está seleccionado
   */
  checked?: boolean;

  /**
   * Label del radio button
   */
  label?: string;

  /**
   * Si el radio button está en estado de error
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
 * Componente de radio button para formularios
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  disabled = false,
  label,
  error = false,
  errorMessage,
  className = "",
  ...props
}) => {
  const radioClassName = [
    "qida-radio",
    disabled ? "qida-radio--disabled" : "",
    error ? "qida-radio--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconClassName = [
    "qida-radio__icon",
    checked ? "qida-radio__icon--checked" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="qida-radio-container">
      <label className={radioClassName}>
        <div className="qida-radio__input-container">
          <input
            type="radio"
            checked={checked}
            disabled={disabled}
            className="qida-radio__input"
            {...props}
          />
          <div className={iconClassName}>
            <div className="qida-radio__circle"></div>
          </div>
        </div>
        {label && <span className="qida-radio__label">{label}</span>}
      </label>
      {error && errorMessage && (
        <div className="qida-radio__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default RadioButton;
