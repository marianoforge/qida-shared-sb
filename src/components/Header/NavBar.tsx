import React from "react";
import "./NavBar.css";

export interface NavItem {
  /**
   * Ícono del elemento de navegación
   */
  icon: React.ReactNode;

  /**
   * Texto del elemento de navegación
   */
  label: string;

  /**
   * Si el elemento está activo
   */
  isActive?: boolean;

  /**
   * Callback cuando se hace clic en el elemento
   */
  onClick?: () => void;
}

export interface NavBarProps {
  /**
   * Elementos de la barra de navegación
   */
  items: NavItem[];

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente NavBar para la aplicación
 */
const NavBar = ({ items = [], className = "", ...props }: NavBarProps) => {
  const navBarClassName = ["qida-navbar", className].filter(Boolean).join(" ");

  return (
    <nav className={navBarClassName} {...props}>
      <div className="qida-navbar__container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`qida-navbar__item ${item.isActive ? "qida-navbar__item--active" : ""}`}
            onClick={item.onClick}
            aria-label={item.label}
            role="button"
            tabIndex={0}
          >
            <div className="qida-navbar__icon">{item.icon}</div>
            <div className="qida-navbar__label">{item.label}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
