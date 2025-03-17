import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "headline-xl",
        "headline-lg",
        "headline-md",
        "headline-sm",
        "title-lg",
        "title-md",
        "title-sm",
        "body-lg",
        "body-md",
        "body-sm",
        "label-lg",
        "label-md",
        "label-sm",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "bold"],
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "body-md",
    weight: "regular",
    children: "This is a typography example with Aeonik font",
  },
};

export const AllVariants: Story = {
  args: {
    children: "Typography variants",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "800px",
      }}
    >
      <Typography variant="headline-xl" weight="bold">
        Headline XL Bold - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headline-lg" weight="bold">
        Headline LG Bold - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headline-md" weight="bold">
        Headline MD Bold - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headline-sm" weight="bold">
        Headline SM Bold - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="title-lg" weight="medium">
        Title LG Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="title-md" weight="medium">
        Title MD Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="title-sm" weight="medium">
        Title SM Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body-lg" weight="regular">
        Body LG Regular - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body-md" weight="regular">
        Body MD Regular - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body-sm" weight="regular">
        Body SM Regular - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="label-lg" weight="medium">
        Label LG Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="label-md" weight="medium">
        Label MD Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="label-sm" weight="medium">
        Label SM Medium - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
};

export const WeightVariants: Story = {
  args: {
    children: "Weight variants",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography variant="title-lg" weight="regular">
        Regular - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="title-lg" weight="medium">
        Medium - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="title-lg" weight="bold">
        Bold - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
};
