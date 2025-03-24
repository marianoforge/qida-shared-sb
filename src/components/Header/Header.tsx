import React from "react";
import "./Header.css";
import {
  ChatIcon,
  MenuIcon,
  NotificationIcon,
  PhoneIcon,
  SliderIcon,
  QidaLogoIcon,
} from "../Icons";

export interface HeaderProps {
  /**
   * Tipo de header
   */
  variant?: "operator" | "client";

  /**
   * Mostrar tag de coordinador
   */
  showCoordinatorTag?: boolean;

  /**
   * Mostrar notificaciones
   */
  showNotifications?: boolean;

  /**
   * Tipo de dispositivo
   */
  device?: "mobile" | "desktop";

  /**
   * URL de la imagen del avatar
   */
  avatarSrc?: string;

  /**
   * Evento al hacer clic en el menú
   */
  onMenuClick?: () => void;

  /**
   * Evento al hacer clic en el chat
   */
  onChatClick?: () => void;

  /**
   * Evento al hacer clic en las notificaciones
   */
  onNotificationClick?: () => void;

  /**
   * Evento al hacer clic en el avatar
   */
  onAvatarClick?: () => void;

  /**
   * Evento al hacer clic en el teléfono (solo variante client)
   */
  onPhoneClick?: () => void;

  /**
   * Evento al hacer clic en configuración (solo variante client)
   */
  onSettingsClick?: () => void;

  /**
   * Clase CSS adicional
   */
  className?: string;
}

/**
 * Componente Header para la aplicación
 */
const Header = ({
  variant = "operator",
  showCoordinatorTag = false,
  showNotifications = false,
  device = "desktop",
  avatarSrc = "https://randomuser.me/api/portraits/women/44.jpg",
  onMenuClick,
  onChatClick,
  onNotificationClick,
  onAvatarClick,
  onPhoneClick,
  onSettingsClick,
  className = "",
  ...props
}: HeaderProps) => {
  const headerClassName = ["qida-header", `qida-header--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  // Contenido específico para operador móvil
  const renderOperatorMobile = () => (
    <div className="qida-header__mobile">
      <div className="qida-header__logo">
        <QidaLogoIcon
          className="qida-header__logo-img"
          width={80}
          height={34}
        />
      </div>
      {showCoordinatorTag && (
        <div className="qida-header__tag">
          <div className="qida-header__tag-bg" />
          <div className="qida-header__tag-text">Coordinador/a</div>
        </div>
      )}
      <div className="qida-header__icons">
        <div className="qida-header__menu-text">Menú</div>
        <div className="qida-header__menu-icon" onClick={onMenuClick}>
          <MenuIcon color="#ffffff" width={24} height={24} />
        </div>
      </div>
    </div>
  );

  // Contenido específico para operador desktop
  const renderOperatorDesktop = () => (
    <div className="qida-header__desktop">
      <div className="qida-header__left">
        <div className="qida-header__logo">
          <QidaLogoIcon
            className="qida-header__logo-img"
            width={80}
            height={34}
          />
        </div>
        {showCoordinatorTag && (
          <div className="qida-header__tag">
            <div className="qida-header__tag-bg" />
            <div className="qida-header__tag-text">Coordinador/a</div>
          </div>
        )}
      </div>
      <div className="qida-header__right">
        <div className="qida-header__icon-chat" onClick={onChatClick}>
          <ChatIcon color="#ffffff" width={24} height={24} />
        </div>
        <div
          className="qida-header__icon-notification"
          onClick={onNotificationClick}
        >
          <NotificationIcon color="#ffffff" width={24} height={24} />
        </div>
        <img
          className="qida-header__avatar"
          alt="Avatar"
          src={avatarSrc}
          onClick={onAvatarClick}
        />
      </div>
    </div>
  );

  // Contenido específico para cliente móvil
  const renderClientMobile = () => (
    <div className="qida-header__mobile">
      <div className="qida-header__logo">
        <QidaLogoIcon
          className="qida-header__logo-img"
          width={80}
          height={34}
        />
      </div>
      <div className="qida-header__icons">
        <div className="qida-header__menu-text">Menú</div>
        <div className="qida-header__menu-icon" onClick={onMenuClick}>
          <MenuIcon color="#ffffff" width={24} height={24} />
        </div>
      </div>
    </div>
  );

  // Contenido específico para cliente desktop
  const renderClientDesktop = () => (
    <div className="qida-header__desktop">
      <div className="qida-header__logo">
        <QidaLogoIcon
          className="qida-header__logo-img"
          width={80}
          height={34}
        />
      </div>
      <div className="qida-header__right">
        <div className="qida-header__icon-phone" onClick={onPhoneClick}>
          <PhoneIcon color="#ffffff" width={32} height={32} />
        </div>
        <div className="qida-header__icon-chat" onClick={onChatClick}>
          <ChatIcon color="#ffffff" width={32} height={32} />
        </div>
        <div className="qida-header__icon-settings" onClick={onSettingsClick}>
          <SliderIcon color="#ffffff" width={32} height={32} />
        </div>
        <img
          className="qida-header__avatar qida-header__avatar--large"
          alt="Avatar"
          src={avatarSrc}
          onClick={onAvatarClick}
        />
      </div>
    </div>
  );

  // Renderizar la variante correcta según los props
  const renderContent = () => {
    if (variant === "operator") {
      return device === "mobile"
        ? renderOperatorMobile()
        : renderOperatorDesktop();
    } else {
      return device === "mobile" ? renderClientMobile() : renderClientDesktop();
    }
  };

  return (
    <header className={headerClassName} {...props}>
      {renderContent()}
    </header>
  );
};

export default Header;
