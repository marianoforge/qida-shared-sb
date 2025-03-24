import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { DropdownItem } from "../DropdownItem";
import { BasicDropdownExample } from "./BasicDropdownExample";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["bottom", "top", "left", "right"],
      description: "Posición del menú respecto al trigger",
    },
    width: {
      control: "text",
      description: "Ancho del menú",
    },
    maxHeight: {
      control: "text",
      description: "Altura máxima del menú",
    },
    defaultOpen: {
      control: "boolean",
      description: "Si el menú debería estar abierto inicialmente",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Ejemplo práctico y completo
export const BasicExample: Story = {
  args: {
    children: <></>,
    trigger: <></>,
  },
  render: () => <BasicDropdownExample />,
};

// Dropdown básico
export const Basic: Story = {
  args: {
    trigger: <Button>Abrir menú</Button>,
    children: (
      <>
        <DropdownItem label="Opción 1" />
        <DropdownItem label="Opción 2" />
        <DropdownItem label="Opción 3" />
      </>
    ),
    defaultOpen: true,
  },
};

// Dropdown con diferentes tipos de items
export const WithDifferentItemTypes: Story = {
  args: {
    trigger: <Button>Abrir menú</Button>,
    children: (
      <>
        <DropdownItem label="Item de texto" type="text" />
        <DropdownItem label="Item con checkbox" type="checkbox" checked />
        <DropdownItem
          label="Item con icono"
          type="icon"
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="currentColor"
              />
            </svg>
          }
        />
      </>
    ),
    defaultOpen: true,
  },
};

// Dropdown con altura máxima y scroll
export const WithScroll: Story = {
  args: {
    trigger: <Button>Abrir menú</Button>,
    width: "200px",
    children: Array.from({ length: 8 }).map((_, i) => (
      <DropdownItem key={i} label={`Opción ${i + 1}`} />
    )),
    maxHeight: "200px",
    defaultOpen: true,
  },
};

// Dropdown controlado
export const Controlled: Story = {
  args: {
    trigger: <Button>Abrir menú</Button>,
    children: (
      <>
        <DropdownItem label="Opción 1" />
        <DropdownItem label="Opción 2" />
        <DropdownItem label="Opción 3" />
      </>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Cerrar menú" : "Abrir menú"}
        </Button>
        <div style={{ marginTop: "10px" }}>
          <Dropdown
            {...args}
            open={open}
            onOpenChange={setOpen}
            trigger={
              <Button variant="secondary-primary">Click para dropdown</Button>
            }
          />
        </div>
      </div>
    );
  },
};

// Dropdown de notificaciones (estilo AD)
export const NotificationsDropdown: Story = {
  args: {
    trigger: (
      <Button
        variant="icon-transparent"
        iconOnly
        startIcon={
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 22C11.1 22 12 21.1 12 20H8C8 21.1 8.9 22 10 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
              fill="currentColor"
            />
          </svg>
        }
      />
    ),
    width: "390px",
    defaultOpen: true,
    menuClassName: "qida-dropdown__menu--large",
    children: <></>,
  },
  render: (args) => (
    <Dropdown {...args}>
      <div className="qida-dropdown__header">
        <span className="qida-dropdown__header-title">
          Gestión de notificaciones
        </span>
        <div className="qida-dropdown__header-icon">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 22C11.1 22 12 21.1 12 20H8C8 21.1 8.9 22 10 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div style={{ padding: "8px 0" }}>
        {[
          { title: "Title 1", date: "Hoy" },
          { title: "Title 2", date: "Martes" },
          { title: "Title 3", date: "Lunes, 8 jul" },
        ].map((notification, index) => (
          <div key={index} className="qida-dropdown__notification-item">
            <div className="qida-dropdown__notification-icon">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C10.1 22 11 21.1 11 20H7C7 21.1 7.9 22 9 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="qida-dropdown__notification-content">
              <span className="qida-dropdown__notification-title">
                {notification.title}
              </span>
              <div className="qida-dropdown__notification-description">
                Lorem ipsum dolor sit amet consectetur. Elementum nisi pretium
                at volutpat.
              </div>
              <div className="qida-dropdown__notification-date">
                {notification.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Dropdown>
  ),
};

// Dropdown de mensajes (estilo VCX)
export const MessagesDropdown: Story = {
  args: {
    trigger: (
      <Button
        variant="icon-transparent"
        iconOnly
        startIcon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
              fill="currentColor"
            />
          </svg>
        }
      />
    ),
    width: "320px",
    defaultOpen: true,
    menuClassName: "qida-dropdown__menu--medium",
    children: <></>,
  },
  render: (args) => (
    <Dropdown {...args}>
      {[
        { initial: "EU", title: "Title 1", time: "hace 1h", hasMenu: true },
        { initial: "MA", title: "Title 2", time: "hace 1h", hovered: true },
        { initial: "LR", title: "Title 3", count: 3 },
        {
          initial: "EU",
          title: "Title 4",
          showUnreadOption: true,
          hovered: true,
        },
      ].map((message, index) => (
        <div
          key={index}
          className="qida-dropdown__message-item"
          style={message.hovered ? { backgroundColor: "#e6eceb" } : {}}
        >
          <div className="qida-dropdown__message-badge">{message.initial}</div>
          <div className="qida-dropdown__message-content">
            <div className="qida-dropdown__message-header">
              <div className="qida-dropdown__message-title">
                {message.title}
              </div>
              {message.time && (
                <div className="qida-dropdown__message-time">
                  <span>{message.time}</span>
                  {message.hasMenu && (
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVQ4jWNgGAXUAIz//v37TwxmIFmDxDuYEAAyDGQZA9RCsgwAOZOBAQMDQZcwUt0AYgHVXTAKqA8AcYYWG9o+kXEAAAAASUVORK5CYII="
                      width="16"
                      height="16"
                      alt="Menu"
                    />
                  )}
                </div>
              )}
              {message.count && (
                <div className="qida-dropdown__message-count">
                  {message.count}
                </div>
              )}
              {message.showUnreadOption && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "4px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    padding: "4px",
                  }}
                >
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0.5V7.5C14 8.33 13.33 9 12.5 9H3.5L0.5 12V0.5C0.5 0.22 0.61 0 0.8 0H13.2C13.39 0 13.5 0.22 13.5 0.5H14Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 500 }}>
                    Marcar como no leído
                  </span>
                </div>
              )}
            </div>
            {(!message.hovered || !message.showUnreadOption) &&
              !message.showUnreadOption && (
                <div className="qida-dropdown__message-text">
                  Lorem ipsum dolor sit amet consectetur. Elementum nisi pretium
                  at volutpat.
                </div>
              )}
          </div>
        </div>
      ))}
    </Dropdown>
  ),
};

// Dropdown con scroll
export const DropdownWithScroll: Story = {
  args: {
    trigger: <Button>Menú con scroll</Button>,
    menuClassName: "qida-dropdown__menu--small qida-dropdown__menu--scrollable",
    width: "160px",
    defaultOpen: true,
    children: <></>,
  },
  render: (args) => (
    <Dropdown {...args}>
      {Array.from({ length: 8 }).map((_, i) => (
        <DropdownItem key={i} label={`Opción ${i + 1}`} />
      ))}
    </Dropdown>
  ),
};
