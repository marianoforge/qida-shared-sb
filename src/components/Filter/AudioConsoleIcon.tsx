import React from "react";

export interface AudioConsoleIconProps {
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
 * Icono AudioConsole de Carbon Design System
 * @see https://carbondesignsystem.com/elements/icons/library/
 */
export const AudioConsoleIcon: React.FC<AudioConsoleIconProps> = ({
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
        d="M21 28V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zm-8-24h6v24h-6V4zm17 8h-4v2h4v10h-4v2h4c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zM6 14H2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4v-2H2V16h4v-2z"
        fill={color}
      />
    </svg>
  );
};

export default AudioConsoleIcon;
