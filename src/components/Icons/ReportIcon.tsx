import React from "react";
import { IconProps } from "./SliderIcon";

/**
 * Icono de Reporte estilo Carbon Design System
 */
export const ReportIcon: React.FC<IconProps> = ({
  color = "currentColor",
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" y="18" width="8" height="2" fill={color} />
      <rect x="10" y="13" width="12" height="2" fill={color} />
      <rect x="10" y="23" width="5" height="2" fill={color} />
      <path
        d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
        fill={color}
      />
      <rect className="cls-1" width="32" height="32" fill="none" />
    </svg>
  );
};

export default ReportIcon;
