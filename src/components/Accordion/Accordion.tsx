import React, { useState } from "react";
import "./Accordion.css";

export interface AccordionProps {
  /**
   * Título del acordeón
   */
  title: string;

  /**
   * Contenido que se mostrará cuando el acordeón esté expandido
   */
  children: React.ReactNode;

  /**
   * Expandir el acordeón por defecto
   */
  defaultExpanded?: boolean;

  /**
   * ID único para accesibilidad
   */
  id?: string;

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
  defaultExpanded = false,
  id,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const accordionId =
    id || `accordion-${Math.random().toString(36).substr(2, 9)}`;
  const contentId = `${accordionId}-content`;

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`qida-accordion ${isExpanded ? "qida-accordion--expanded" : ""} ${className}`}
      id={accordionId}
    >
      <button
        className="qida-accordion__header"
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        type="button"
      >
        <span className="qida-accordion__title">{title}</span>
        <span className="qida-accordion__icon" aria-hidden="true"></span>
      </button>
      <div
        id={contentId}
        className="qida-accordion__content"
        role="region"
        aria-labelledby={accordionId}
        hidden={!isExpanded}
      >
        <div className="qida-accordion__content-inner">{children}</div>
      </div>
    </div>
  );
};

/**
 * Grupo de acordeones que comparten un comportamiento común
 */
export interface AccordionGroupProps {
  /**
   * Acordeones dentro del grupo
   */
  children: React.ReactNode;

  /**
   * Permitir múltiples acordeones abiertos a la vez
   */
  allowMultiple?: boolean;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  allowMultiple = false,
  className = "",
}) => {
  return <div className={`qida-accordion-group ${className}`}>{children}</div>;
};

export default Accordion;
