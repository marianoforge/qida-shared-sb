import React, { HTMLAttributes, useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * El contenido del menú desplegable
   */
  children: React.ReactNode;

  /**
   * El elemento que activa el menú desplegable
   */
  trigger: React.ReactNode;

  /**
   * Si el menú debería estar abierto inicialmente
   */
  defaultOpen?: boolean;

  /**
   * Controla el estado abierto/cerrado del menú (componente controlado)
   */
  open?: boolean;

  /**
   * Función que se ejecuta cuando cambia el estado del menú
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Posición del menú respecto al trigger
   */
  position?: "bottom" | "top" | "left" | "right";

  /**
   * Ancho del menú
   */
  width?: string | number;

  /**
   * Altura máxima del menú (si hay más contenido, se añade scroll)
   */
  maxHeight?: string | number;

  /**
   * Clase CSS adicional para el menú
   */
  menuClassName?: string;

  /**
   * Clase CSS adicional para el trigger
   */
  triggerClassName?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Dropdown para mostrar menús desplegables
 */
export const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  position = "bottom",
  width = "auto",
  maxHeight,
  menuClassName = "",
  triggerClassName = "",
  className = "",
  ...props
}) => {
  // Estado para el manejo del menú (abierto/cerrado)
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Determinar si es un componente controlado o no
  const isControlled = controlledOpen !== undefined;
  const showMenu = isControlled ? controlledOpen : isOpen;

  // Manejar clics fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isControlled) {
          onOpenChange?.(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, isControlled, onOpenChange]);

  // Manejar tecla Escape para cerrar el menú
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showMenu) {
        if (isControlled) {
          onOpenChange?.(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu, isControlled, onOpenChange]);

  // Toggle del menú
  const toggleMenu = () => {
    const newState = !showMenu;
    if (isControlled) {
      onOpenChange?.(newState);
    } else {
      setIsOpen(newState);
    }
  };

  const dropdownClassName = [
    "qida-dropdown",
    `qida-dropdown--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const menuContainerClassName = [
    "qida-dropdown__menu-container",
    `qida-dropdown__menu-container--${position}`,
    showMenu ? "qida-dropdown__menu-container--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const menuContentClassName = ["qida-dropdown__menu", menuClassName]
    .filter(Boolean)
    .join(" ");

  const triggerContainerClassName = ["qida-dropdown__trigger", triggerClassName]
    .filter(Boolean)
    .join(" ");

  // Estilo base para el menú
  const menuStyle: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    display: showMenu ? "block" : "none",
  };

  // Agregar maxHeight y overflowY si se proporciona maxHeight
  if (maxHeight) {
    menuStyle.maxHeight =
      typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;
    menuStyle.overflowY = "auto";
  }

  return (
    <div ref={dropdownRef} className={dropdownClassName} {...props}>
      <div
        className={triggerContainerClassName}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={showMenu}
      >
        {trigger}
      </div>
      <div className={menuContainerClassName}>
        <div
          ref={menuRef}
          className={menuContentClassName}
          role="menu"
          style={menuStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
