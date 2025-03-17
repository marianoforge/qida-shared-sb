import React, { useState } from "react";
import "./Accordion.css";

export interface AccordionProps {
  /**
   * Título del acordeón
   */
  title: string;
  /**
   * Contenido del acordeón
   */
  children: React.ReactNode;
  /**
   * Si el acordeón está abierto inicialmente
   */
  defaultOpen?: boolean;
  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente de acordeón que utiliza los tokens de diseño
 */
export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${className}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
