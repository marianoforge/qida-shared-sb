import React from "react";
import "./design-tokens.css";
import { tokens } from "./dist/tokens";
import "./design-tokens.css";

interface TokenValue {
  value: string;
}

interface Shadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  value: string;
}

interface Elevation {
  shadow1: Shadow;
  shadow2: Shadow;
}

interface Colors {
  [category: string]: {
    [shade: string]: string;
  };
}

interface Breakpoints {
  [key: string]: TokenValue;
}

interface Grid {
  columns: number;
  gutter: string;
  margin: string;
}

interface Layout {
  width: string;
  columns: number;
}

interface Typography {
  fontFamily: string;
  fontWeights: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
  lineHeights: {
    [key: string]: string;
  };
}

interface GlobalTokens {
  colors: Colors;
  elevations: {
    [key: string]: Elevation;
  };
  breakpoints: {
    [key: string]: string;
  };
  borderRadius: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: string;
  };
  typography: Typography;
}

const typedTokens = tokens as unknown as { global: GlobalTokens };

export default {
  title: "Design System/Tokens",
  parameters: {
    layout: "fullscreen",
  },
};

export const Colors = () => {
  const colorCategories = [
    { name: "Primary", key: "primary" },
    { name: "Secondary", key: "secondary" },
    { name: "Tertiary", key: "tertiary" },
    { name: "Neutral", key: "neutral" },
    { name: "Informative", key: "informative" },
    { name: "Success", key: "success" },
    { name: "Warning", key: "warning" },
    { name: "Error", key: "error" },
    { name: "Base", key: "base" },
  ];

  return (
    <div className="token-page">
      <h1>Color Tokens</h1>
      {colorCategories.map((category) => (
        <div key={category.key} className="token-category">
          <h2>{category.name}</h2>
          <div className="token-grid">
            {Object.entries(typedTokens.global.colors[category.key] || {}).map(
              ([shade, colorValue]) => (
                <div key={shade} className="token-item">
                  <div
                    className="color-preview"
                    style={{ backgroundColor: colorValue }}
                  ></div>
                  <div className="token-details">
                    <div className="token-name">
                      {category.key}-{shade}
                    </div>
                    <div className="token-value">{colorValue}</div>
                    <div className="token-css-var">
                      --colors-{category.key}-{shade}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Elevations = () => {
  const elevationLevels = ["sm", "md", "lg", "xl"];

  return (
    <div className="token-page">
      <h1>Elevation Tokens</h1>
      <div className="token-category">
        <div className="elevation-grid">
          {elevationLevels.map((level) => (
            <div key={level} className="elevation-item">
              <div
                className="elevation-preview"
                style={{
                  boxShadow: `${typedTokens.global.elevations[level].shadow1.value}, ${typedTokens.global.elevations[level].shadow2.value}`,
                }}
              >
                <span className="elevation-label">{level.toUpperCase()}</span>
              </div>
              <div className="token-details">
                <div className="token-name">elevation-{level}</div>
                <div className="token-css-var">
                  --elevations-{level}-shadow1, --elevations-{level}-shadow2
                </div>
                <div className="token-value small">
                  {typedTokens.global.elevations[level].shadow1.value},{" "}
                  {typedTokens.global.elevations[level].shadow2.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Breakpoints = () => {
  const breakpoints = typedTokens.global.breakpoints;

  return (
    <div className="token-page">
      <h1>Breakpoint Tokens</h1>
      <div className="token-category">
        <div className="breakpoint-grid">
          {Object.entries(breakpoints).map(([name, value]) => (
            <div key={name} className="breakpoint-item">
              <div className="breakpoint-preview">
                <div className="breakpoint-value">{value}</div>
              </div>
              <div className="token-details">
                <div className="token-name">breakpoint-{name}</div>
                <div className="token-value">{value}</div>
                <div className="token-css-var">--breakpoints-{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Grids = () => {
  const grids = {
    desktop: {
      columns: 12,
      gutter: "24px",
      margin: "32px",
    },
    tablet: {
      columns: 8,
      gutter: "16px",
      margin: "24px",
    },
    mobile: {
      columns: 4,
      gutter: "8px",
      margin: "16px",
    },
  };

  return (
    <div className="token-page">
      <h1>Grid System</h1>
      {Object.entries(grids).map(([name, value]) => (
        <div key={name} className="grid-container">
          <div className="grid-header">
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Grid</h2>
          </div>
          <div className="grid-preview">
            <div
              className="grid-example"
              style={{
                gridTemplateColumns: `repeat(${value.columns}, 1fr)`,
                gap: value.gutter,
              }}
            >
              {Array.from({ length: value.columns }).map((_, i) => (
                <div key={i} className="grid-cell">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="grid-info">
            <div className="grid-spec">
              <span className="grid-spec-label">Columns:</span>
              <span className="grid-spec-value">{value.columns}</span>
            </div>
            <div className="grid-spec">
              <span className="grid-spec-label">Gutter:</span>
              <span className="grid-spec-value">{value.gutter}</span>
            </div>
            <div className="grid-spec">
              <span className="grid-spec-label">Margin:</span>
              <span className="grid-spec-value">{value.margin}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Layouts = () => {
  const layouts = {
    desktop: {
      width: "1440px",
      columns: 12,
    },
    tablet: {
      width: "768px",
      columns: 8,
    },
    mobile: {
      width: "375px",
      columns: 4,
    },
  };

  return (
    <div className="token-page">
      <h1>Layout Patterns</h1>
      <div className="layout-grid">
        {Object.entries(layouts).map(([name, value]) => (
          <div key={name} className="layout-item">
            <div className="grid-header">
              <h2>
                {name.charAt(0).toUpperCase() + name.slice(1)} Layout -{" "}
                {value.width}
              </h2>
            </div>
            <div className="layout-preview">
              <div
                className="layout-container"
                style={{
                  maxWidth: "100%",
                  gridTemplateColumns: `repeat(${value.columns}, 1fr)`,
                }}
              >
                {Array.from({ length: value.columns }).map((_, i) => (
                  <div key={i} className="layout-block">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="layout-info">
              <div className="layout-spec">
                <span className="layout-spec-label">Width:</span>
                <span className="layout-spec-value">{value.width}</span>
              </div>
              <div className="layout-spec">
                <span className="layout-spec-label">Columns:</span>
                <span className="layout-spec-value">{value.columns}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BorderRadius = () => {
  const cssVarPrefix = "radius";

  const getRadiusTokens = () => {
    const radiusTokens = {};
    for (const key of ["none", "xs", "sm", "md", "full"]) {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${cssVarPrefix}-${key}`)
        .trim();
      if (value) radiusTokens[key] = value;
    }
    return Object.keys(radiusTokens).length > 0
      ? radiusTokens
      : {
          none: "0px",
          xs: "4px",
          sm: "8px",
          md: "16px",
          full: "9999px",
        };
  };

  const borderRadiusTokens =
    typedTokens?.global?.borderRadius || getRadiusTokens();

  return (
    <div className="token-page">
      <h1>Border Radius Tokens</h1>
      {!typedTokens?.global?.borderRadius && (
        <p className="warning-message" style={{ color: "orange" }}>
          ⚠️ Usando valores de ejemplo. Los tokens reales no fueron encontrados.
          Por favor regenera los tokens.
        </p>
      )}
      <div className="radius-grid">
        {Object.entries(borderRadiusTokens).map(([name, value]) => (
          <div key={name} className="radius-item">
            <div
              className={
                name === "full" ? "radius-preview-full" : "radius-preview"
              }
              style={{ borderRadius: value }}
            ></div>
            <div className="token-details">
              <div className="token-name">radius-{name}</div>
              <div className="token-value">{value}</div>
              <div className="token-css-var">--borderRadius-{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Spacing = () => {
  const spacingTokens = typedTokens.global.spacing;

  return (
    <div className="token-page">
      <h1>Spacing Tokens</h1>
      <div className="spacing-grid">
        {Object.entries(spacingTokens).map(([name, value]) => (
          <div key={name} className="spacing-item">
            <div className="spacing-preview">
              <div
                className="spacing-box"
                style={{ width: value, height: value }}
              ></div>
            </div>
            <div className="token-details">
              <div className="token-name">spacing-{name}</div>
              <div className="token-value">{value}</div>
              <div className="token-css-var">--spacing-{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Typography = () => {
  // Crear un objeto de tipografía fallback
  const defaultTypography = {
    fontFamily: "Aeonik, sans-serif",
    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    fontSizes: {
      "11": "11px",
      "12": "12px",
      "14": "14px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "22": "22px",
      "36": "36px",
      "56": "56px",
    },
    lineHeights: {
      "16": "16px",
      "20": "20px",
      "24": "24px",
      "28": "28px",
      "32": "32px",
      "48": "48px",
      "73": "73px",
    },
  };

  // Usar los valores reales o fallback para cada sección
  const typography = typedTokens?.global?.typography || defaultTypography;
  const fontWeights = typography?.fontWeights || defaultTypography.fontWeights;
  const fontSizes = typography?.fontSizes || defaultTypography.fontSizes;
  const lineHeights = typography?.lineHeights || defaultTypography.lineHeights;

  return (
    <div className="token-page">
      <h1>Typography System</h1>

      {!typedTokens?.global?.typography && (
        <p className="warning-message" style={{ color: "orange" }}>
          ⚠️ Usando valores de ejemplo. Los tokens de tipografía no fueron
          encontrados. Por favor regenera los tokens.
        </p>
      )}

      {/* Font Family */}
      <div className="typography-section">
        <div className="typography-header">
          <h2>Font Family</h2>
        </div>
        <div className="typography-item">
          <div
            className="typography-preview"
            style={{ fontFamily: typography.fontFamily }}
          >
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="typography-info">
            <div className="typography-spec">
              <span className="typography-spec-label">Family:</span>
              <span className="typography-spec-value">
                {typography.fontFamily}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="typography-section">
        <div className="typography-header">
          <h2>Font Weights</h2>
        </div>
        <div className="typography-grid">
          {Object.entries(fontWeights).map(([name, weight]) => (
            <div key={name} className="typography-item">
              <div className="typography-preview">
                <div
                  className="font-weight-preview"
                  style={{ fontWeight: weight }}
                >
                  Aa
                </div>
                <div style={{ fontWeight: weight }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div className="typography-info">
                <div className="typography-spec">
                  <span className="typography-spec-label">Weight:</span>
                  <span className="typography-spec-value">{weight}</span>
                </div>
                <div className="typography-spec">
                  <span className="typography-spec-label">Name:</span>
                  <span className="typography-spec-value">{name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Sizes */}
      <div className="typography-section">
        <div className="typography-header">
          <h2>Font Sizes</h2>
        </div>
        <div className="typography-grid">
          {Object.entries(fontSizes).map(([name, size]) => (
            <div key={name} className="typography-item">
              <div className="typography-preview">
                <div style={{ fontSize: size }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div className="typography-info">
                <div className="typography-spec">
                  <span className="typography-spec-label">Size:</span>
                  <span className="typography-spec-value">{size}</span>
                </div>
                <div className="typography-spec">
                  <span className="typography-spec-label">Name:</span>
                  <span className="typography-spec-value">{name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line Heights */}
      <div className="typography-section">
        <div className="typography-header">
          <h2>Line Heights</h2>
        </div>
        <div className="typography-grid">
          {Object.entries(lineHeights).map(([name, height]) => (
            <div key={name} className="typography-item">
              <div className="typography-preview">
                <div className="line-height-preview">
                  <div
                    className="line-height-text"
                    style={{ lineHeight: height }}
                  >
                    The quick brown fox jumps over the lazy dog. This is a
                    multi-line text example to demonstrate different line
                    heights in our typography system.
                  </div>
                </div>
              </div>
              <div className="typography-info">
                <div className="typography-spec">
                  <span className="typography-spec-label">Line Height:</span>
                  <span className="typography-spec-value">{height}</span>
                </div>
                <div className="typography-spec">
                  <span className="typography-spec-label">Name:</span>
                  <span className="typography-spec-value">{name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DebugTokens = () => {
  return (
    <div className="token-page">
      <h1>Token Structure Debug</h1>
      <pre
        style={{
          textAlign: "left",
          overflow: "auto",
          maxHeight: "500px",
          background: "#f5f5f5",
          padding: "1rem",
        }}
      >
        Tokens disponibles: {Object.keys(tokens).join(", ")}
        {"\n\n"}
        GlobalTokens: {Object.keys(typedTokens?.global || {}).join(", ")}
        {"\n\n"}
        Token structure: {JSON.stringify(tokens, null, 2)}
      </pre>
    </div>
  );
};
