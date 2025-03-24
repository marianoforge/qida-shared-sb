import React from "react";
import "./Card.css";

export type CardVariant =
  | "home"
  | "evolution"
  | "best-action"
  | "content"
  | "notification";
export type CardSize = "mobile" | "desktop";

export interface CardProps {
  /**
   * Variante del card
   */
  variant: CardVariant;

  /**
   * Tamaño del card
   */
  size?: CardSize;

  /**
   * Título del card
   */
  title?: string;

  /**
   * Subtítulo del card
   */
  subtitle?: string;

  /**
   * Contenido o párrafos del card
   */
  content?: string | string[];

  /**
   * URL de la imagen
   */
  imageUrl?: string;

  /**
   * URL del ícono
   */
  iconUrl?: string;

  /**
   * Texto del botón primario
   */
  primaryButtonText?: string;

  /**
   * Texto del botón secundario
   */
  secondaryButtonText?: string;

  /**
   * Función que se ejecuta al hacer clic en el botón primario
   */
  onPrimaryButtonClick?: () => void;

  /**
   * Función que se ejecuta al hacer clic en el botón secundario
   */
  onSecondaryButtonClick?: () => void;

  /**
   * Función que se ejecuta al hacer clic en el botón de cerrar (para notificaciones)
   */
  onCloseClick?: () => void;

  /**
   * Clases CSS adicionales
   */
  className?: string;
}

/**
 * Componente Card para mostrar información en tarjetas
 */
