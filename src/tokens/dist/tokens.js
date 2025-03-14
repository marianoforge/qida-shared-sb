/**
 * Do not edit directly
 * Generated from design tokens
 */

export const tokens = {
  "global": {
    "colors": {
      "primary": {
        "50": "#E6F0ED",
        "100": "#C0DBD4",
        "200": "#9BC7BA",
        "300": "#76B2A1",
        "400": "#519E87",
        "500": "#2C8970",
        "600": "#1F6855",
        "700": "#14493B",
        "800": "#0A2B22",
        "900": "#00110A"
      },
      "secondary": {
        "50": "#FFF2E8",
        "100": "#FFD8BF",
        "200": "#FFBB96",
        "300": "#FF9C6E",
        "400": "#FF7A45",
        "500": "#FA541C",
        "600": "#D4380D",
        "700": "#AD2102",
        "800": "#871400",
        "900": "#610B00"
      },
      "tertiary": {
        "50": "#F9F5EF",
        "100": "#F0E8DA",
        "200": "#E3D8C1",
        "300": "#D5C7A7",
        "400": "#C6B78D",
        "500": "#B7A673",
        "600": "#97865A",
        "700": "#746645",
        "800": "#53452F",
        "900": "#30241A"
      },
      "neutral": {
        "50": "#FAFAFA",
        "100": "#F5F5F5",
        "200": "#E8E8E8",
        "300": "#D9D9D9",
        "400": "#BFBFBF",
        "500": "#8C8C8C",
        "600": "#595959",
        "700": "#434343",
        "800": "#262626",
        "900": "#141414"
      },
      "base": {
        "white": "#FFFFFF",
        "black": "#000000"
      },
      "informative": {
        "50": "#E6F7FF",
        "100": "#BAE7FF",
        "500": "#1890FF",
        "700": "#0050B3"
      },
      "success": {
        "50": "#F6FFED",
        "100": "#D9F7BE",
        "500": "#52C41A",
        "700": "#237804"
      },
      "warning": {
        "50": "#FFFBE6",
        "100": "#FFF1B8",
        "300": "#FFD666",
        "700": "#AD6800"
      },
      "error": {
        "50": "#FFF1F0",
        "100": "#FFCCC7",
        "300": "#FF7875",
        "500": "#F5222D",
        "700": "#A8071A"
      }
    },
    "elevations": {
      "none": "none",
      "sm": {
        "shadow1": {
          "x": 0,
          "y": 1,
          "blur": 2,
          "spread": 0,
          "color": "#00000008",
          "value": "0px 1px 2px 0px #00000008"
        },
        "shadow2": {
          "x": 0,
          "y": 1,
          "blur": 3,
          "spread": 0,
          "color": "#0000001A",
          "value": "0px 1px 3px 0px #0000001A"
        }
      },
      "md": {
        "shadow1": {
          "x": 0,
          "y": 2,
          "blur": 4,
          "spread": 0,
          "color": "#00000008",
          "value": "0px 2px 4px 0px #00000008"
        },
        "shadow2": {
          "x": 0,
          "y": 4,
          "blur": 6,
          "spread": 0,
          "color": "#0000001A",
          "value": "0px 4px 6px 0px #0000001A"
        }
      },
      "lg": {
        "shadow1": {
          "x": 0,
          "y": 4,
          "blur": 6,
          "spread": 0,
          "color": "#00000008",
          "value": "0px 4px 6px 0px #00000008"
        },
        "shadow2": {
          "x": 0,
          "y": 10,
          "blur": 15,
          "spread": 0,
          "color": "#0000001A",
          "value": "0px 10px 15px 0px #0000001A"
        }
      },
      "xl": {
        "shadow1": {
          "x": 0,
          "y": 8,
          "blur": 10,
          "spread": 0,
          "color": "#00000008",
          "value": "0px 8px 10px 0px #00000008"
        },
        "shadow2": {
          "x": 0,
          "y": 20,
          "blur": 25,
          "spread": 0,
          "color": "#0000001A",
          "value": "0px 20px 25px 0px #0000001A"
        }
      }
    },
    "breakpoints": {
      "mobile": "0px - 767px",
      "tablet": "768px - 1023px",
      "desktop": "1024px - 1440px",
      "largeDesktop": "1441px+"
    },
    "grids": {
      "desktop": {},
      "tablet": {},
      "mobile": {}
    },
    "layouts": {
      "desktop": {},
      "tablet": {},
      "mobile": {}
    },
    "borderRadius": {
      "none": "0px",
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "full": "9999px"
    },
    "spacing": {
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "12": "12px",
      "16": "16px",
      "24": "24px",
      "32": "32px",
      "40": "40px",
      "48": "48px",
      "64": "64px",
      "80": "80px"
    },
    "typography": {
      "fontFamily": "Aeonik",
      "fontWeights": {
        "regular": "400",
        "medium": "500",
        "bold": "700"
      },
      "fontSizes": {
        "headline-xl": "48px",
        "headline-lg": "40px",
        "headline-md": "32px",
        "headline-sm": "24px",
        "title-lg": "20px",
        "title-md": "18px",
        "title-sm": "16px",
        "body-lg": "16px",
        "body-md": "14px",
        "body-sm": "12px",
        "label-lg": "14px",
        "label-md": "12px",
        "label-sm": "10px"
      },
      "lineHeights": {
        "headline": "120%",
        "title": "130%",
        "body": "140%",
        "label": "150%"
      }
    }
  },
  "components": {
    "button": {
      "variants": {
        "primary": {
          "background": "{global.colors.primary.500}",
          "text": "{global.colors.base.white}",
          "border": "{global.colors.primary.500}",
          "hoverBackground": "{global.colors.primary.400}",
          "hoverText": "{global.colors.base.white}",
          "hoverBorder": "{global.colors.primary.400}",
          "activeBackground": "{global.colors.primary.600}",
          "activeText": "{global.colors.base.white}",
          "activeBorder": "{global.colors.primary.600}"
        },
        "secondary": {
          "background": "{global.colors.secondary.500}",
          "text": "{global.colors.base.white}",
          "border": "{global.colors.secondary.500}",
          "hoverBackground": "{global.colors.secondary.400}",
          "hoverText": "{global.colors.base.white}",
          "hoverBorder": "{global.colors.secondary.400}",
          "activeBackground": "{global.colors.secondary.600}",
          "activeText": "{global.colors.base.white}",
          "activeBorder": "{global.colors.secondary.600}"
        },
        "tertiary": {
          "background": "{global.colors.neutral.200}",
          "text": "{global.colors.neutral.800}",
          "border": "{global.colors.neutral.400}",
          "hoverBackground": "{global.colors.neutral.300}",
          "hoverText": "{global.colors.neutral.900}",
          "hoverBorder": "{global.colors.neutral.500}",
          "activeBackground": "{global.colors.neutral.400}",
          "activeText": "{global.colors.neutral.900}",
          "activeBorder": "{global.colors.neutral.600}"
        }
      },
      "sizes": {
        "small": {
          "padding": "{global.spacing.8} {global.spacing.12}",
          "fontSize": "{global.typography.fontSizes.label-sm}",
          "borderRadius": "{global.borderRadius.sm}"
        },
        "medium": {
          "padding": "{global.spacing.12} {global.spacing.16}",
          "fontSize": "{global.typography.fontSizes.label-md}",
          "borderRadius": "{global.borderRadius.sm}"
        },
        "large": {
          "padding": "{global.spacing.16} {global.spacing.24}",
          "fontSize": "{global.typography.fontSizes.label-lg}",
          "borderRadius": "{global.borderRadius.md}"
        }
      }
    }
  }
};
