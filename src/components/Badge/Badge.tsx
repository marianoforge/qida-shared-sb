import React from "react";
import "./Badge.css";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeType = "filled" | "outlined";
export type BadgeColor = "primary" | "error" | "custom";

export interface BadgeProps {
  /**
   * Contenido del badge (generalmente un número)
   */
  content: React.ReactNode;

  /**
   * Tamaño del badge
   */
  size?: BadgeSize;

  /**
   * Tipo de badge (filled o outlined)
   */
  type?: BadgeType;

  /**
   * Color del badge
   */
  color?: BadgeColor;

  /**
   * Color personalizado (solo funciona cuando color="custom")
   */
  customColor?: string;

  /**
   * Clases CSS adicionales
   */
  className?: string;

  /**
   * Ocultar el badge cuando el contenido es 0
   */
  hideZero?: boolean;

  /**
   * Mostrar punto en lugar de número
   */
  dot?: boolean;
}

/**
 * Componente Badge para mostrar contadores y notificaciones
 */
export const Badge: React.FC<BadgeProps> = ({
  content,
  size = "md",
  type = "filled",
  color = "primary",
  customColor,
  className = "",
  hideZero = false,
  dot = false,
}) => {
  // Ocultar badge si el contenido es 0 y hideZero es true
  if (hideZero && (content === 0 || content === "0")) {
    return null;
  }

  // Generar clases CSS
  const baseClass = "qida-badge";
  const sizeClass = `${baseClass}--${size}`;
  const typeClass = `${baseClass}--${type}`;
  const colorClass = `${baseClass}--${color}`;

  // Aplicar color personalizado si está definido y el color es 'custom'
  const customStyle =
    color === "custom" && customColor
      ? ({
          "--badge-color": customColor,
          "--badge-text-color": type === "outlined" ? customColor : "#ffffff",
        } as React.CSSProperties)
      : {};

  // Determinar si mostrar el punto en lugar del contenido
  const displayContent = dot ? null : content;
  const dotClass = dot ? `${baseClass}--dot` : "";

  return (
    <div
      className={`${baseClass} ${sizeClass} ${typeClass} ${colorClass} ${dotClass} ${className}`}
      style={customStyle}
      role="status"
      aria-label={dot ? "Notificación" : `${content} notificaciones`}
    >
      {displayContent}
    </div>
  );
};

export interface BadgeIconProps {
  /**
   * Icono a mostrar
   */
  icon: React.ReactNode;

  /**
   * Contenido del badge (generalmente un número)
   */
  content: React.ReactNode;

  /**
   * Tamaño del badge
   */
  badgeSize?: BadgeSize;

  /**
   * Tipo de badge (filled o outlined)
   */
  badgeType?: BadgeType;

  /**
   * Color del badge
   */
  badgeColor?: BadgeColor;

  /**
   * Ocultar el badge cuando el contenido es 0
   */
  hideZero?: boolean;

  /**
   * Mostrar punto en lugar de número
   */
  dot?: boolean;

  /**
   * Clases CSS adicionales para el contenedor
   */
  className?: string;

  /**
   * Evento onClick
   */
  onClick?: () => void;
}

/**
 * Componente BadgeIcon para mostrar badges con iconos
 */
export const BadgeIcon: React.FC<BadgeIconProps> = ({
  icon,
  content,
  badgeSize = "sm",
  badgeType = "filled",
  badgeColor = "error",
  hideZero = false,
  dot = false,
  className = "",
  onClick,
}) => {
  // Determinar si mostrar el badge
  const showBadge = !(hideZero && (content === 0 || content === "0"));

  return (
    <div
      className={`qida-badge-icon ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Icono */}
      <div className="qida-badge-icon__icon">{icon}</div>

      {/* Badge */}
      {showBadge && (
        <div className="qida-badge-icon__badge">
          <Badge
            content={content}
            size={badgeSize}
            type={badgeType}
            color={badgeColor}
            dot={dot}
          />
        </div>
      )}
    </div>
  );
};

export default Badge;
