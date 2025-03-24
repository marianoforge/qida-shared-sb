import * as StyleDictionaryModule from "style-dictionary";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo de tokens
const tokensPath = path.resolve(__dirname, "figma-tokens.json");
const tokensContent = fs.readFileSync(tokensPath, "utf8");
const tokens = JSON.parse(tokensContent);

/**
 * Función auxiliar para procesar referencias en valores de tokens
 * @param {string} value - Valor del token que puede contener referencias
 * @returns {string} - Valor con referencias resueltas a variables CSS
 */
const processTokenReference = (value) => {
  // Check if the value is a string and contains a reference pattern
  if (typeof value !== "string" || !value.includes("{")) {
    return value;
  }

  // Handle values with multiple references separated by spaces
  if (value.includes(" ") && value.match(/{[^}]+}/g)) {
    // Split by spaces and process each part individually
    return value
      .split(" ")
      .map((part) => processTokenReference(part))
      .join(" ");
  }

  // Check if it's a complete reference (e.g., "{colors.primary.500}")
  if (value.startsWith("{") && value.endsWith("}")) {
    // Remove braces and convert to CSS variable
    const path = value
      .substring(1, value.length - 1)
      .replace(/\./g, "-")
      .replace(/^global-/, ""); // Remove 'global-' prefix
    return `var(--${path})`;
  }

  // Handle partial references (e.g., "solid 1px {colors.primary.500}")
  const regex = /{([^}]+)}/g;
  return value.replace(regex, (match, path) => {
    return `var(--${path.replace(/\./g, "-").replace(/^global-/, "")})`;
  });
};

/**
 * Procesa un objeto de forma genérica para variables CSS
 * @param {Object} obj - Objeto a procesar
 * @param {string} prefix - Prefijo para las variables CSS
 * @param {string} css - CSS acumulado
 * @returns {string} - Variables CSS generadas
 */
function processToCSSVariables(obj, prefix = "", css = "") {
  for (const key in obj) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    // Caso especial para la tipografía fontFamily
    if (key === "fontFamily" && obj[key].value) {
      css += `  --typography-fontFamily: ${obj[key].value};\n`;
      continue;
    }

    // Caso especial para objetos de sombra
    if (
      (key === "shadow1" || key === "shadow2") &&
      obj[key].x !== undefined &&
      obj[key].y !== undefined &&
      obj[key].blur !== undefined &&
      obj[key].spread !== undefined &&
      obj[key].color !== undefined
    ) {
      const shadowValue = `${obj[key].x}px ${obj[key].y}px ${obj[key].blur}px ${obj[key].spread}px ${obj[key].color}`;
      css += `  --${newPrefix}: ${shadowValue};\n`;
      continue;
    }

    // Si es un token con valor
    if (obj[key].value !== undefined) {
      const finalValue = processTokenReference(obj[key].value);
      css += `  --${newPrefix}: ${finalValue};\n`;
    }
    // Si es un objeto anidado
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      css = processToCSSVariables(obj[key], newPrefix, css);
    }
  }

  return css;
}

/**
 * Genera variables CSS a partir de tokens
 * @param {Object} tokens - Tokens de diseño
 * @returns {string} - Contenido CSS con variables
 */
function generateCSSVariables(tokens) {
  let css = `/**
 * Do not edit directly
 * Generated from design tokens
 */

:root {\n`;

  // Procesar tokens globales
  if (tokens.global) {
    for (const category in tokens.global) {
      css = processToCSSVariables(tokens.global[category], category, css);
    }
  }

  // Procesar tokens de componentes
  if (tokens.components) {
    for (const component in tokens.components) {
      css = processToCSSVariables(tokens.components[component], component, css);
    }
  }

  css += "}\n";
  return css;
}

/**
 * Procesa un objeto para el formato JavaScript con manejo recursivo
 * @param {Object} obj - Objeto a procesar
 * @param {Object} target - Objeto destino
 * @returns {Object} - Objeto procesado
 */
function processToJSTokens(obj, target = {}) {
  for (const key in obj) {
    // Caso especial para objetos de sombra
    if (
      (key === "shadow1" || key === "shadow2") &&
      obj[key].x !== undefined &&
      obj[key].y !== undefined &&
      obj[key].blur !== undefined &&
      obj[key].spread !== undefined &&
      obj[key].color !== undefined
    ) {
      target[key] = {
        x: obj[key].x,
        y: obj[key].y,
        blur: obj[key].blur,
        spread: obj[key].spread,
        color: obj[key].color,
        value: `${obj[key].x}px ${obj[key].y}px ${obj[key].blur}px ${obj[key].spread}px ${obj[key].color}`,
      };
      continue;
    }

    // Si es un token con valor directo
    if (obj[key].value !== undefined) {
      target[key] = obj[key].value;
    }
    // Si es un objeto anidado
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      target[key] = {};
      processToJSTokens(obj[key], target[key]);
    }
  }

  return target;
}

/**
 * Genera tokens JavaScript a partir de los tokens de diseño
 * @param {Object} tokens - Tokens de diseño
 * @returns {string} - Contenido JS con tokens exportados
 */
function generateJSTokens(tokens) {
  const jsTokens = {};

  // Procesar tokens globales
  if (tokens.global) {
    jsTokens.global = {};
    for (const category in tokens.global) {
      jsTokens.global[category] = {};
      processToJSTokens(tokens.global[category], jsTokens.global[category]);

      // Caso especial para la tipografía
      if (category === "typography" && tokens.global.typography.fontFamily) {
        jsTokens.global.typography.fontFamily =
          tokens.global.typography.fontFamily.value;
      }
    }
  }

  // Procesar tokens de componentes
  if (tokens.components) {
    jsTokens.components = {};
    for (const component in tokens.components) {
      jsTokens.components[component] = {};
      processToJSTokens(
        tokens.components[component],
        jsTokens.components[component]
      );
    }
  }

  return `/**
 * Do not edit directly
 * Generated from design tokens
 */

export const tokens = ${JSON.stringify(jsTokens, null, 2)};
`;
}

// Generar CSS y JS
const cssOutput = generateCSSVariables(tokens);
const jsOutput = generateJSTokens(tokens);

// Asegurarse de que el directorio dist exista
const distDir = path.resolve(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Escribir los archivos
fs.writeFileSync(path.resolve(distDir, "variables.css"), cssOutput);
fs.writeFileSync(path.resolve(distDir, "tokens.js"), jsOutput);

console.log("✅ Tokens generados correctamente en:");
console.log("  - shared-ui/src/tokens/dist/variables.css");
console.log("  - shared-ui/src/tokens/dist/tokens.js");
