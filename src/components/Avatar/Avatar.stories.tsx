import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["image", "icon", "text"],
    },
    imageUrl: { control: "text" },
    text: { control: "text" },
    icon: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Contenedor para mostrar los avatares más grandes en Storybook
const AvatarContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ transform: "scale(2)", margin: "40px", transformOrigin: "center" }}
  >
    {children}
  </div>
);

export const ImageAvatar: Story = {
  args: {
    type: "image",
    size: "md",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    alt: "Jane Doe",
  },
};

export const TextAvatar: Story = {
  args: {
    type: "text",
    size: "md",
    text: "JS",
  },
  render: (args) => (
    <AvatarContainer>
      <Avatar {...args} />
    </AvatarContainer>
  ),
};

export const IconAvatar: Story = {
  args: {
    type: "icon",
    size: "md",
  },
  render: (args) => (
    <AvatarContainer>
      <Avatar
        {...args}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
              fill="currentColor"
            />
          </svg>
        }
      />
    </AvatarContainer>
  ),
};

export const AllSizes: Story = {
  args: {
    type: "text",
    text: "AB",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "40px",
        alignItems: "center",
        transform: "scale(1.5)",
        margin: "40px",
        transformOrigin: "left center",
      }}
    >
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};

export const SizesWithImages: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Avatar
          type="image"
          size="sm"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
          alt="Usuario pequeño"
        />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          sm
        </div>
      </div>
      <div>
        <Avatar
          type="image"
          size="md"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
          alt="Usuario mediano"
        />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          md
        </div>
      </div>
      <div>
        <Avatar
          type="image"
          size="lg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
          alt="Usuario grande"
        />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          lg
        </div>
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div>
        <Avatar type="icon" size="lg" alt="Usuario" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Icon
        </div>
      </div>
      <div>
        <Avatar
          type="image"
          size="lg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
          alt="Usuario"
        />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Image
        </div>
      </div>
      <div>
        <Avatar type="text" size="lg" text="MS" alt="María Simone" />
        <div
          style={{ marginTop: "8px", fontSize: "12px", textAlign: "center" }}
        >
          Text
        </div>
      </div>
    </div>
  ),
};

export const ClickableAvatar: Story = {
  args: {
    type: "image",
    size: "lg",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    alt: "Jane Doe",
    onClick: () => alert("Avatar clicked!"),
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: "16px" }}>Equipo del Proyecto</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "-8px", zIndex: 5 }}>
          <Avatar
            type="image"
            size="md"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Usuario 1"
          />
        </div>
        <div style={{ marginRight: "-8px", zIndex: 4 }}>
          <Avatar
            type="image"
            size="md"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Usuario 2"
          />
        </div>
        <div style={{ marginRight: "-8px", zIndex: 3 }}>
          <Avatar
            type="image"
            size="md"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Usuario 3"
          />
        </div>
        <div style={{ marginRight: "-8px", zIndex: 2 }}>
          <Avatar type="text" size="md" text="ML" alt="María López" />
        </div>
        <div style={{ zIndex: 1 }}>
          <Avatar type="text" size="md" text="+3" alt="3 usuarios más" />
        </div>
      </div>
    </div>
  ),
};
