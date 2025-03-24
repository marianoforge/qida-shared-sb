import React from "react";
import { IconProps } from "./SliderIcon";

/**
 * Icono de Chat de Carbon Design System
 * @see https://carbondesignsystem.com/elements/icons/library/
 */
export const ChatIcon: React.FC<IconProps> = ({
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
      <path
        d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"
        fill={color}
      />
      <rect x="8" y="10" width="16" height="2" fill={color} />
      <rect x="8" y="16" width="10" height="2" fill={color} />
    </svg>
  );
};

export default ChatIcon;
