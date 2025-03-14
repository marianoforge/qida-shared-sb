export * from "./tokens/dist/tokens";
import "./tokens/dist/variables.css";
export * from "./components/Button/Button";
export interface DesignTokensConfig {
    prefix?: string;
    useCustomProperties?: boolean;
}
export declare function configureDesignTokens(config?: DesignTokensConfig): void;
