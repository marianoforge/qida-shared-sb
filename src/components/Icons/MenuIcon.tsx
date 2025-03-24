import React from "react";
import { IconProps } from "./SliderIcon";

/**
 * Icono de Menú de Carbon Design System
 * @see https://carbondesignsystem.com/elements/icons/library/
 */
export const MenuIcon: React.FC<IconProps> = ({
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
      <rect x="4" y="6" width="24" height="2" fill={color} />
      <rect x="4" y="24" width="24" height="2" fill={color} />
      <rect x="4" y="12" width="24" height="2" fill={color} />
      <rect x="4" y="18" width="24" height="2" fill={color} />
    </svg>
  );
};

export default MenuIcon;
