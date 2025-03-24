// Exportar tokens de diseño
export * from "./tokens/dist/tokens";

// Exportar estilos CSS
import "./tokens/dist/variables.css";

// Exportar componentes
export * from "./components/Button/Button";
export * from "./components/Accordion/Accordion";
export * from "./components/Typography/Typography";
export * from "./components/Avatar/Avatar";
export * from "./components/AlertToast/AlertToast";
export * from "./components/Badge/Badge";
export * from "./components/Breadcrumb/Breadcrumb";
export * from "./components/Checkbox";
export * from "./components/RadioButton";
export * from "./components/Dropdown";
export * from "./components/DropdownItem";
export * from "./components/Filter";
export * from "./components/Footer";
export * from "./components/Header";

// Exportar tipos si es necesario
export interface DesignTokensConfig {
  prefix?: string;
  useCustomProperties?: boolean;
}

// Función de configuración (opcional)
export function configureDesignTokens(config: DesignTokensConfig = {}): void {
  // Implementar lógica de configuración si es necesario
  console.log("Design tokens configured with:", config);
}
