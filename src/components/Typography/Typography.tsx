import React from "react";
import "./Typography.css";

export interface TypographyProps {
  /**
   * Variante de tipografía
   */
  variant?:
    | "headline-xl"
    | "headline-lg"
    | "headline-md"
    | "headline-sm"
    | "title-lg"
    | "title-md"
    | "title-sm"
    | "body-lg"
    | "body-md"
    | "body-sm"
    | "label-lg"
    | "label-md"
    | "label-sm";
  /**
   * Peso de la fuente
   */
  weight?: "regular" | "medium" | "bold";
  /**
   * Contenido del texto
   */
  children: React.ReactNode;
  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente de tipografía que utiliza los tokens de diseño
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = "body-md",
  weight = "regular",
  children,
  className = "",
}) => {
  return (
    <div
      className={`typography typography-${variant} typography-weight-${weight} ${className}`}
    >
      {children}
    </div>
  );
};

export default Typography;
