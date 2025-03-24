import React, { HTMLAttributes } from "react";
import "./Divider.css";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Texto a mostrar en el divider (fecha u otro texto)
   */
  label?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Divider para separar visualmente secciones de contenido
 */
export const Divider: React.FC<DividerProps> = ({
  label,
  className = "",
  ...props
}) => {
  const dividerClassName = ["qida-divider", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={dividerClassName} {...props}>
      <div className="qida-divider__line" />
      {label && (
        <div className="qida-divider__label">
          <span className="qida-divider__label-text">{label}</span>
        </div>
      )}
    </div>
  );
};

export default Divider;
