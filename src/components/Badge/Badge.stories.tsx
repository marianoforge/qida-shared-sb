import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeIcon } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Contenido del badge (generalmente un número)",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del badge",
    },
    type: {
      control: "select",
      options: ["filled", "outlined"],
      description: "Tipo de badge",
    },
    color: {
      control: "select",
      options: ["primary", "error", "custom"],
      description: "Color del badge",
    },
    customColor: {
      control: "color",
      description: 'Color personalizado (solo funciona cuando color="custom")',
    },
    hideZero: {
      control: "boolean",
      description: "Ocultar el badge cuando el contenido es 0",
    },
    dot: {
      control: "boolean",
      description: "Mostrar punto en lugar de número",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "3",
    size: "md",
    type: "filled",
    color: "primary",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Badge content="3" size="sm" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          sm
        </div>
      </div>
      <div>
        <Badge content="3" size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          md
        </div>
      </div>
      <div>
        <Badge content="3" size="lg" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          lg
        </div>
      </div>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Badge content="3" type="filled" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Filled
        </div>
      </div>
      <div>
        <Badge content="3" type="outlined" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Outlined
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Badge content="3" color="primary" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Primary
        </div>
      </div>
      <div>
        <Badge content="3" color="error" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Error
        </div>
      </div>
      <div>
        <Badge content="3" color="custom" customColor="#6366F1" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Custom
        </div>
      </div>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Badge content="3" dot size="sm" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          sm
        </div>
      </div>
      <div>
        <Badge content="3" dot size="md" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          md
        </div>
      </div>
      <div>
        <Badge content="3" dot size="lg" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          lg
        </div>
      </div>
    </div>
  ),
};

export const MaxValue: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Badge content="99+" size="lg" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Valor máximo
        </div>
      </div>
    </div>
  ),
};

const badgeIconMeta: Meta<typeof BadgeIcon> = {
  title: "Components/BadgeIcon",
  component: BadgeIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Definiciones de argTypes para BadgeIcon
  },
};

export const WithIcon: Story = {
  render: () => {
    const UserIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="currentColor"
        />
      </svg>
    );

    const BellIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
          fill="currentColor"
        />
      </svg>
    );

    return (
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <div>
          <BadgeIcon icon={<UserIcon />} content="3" badgeColor="error" />
          <div
            style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
          >
            Con número
          </div>
        </div>
        <div>
          <BadgeIcon icon={<BellIcon />} content="3" dot badgeColor="error" />
          <div
            style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
          >
            Con punto
          </div>
        </div>
      </div>
    );
  },
};

export const IconBadgeVariations: Story = {
  render: () => {
    const NotificationIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
          fill="currentColor"
        />
      </svg>
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Sin badge</h3>
          <BadgeIcon icon={<NotificationIcon />} content="0" hideZero />
        </div>
        <div>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Con badge</h3>
          <BadgeIcon
            icon={<NotificationIcon />}
            content="3"
            badgeColor="error"
          />
        </div>
        <div>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Clickeable</h3>
          <BadgeIcon
            icon={<NotificationIcon />}
            content="3"
            badgeColor="error"
            onClick={() => alert("Icono con badge clickeado")}
          />
        </div>
      </div>
    );
  },
};

export const UsageExample: Story = {
  render: () => {
    const NotificationIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
          fill="currentColor"
        />
      </svg>
    );

    const UserIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="currentColor"
        />
      </svg>
    );

    const MessageIcon = () => (
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
    );

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 16px",
            background: "#f9fafb",
            borderRadius: "8px",
            width: "300px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Mi App</div>
          <div style={{ display: "flex", gap: "16px" }}>
            <BadgeIcon
              icon={<MessageIcon />}
              content="12"
              badgeColor="primary"
              badgeSize="sm"
            />
            <BadgeIcon
              icon={<NotificationIcon />}
              content="5"
              badgeColor="error"
              badgeSize="sm"
            />
            <BadgeIcon icon={<UserIcon />} content="0" hideZero />
          </div>
        </div>
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Ejemplo de uso en una interfaz
        </div>
      </div>
    );
  },
};
