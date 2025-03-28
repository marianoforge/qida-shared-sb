# Design Tokens Library

Biblioteca de componentes y tokens de diseño compartidos para proyectos de QIDA.

## Instalación

```bash
npm install qida-design-tokens-lib
```

## Uso

### Importar tokens de diseño

```jsx
import { tokens } from "qida-design-tokens-lib";

// Usar tokens en tu código
console.log(tokens.global.colors.primary[500]); // #2C8970
```

### Importar variables CSS

```jsx
// En tu archivo principal
import "qida-design-tokens-lib/dist/dist/styles.css";

// Ahora puedes usar las variables CSS en tus componentes
// --colors-primary-500: #2C8970;
```

### Usar componentes

```jsx
import { Button } from "qida-design-tokens-lib";

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
    </div>
  );
}
```

## Desarrollo

### Instalar dependencias

```bash
npm install
```

### Ejecutar Storybook

```bash
npm run storybook
```

### Generar tokens de diseño

```bash
npm run build-tokens
```

### Construir la biblioteca

```bash
npm run build
```

## Publicación

Para publicar una nueva versión de la biblioteca:

1. Actualiza la versión en `package.json`
2. Ejecuta `npm publish`

## Licencia

Propietaria. Todos los derechos reservados. Este software es propiedad de QIDA y su uso, modificación o distribución sin autorización expresa está prohibido.