export const Card: React.FC<CardProps> = ({
  variant,
  size = "desktop",
  title,
  subtitle,
  content,
  imageUrl,
  iconUrl,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onCloseClick,
  className = "",
}) => {
  // Construir clases CSS
  const baseClass = "qida-card";
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;

  // Renderizar contenido según la variante
  const renderContent = () => {
    switch (variant) {
      case "home":
        if (size === "desktop") {
          return (
            <>
              <div className={`${baseClass}__content`}>
                <div className={`${baseClass}__text`}>
                  {Array.isArray(content) ? (
                    content.map((paragraph, index) => (
                      <div key={index} className={`${baseClass}__paragraph`}>
                        {paragraph}
                      </div>
                    ))
                  ) : (
                    <div className={`${baseClass}__paragraph`}>{content}</div>
                  )}
                </div>
                {imageUrl && (
                  <img
                    className={`${baseClass}__image`}
                    alt=""
                    src={imageUrl}
                  />
                )}
              </div>
              {renderButtons()}
            </>
          );
        } else {
          // Mobile version
          return (
            <>
              <div className={`${baseClass}__content`}>
                {imageUrl && (
                  <img
                    className={`${baseClass}__image`}
                    alt=""
                    src={imageUrl}
                  />
                )}
                <div className={`${baseClass}__text`}>
                  {Array.isArray(content) ? (
                    content.map((paragraph, index) => (
                      <div key={index} className={`${baseClass}__paragraph`}>
                        {paragraph}
                      </div>
                    ))
                  ) : (
                    <div className={`${baseClass}__paragraph`}>{content}</div>
                  )}
                </div>
              </div>
              <div className={`${baseClass}__buttons`}>
                {primaryButtonText && (
                  <div
                    className={`${baseClass}__primary-button`}
                    onClick={onPrimaryButtonClick}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`${baseClass}__label-text`}>
                      {primaryButtonText}
                    </div>
                  </div>
                )}
                {secondaryButtonText && (
                  <div
                    className={`${baseClass}__secondary-button`}
                    onClick={onSecondaryButtonClick}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`${baseClass}__label-text`}>
                      {secondaryButtonText}
                    </div>
                  </div>
                )}
              </div>
            </>
          );
        }

      case "evolution":
        return (
          <>
            <div className={`${baseClass}__avatar-text`}>
              <div className={`${baseClass}__avatar`}>
                {imageUrl && (
                  <img
                    className={`${baseClass}__avatar-image`}
                    alt=""
                    src={imageUrl}
                  />
                )}
              </div>
              <div className={`${baseClass}__text`}>
                {Array.isArray(content) ? (
                  content.slice(0, 1).map((paragraph, index) => (
                    <div key={index} className={`${baseClass}__paragraph`}>
                      {paragraph}
                    </div>
                  ))
                ) : (
                  <div className={`${baseClass}__paragraph`}>{content}</div>
                )}
              </div>
            </div>
            <div className={`${baseClass}__text`}>
              {Array.isArray(content) && content.length > 1 ? (
                content.slice(1).map((paragraph, index) => (
                  <div key={index} className={`${baseClass}__paragraph`}>
                    {paragraph}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </>
        );

      case "best-action":
        if (size === "desktop") {
          return (
            <div className={`${baseClass}__main-content`}>
              <div className={`${baseClass}__heading-body`}>
                <div className={`${baseClass}__heading`}>
                  {onCloseClick && (
                    <div
                      className={`${baseClass}__icon-close`}
                      onClick={onCloseClick}
                      role="button"
                      tabIndex={0}
                    >
                      <div className={`${baseClass}__icon-close-vector`}></div>
                    </div>
                  )}
                </div>
                <div className={`${baseClass}__text-icon`}>
                  {iconUrl && (
                    <div className={`${baseClass}__icon-services`}>
                      <img
                        className={`${baseClass}__vector-icon`}
                        alt=""
                        src={iconUrl}
                      />
                    </div>
                  )}
                  <div className={`${baseClass}__text-button`}>
                    <div className={`${baseClass}__paragraph`}>{content}</div>
                    {primaryButtonText && (
                      <div
                        className={`${baseClass}__primary-button`}
                        onClick={onPrimaryButtonClick}
                        role="button"
                        tabIndex={0}
                      >
                        <div className={`${baseClass}__label-text`}>
                          {primaryButtonText}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          // Mobile version
          return (
            <div className={`${baseClass}__content-best-action`}>
              <div className={`${baseClass}__content-close`}>
                {onCloseClick && (
                  <div className={`${baseClass}__close`}>
                    <div
                      className={`${baseClass}__close-icon`}
                      onClick={onCloseClick}
                      role="button"
                      tabIndex={0}
                    ></div>
                  </div>
                )}
                <div className={`${baseClass}__text-icon`}>
                  {iconUrl && (
                    <div className={`${baseClass}__icon-services`}>
                      <img
                        className={`${baseClass}__vector-icon`}
                        alt=""
                        src={iconUrl}
                      />
                    </div>
                  )}
                  <div className={`${baseClass}__paragraph`}>{content}</div>
                </div>
              </div>
              {primaryButtonText && (
                <div className={`${baseClass}__button`}>
                  <div
                    className={`${baseClass}__primary-button`}
                    onClick={onPrimaryButtonClick}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`${baseClass}__label-text`}>
                      {primaryButtonText}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

      case "content":
        return (
          <>
            <div
              className={`${baseClass}__image-container`}
              style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
            >
              <div className={`${baseClass}__icon-placeholder`}>
                <div className={`${baseClass}__icon-placeholder-inner`}></div>
              </div>
            </div>
            <div className={`${baseClass}__content-close`}>
              {title && <div className={`${baseClass}__title`}>{title}</div>}
              {subtitle && (
                <div className={`${baseClass}__subtitle`}>{subtitle}</div>
              )}
              {content && (
                <div className={`${baseClass}__content-text`}>{content}</div>
              )}
            </div>
            {primaryButtonText && (
              <div
                className={`${baseClass}__primary-button`}
                onClick={onPrimaryButtonClick}
                role="button"
                tabIndex={0}
              >
                <div className={`${baseClass}__label-text`}>
                  {primaryButtonText}
                </div>
              </div>
            )}
          </>
        );

      case "notification":
        return (
          <div className={`${baseClass}__notification-content`}>
            {iconUrl && (
              <div className={`${baseClass}__notification-icon`}>
                <img src={iconUrl} alt="" />
              </div>
            )}
            <div className={`${baseClass}__notification-text`}>
              {title && (
                <div className={`${baseClass}__notification-title`}>
                  {title}
                </div>
              )}
              {content && (
                <div className={`${baseClass}__notification-message`}>
                  {content}
                </div>
              )}
            </div>
            {onCloseClick && (
              <button
                className={`${baseClass}__notification-close`}
                onClick={onCloseClick}
                aria-label="Cerrar notificación"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E"
                  alt="Cerrar"
                />
              </button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Renderizar botones (para desktop home cards)
  const renderButtons = () => {
    if (!primaryButtonText && !secondaryButtonText) return null;

    return (
      <div className={`${baseClass}__buttons`}>
        {primaryButtonText && (
          <div
            className={`${baseClass}__primary-button`}
            onClick={onPrimaryButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className={`${baseClass}__label-text`}>
              {primaryButtonText}
            </div>
          </div>
        )}
        {secondaryButtonText && (
          <div
            className={`${baseClass}__secondary-button`}
            onClick={onSecondaryButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className={`${baseClass}__label-text`}>
              {secondaryButtonText}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}>
      {renderContent()}
    </div>
  );
};

export default Card;
