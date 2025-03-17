import React from "react";
import "./Avatar.css";

export interface AvatarProps {
  /**
   * Tamaño del avatar
   */
  size?: "sm" | "md" | "lg";
  /**
   * Tipo de avatar
   */
  type: "image" | "icon" | "text";
  /**
   * URL de la imagen (solo para type="image")
   */
  imageUrl?: string;
  /**
   * Texto a mostrar (solo para type="text")
   */
  text?: string;
  /**
   * Icono a mostrar (solo para type="icon")
   */
  icon?: React.ReactNode;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Alt text para la imagen (accesibilidad)
   */
  alt?: string;
}

/**
 * Componente Avatar que muestra una imagen, icono o texto en un círculo
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  type,
  imageUrl,
  text,
  icon,
  className = "",
  alt = "Avatar",
}) => {
  const renderContent = () => {
    switch (type) {
      case "image":
        return imageUrl ? <img src={imageUrl} alt={alt} /> : null;
      case "icon":
        return icon;
      case "text":
        return text ? text.substring(0, 2) : null;
      default:
        return null;
    }
  };

  return (
    <div className={`avatar avatar-${size} avatar-${type} ${className}`}>
      {renderContent()}
    </div>
  );
};

export default Avatar;
