import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Header, NavBar } from "./index";
import {
  ChatIcon,
  MenuIcon,
  NotificationIcon,
  PhoneIcon,
  SliderIcon,
  ReportIcon,
} from "../Icons";

// Header Stories
const metaHeader: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["operator", "client"],
      description: "Tipo de header",
    },
    showNotifications: {
      control: "boolean",
      description: "Mostrar notificaciones",
    },
    device: {
      control: "radio",
      options: ["mobile", "desktop"],
      description: "Tipo de dispositivo",
    },
  },
};

export default metaHeader;
type HeaderStory = StoryObj<typeof Header>;

// Header para operadores (desktop)
export const OperatorDesktop: HeaderStory = {
  args: {
    variant: "operator",
    device: "desktop",
    showCoordinatorTag: true,
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Header para operadores en versión desktop",
      },
    },
  },
};

// Header para operadores con notificaciones (desktop)
export const OperatorDesktopWithNotifications: HeaderStory = {
  args: {
    variant: "operator",
    device: "desktop",
    showNotifications: true,
    showCoordinatorTag: true,
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Header para operadores en versión desktop con notificaciones",
      },
    },
  },
};

// Header para operadores (móvil)
export const OperatorMobile: HeaderStory = {
  args: {
    variant: "operator",
    device: "mobile",
    showCoordinatorTag: true,
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Header para operadores en versión móvil",
      },
    },
  },
};

// Header para clientes (desktop)
export const ClientDesktop: HeaderStory = {
  args: {
    variant: "client",
    device: "desktop",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Header para clientes en versión desktop",
      },
    },
  },
};

// Header para clientes (móvil)
export const ClientMobile: HeaderStory = {
  args: {
    variant: "client",
    device: "mobile",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Header para clientes en versión móvil",
      },
    },
  },
};

// Barra de navegación
export const NavigationBar: StoryObj<typeof NavBar> = {
  render: () => (
    <NavBar
      items={[
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
        {
          icon: <ReportIcon width={24} height={24} />,
          label: "Item",
          isActive: false,
        },
      ]}
    />
  ),
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "Barra de navegación con íconos de reporte",
      },
    },
  },
};
