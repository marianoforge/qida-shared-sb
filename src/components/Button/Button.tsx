import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante del botón
   */
  variant?:
    | "primary-200"
    | "primary-400"
    | "primary-500"
    | "primary-600"
    | "secondary-default"
    | "secondary-primary"
    | "secondary-primary-light"
    | "secondary-primary-dark"
    | "secondary-thick-border"
    | "tertiary-default"
    | "tertiary-primary"
    | "tertiary-primary-light"
    | "tertiary-primary-dark"
    | "icon-primary-200"
    | "icon-primary-400"
    | "icon-primary-500"
    | "icon-primary-600"
    | "icon-bordered-default"
    | "icon-bordered-primary"
    | "icon-bordered-primary-light"
    | "icon-bordered-primary-dark"
    | "icon-transparent"
    | "icon-neutral-200"
    | "icon-neutral-300"
    | "icon-neutral-100"
    | "fab-primary-200"
    | "fab-primary-400"
    | "fab-primary-500"
    | "fab-primary-600";

  /**
   * Tamaño del botón
   */
  size?: "sm" | "md" | "lg" | "fab-sm" | "fab-lg";

  /**
   * Contenido del botón
   */
  children?: React.ReactNode;

  /**
   * Icono opcional para mostrar antes del texto
   */
  startIcon?: React.ReactNode;

  /**
   * Icono opcional para mostrar después del texto
   */
  endIcon?: React.ReactNode;

  /**
   * Si el botón ocupa todo el ancho disponible
   */
  fullWidth?: boolean;

  /**
   * Si el botón tiene borde
   */
  bordered?: boolean;

  /**
   * Si el botón es solo un icono
   */
  iconOnly?: boolean;

  /**
   * Si el botón es un FAB
   */
  isFab?: boolean;
}

/**
 * Componente de botón que utiliza los tokens de diseño
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary-500",
  size = "md",
  children,
  startIcon,
  endIcon,
  fullWidth = false,
  bordered = false,
  iconOnly = false,
  isFab = false,
  className = "",
  ...props
}) => {
  const buttonClasses = [
    "qida-button",
    `qida-button--${variant}`,
    `qida-button--${size}`,
    bordered ? "qida-button--bordered" : "",
    fullWidth ? "qida-button--full-width" : "",
    iconOnly ? "qida-button--icon-only" : "",
    isFab ? "qida-button--fab" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span className="qida-button__icon">{startIcon}</span>}
      {!iconOnly && <span className="qida-button__text">{children}</span>}
      {endIcon && <span className="qida-button__icon">{endIcon}</span>}
    </button>
  );
};

export default Button;
