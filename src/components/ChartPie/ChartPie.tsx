import React from "react";
import "./ChartPie.css";

export interface ChartPieProps {
  /**
   * Tamaño del gráfico
   */
  size?: "sm" | "md";

  /**
   * Número de colores a utilizar (2 o 3)
   */
  colors?: 2 | 3;

  /**
   * Valor a mostrar en el centro del gráfico
   */
  value?: number;

  /**
   * Primer color del gráfico (base)
   */
  baseColor?: string;

  /**
   * Segundo color del gráfico (principal)
   */
  primaryColor?: string;

  /**
   * Tercer color del gráfico (solo cuando colors es 3)
   */
  secondaryColor?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente de gráfico circular que muestra un valor porcentual
 */
export const ChartPie: React.FC<ChartPieProps> = ({
  size = "sm",
  colors = 2,
  value = 28,
  baseColor = "#b3b3b3",
  primaryColor = "#336661",
  secondaryColor = "#ad941a",
  className = "",
}) => {
  // Asegurar que el valor esté entre 0 y 100
  const safeValue = Math.min(100, Math.max(0, value));

  // Calcular las clases CSS
  const chartSizeClass = `qida-chart-pie--${size}`;
  const colorsClass = `qida-chart-pie--colors-${colors}`;
  const combinedClassName = `qida-chart-pie ${chartSizeClass} ${colorsClass} ${className}`;

  // Crear el gradiente cónico para el gráfico
  const createConicGradient = () => {
    if (colors === 2) {
      // Gráfico de 2 colores
      return {
        background: `conic-gradient(
          ${primaryColor} 0% ${safeValue}%, 
          ${baseColor} ${safeValue}% 100%
        )`,
      };
    } else {
      // Gráfico de 3 colores
      // Distribución proporcional del valor entre los tres sectores
      let part1 = 0;
      let part2 = 0;
      let part3 = safeValue;

      if (safeValue > 33) {
        part3 = 33;
        part2 = safeValue - 33;
      }

      if (safeValue > 66) {
        part2 = 33;
        part1 = safeValue - 66;
      }

      return {
        background: `conic-gradient(
          ${secondaryColor} 0% ${part1}%, 
          ${baseColor} ${part1}% ${part1 + part2}%, 
          ${primaryColor} ${part1 + part2}% ${part1 + part2 + part3}%, 
          #f0f0f0 ${part1 + part2 + part3}% 100%
        )`,
      };
    }
  };

  return (
    <div className={combinedClassName}>
      <div className="qida-chart-pie__percentage" style={createConicGradient()}>
        <div className="qida-chart-pie__value">{safeValue}</div>
      </div>
    </div>
  );
};

export default ChartPie;
