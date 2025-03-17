import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    defaultOpen: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Accordion Title",
    children:
      "This is the content of the accordion. It can contain any type of content, including text, images, and other components.",
    defaultOpen: false,
  },
};

export const OpenByDefault: Story = {
  args: {
    title: "Accordion Open by Default",
    children:
      "This accordion is open by default. You can click the header to close it.",
    defaultOpen: true,
  },
};

export const WithLongContent: Story = {
  args: {
    title: "Accordion with Long Content",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, 
    nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl 
    aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
    quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam 
    nisl nunc eu nisl.`,
    defaultOpen: true,
  },
};

export const MultipleAccordions: Story = {
  args: {
    title: "Multiple Accordions",
    children: "This story shows multiple accordions",
  },
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion title="First Accordion">
        Content for the first accordion.
      </Accordion>
      <Accordion title="Second Accordion" defaultOpen={true}>
        Content for the second accordion.
      </Accordion>
      <Accordion title="Third Accordion">
        Content for the third accordion.
      </Accordion>
    </div>
  ),
};
