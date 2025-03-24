import React from "react";
import "./Avatar.css";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarType = "icon" | "image" | "text";

export interface AvatarProps {
  /**
   * Tipo de avatar a mostrar
   */
  type: AvatarType;

  /**
   * Tamaño del avatar
   */
  size?: AvatarSize;

  /**
   * Imagen URL (sólo para type="image")
   */
  src?: string;

  /**
   * Texto alternativo para la imagen o descripción del avatar para lectores de pantalla
   */
  alt?: string;

  /**
   * Iniciales o texto corto (sólo para type="text")
   */
  text?: string;

  /**
   * Icono personalizado como nodo hijo (sólo para type="icon")
   */
  icon?: React.ReactNode;

  /**
   * Clases CSS adicionales
   */
  className?: string;

  /**
   * Función que se ejecuta al hacer clic en el avatar
   */
  onClick?: () => void;
}

/**
 * Componente Avatar para representar usuarios, entidades u objetos
 */
export const Avatar: React.FC<AvatarProps> = ({
  type,
  size = "md",
  src,
  alt = "Avatar",
  text = "",
  icon,
  className = "",
  onClick,
}) => {
  const baseClass = "qida-avatar";
  const sizeClass = `${baseClass}--${size}`;
  const typeClass = `${baseClass}--${type}`;

  // Generar iniciales si no se proporcionan (por ejemplo: "John Doe" -> "JD")
  const getInitials = () => {
    if (text) return text.substring(0, 2).toUpperCase();
    if (alt && alt !== "Avatar") {
      return alt
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
    }
    return "U"; // Usuario por defecto
  };

  // Determinar el contenido del avatar según el tipo
  const renderAvatarContent = () => {
    switch (type) {
      case "image":
        return (
          <img
            src={
              src ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            }
            alt={alt}
            className={`${baseClass}__image`}
          />
        );

      case "text":
        return <span className={`${baseClass}__text`}>{getInitials()}</span>;

      case "icon":
        return (
          <span className={`${baseClass}__icon`}>
            {icon || <DefaultUserIcon />}
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`${baseClass} ${sizeClass} ${typeClass} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      aria-label={alt}
      tabIndex={onClick ? 0 : undefined}
    >
      {renderAvatarContent()}
    </div>
  );
};

// Icono de usuario por defecto
const DefaultUserIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
  </svg>
);

export default Avatar;
