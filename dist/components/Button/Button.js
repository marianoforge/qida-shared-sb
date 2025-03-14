var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import './Button.css';
/**
 * Componente de botón que utiliza los tokens de diseño
 */
export const Button = (_a) => {
    var { variant = 'primary', size = 'medium', children, className = '' } = _a, props = __rest(_a, ["variant", "size", "children", "className"]);
    const buttonClasses = `button button-${variant} button-${size} ${className}`;
    return (_jsx("button", Object.assign({ className: buttonClasses }, props, { children: children })));
};
export default Button;
//# sourceMappingURL=Button.js.map