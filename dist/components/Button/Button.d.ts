import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Variante del botón
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    /**
     * Tamaño del botón
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Contenido del botón
     */
    children: React.ReactNode;
}
/**
 * Componente de botón que utiliza los tokens de diseño
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
