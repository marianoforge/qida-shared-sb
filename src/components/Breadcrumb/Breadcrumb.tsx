import React from "react";
import "./Breadcrumb.css";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export interface BreadcrumbProps {
  /**
   * Los ítems que componen el breadcrumb
   */
  items: BreadcrumbItem[];

  /**
   * Variante del breadcrumb
   */
  variant?: "AD" | "VCX";

  /**
   * Callback al hacer clic en el botón de retroceso (solo móvil)
   */
  onBackClick?: () => void;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = "AD",
  onBackClick,
  className = "",
}) => {
  // Determinar si estamos en vista móvil
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Renderizar vista móvil
  if (isMobile) {
    return (
      <div
        className={`qida-breadcrumb qida-breadcrumb--${variant.toLowerCase()}-mobile ${className}`}
      >
        {variant === "AD" ? (
          // AD Mobile Breadcrumb
          <div className="qida-breadcrumb__mobile-container">
            <div
              className="qida-breadcrumb__arrow"
              onClick={onBackClick}
              role="button"
              aria-label="Go back"
              tabIndex={0}
            >
              <div className="qida-breadcrumb__arrow-icon"></div>
            </div>
            <span className="qida-breadcrumb__label">
              {items[items.length - 1]?.label || "Home"}
            </span>
          </div>
        ) : (
          // VCX Mobile Breadcrumb
          <div className="qida-breadcrumb__mobile-container">
            <div
              className="qida-breadcrumb__back-arrow qida-breadcrumb__back-arrow--vcx"
              onClick={onBackClick}
              role="button"
              aria-label="Go back"
              tabIndex={0}
            ></div>
            <span className="qida-breadcrumb__label">
              {items[items.length - 1]?.label || "Home"}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Procesar ítems para la vista desktop
  const processedItems = [...items];
  let shouldTruncate = variant === "AD" && items.length > 3;
  let visibleItems = [...processedItems];

  if (shouldTruncate) {
    // Mantener el primer item, truncar los intermedios, y mantener los últimos dos
    visibleItems = [
      processedItems[0],
      { label: "...", href: "#" },
      ...processedItems.slice(-2),
    ];
  }

  // Renderizar vista desktop
  return (
    <nav
      className={`qida-breadcrumb qida-breadcrumb--${variant.toLowerCase()}-desktop ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="qida-breadcrumb__list">
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;
          const isEllipsis = item.label === "...";

          return (
            <li
              key={index}
              className={`qida-breadcrumb__item ${isLast ? "qida-breadcrumb__item--current" : ""}`}
            >
              {isEllipsis ? (
                <span className="qida-breadcrumb__ellipsis">{item.label}</span>
              ) : (
                <a
                  href={isLast ? undefined : item.href}
                  className={`qida-breadcrumb__link ${isLast ? "qida-breadcrumb__link--current" : ""}`}
                  aria-current={isLast ? "page" : undefined}
                  tabIndex={isLast ? -1 : 0}
                >
                  {item.label}
                </a>
              )}

              {!isLast && (
                <div
                  className={`qida-breadcrumb__separator qida-breadcrumb__separator--${variant.toLowerCase()}`}
                ></div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
