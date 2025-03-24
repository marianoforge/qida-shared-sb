import React from "react";
import "./Footer.css";

export interface FooterProps {
  /**
   * Imagen del asesor
   */
  imageSrc?: string;

  /**
   * Nombre del asesor
   */
  advisorName?: string;

  /**
   * Teléfono de contacto
   */
  phone?: string;

  /**
   * Email de contacto
   */
  email?: string;

  /**
   * Título del footer
   */
  title?: string;

  /**
   * Subtítulo o descripción
   */
  subtitle?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Footer para la aplicación
 */
const Footer = ({
  imageSrc = "https://randomuser.me/api/portraits/women/44.jpg",
  advisorName = "Alicia Martín",
  phone = "635 847 129",
  email = "alicia.martin@qida.es",
  title = "¿Tienes alguna duda?",
  subtitle = "tu asesora familiar",
  className = "",
  ...props
}: FooterProps) => {
  const footerClassName = ["qida-footer", className].filter(Boolean).join(" ");

  return (
    <div className={footerClassName} {...props}>
      {/* Desktop version */}
      <div className="qida-footer-desktop">
        <div className="qida-footer-image">
          <img src={imageSrc} alt={advisorName} />
        </div>
        <div className="qida-footer-info">
          <h4 className="qida-footer-title">{title}</h4>
          <p className="qida-footer-advisor-text">
            Habla con {advisorName}, {subtitle}
          </p>
          <p className="qida-footer-contact-info">
            {phone} | <span className="qida-footer-email">{email}</span>
          </p>
        </div>
      </div>

      {/* Mobile version */}
      <div className="qida-footer-mobile">
        <h4 className="qida-footer-title-mobile">{title}</h4>
        <div className="qida-footer-image-mobile">
          <img src={imageSrc} alt={advisorName} />
        </div>
        <div className="qida-footer-info-mobile">
          <p className="qida-footer-advisor-text-mobile">
            Habla con {advisorName},<br />
            {subtitle}
          </p>
          <p className="qida-footer-contact-info-mobile">
            {phone} | <span className="qida-footer-email">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
