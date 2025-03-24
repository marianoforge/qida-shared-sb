import React from "react";

export interface IconProps {
  /**
   * Color del icono
   */
  color?: string;

  /**
   * Ancho del icono
   */
  width?: number | string;

  /**
   * Alto del icono
   */
  height?: number | string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Icono de Slider (Ajustes) de Carbon Design System
 * @see https://carbondesignsystem.com/elements/icons/library/
 */
export const SliderIcon: React.FC<IconProps> = ({
  color = "currentColor",
  width = 21,
  height = 21,
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
      <path
        d="M28,14H27V2H25V14H24a2.0019,2.0019,0,0,0-2,2v2a2.0023,2.0023,0,0,0,2,2h1V30h2V20h1a2.0027,2.0027,0,0,0,2-2V16A2.0023,2.0023,0,0,0,28,14Zm0,4H24V16h4Z"
        fill={color}
      />
      <path
        d="M18,6H17V2H15V6H14a2.0019,2.0019,0,0,0-2,2v2a2.0019,2.0019,0,0,0,2,2h1V30h2V12h1a2.002,2.002,0,0,0,2-2V8A2.002,2.002,0,0,0,18,6Zm0,4H14V8h4Z"
        fill={color}
      />
      <path
        d="M8,20H7V2H5V20H4a2.0023,2.0023,0,0,0-2,2v2a2.0023,2.0023,0,0,0,2,2H5v4H7V26H8a2.0023,2.0023,0,0,0,2-2V22A2.0023,2.0023,0,0,0,8,20Zm0,4H4V22H8Z"
        fill={color}
      />
    </svg>
  );
};

export default SliderIcon;
