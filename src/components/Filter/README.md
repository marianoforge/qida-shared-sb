# Filter Component

El componente Filter proporciona una interfaz para mostrar y seleccionar opciones de filtrado en la aplicación.

## Uso de Carbon Icons

Este componente usa iconos de [Carbon Design System](https://carbondesignsystem.com/elements/icons/library/), una biblioteca completa de iconos de IBM que ofrece:

- Más de 1,800 iconos disponibles
- Soporte para diferentes tamaños y estilos
- Iconos accesibles y optimizados para web
- Coherencia visual en toda la aplicación

### Integración de Carbon Icons en el proyecto

Para integrar Carbon Icons en todo el storybook y el proyecto, se recomienda:

1. Instalar el paquete oficial:

```bash
npm install @carbon/icons-react
```

o

```bash
yarn add @carbon/icons-react
```

2. Importar y usar los iconos directamente:

```jsx
import { Filter32, Add16, User20 } from "@carbon/icons-react";

// Uso en componentes
<Button icon={<Filter32 />}>Filtrar</Button>;
```

### Ventajas de usar Carbon Icons

- **Consistencia**: Mantiene un lenguaje visual coherente en toda la aplicación
- **Accesibilidad**: Los iconos están diseñados siguiendo pautas de accesibilidad
- **Flexibilidad**: Disponibles en diferentes tamaños (16px, 20px, 24px, 32px)
- **Mantenimiento**: Actualizaciones y soporte constante desde IBM

### Iconos recomendados para Filtros

- `Filter32` - Para filtros generales
- `AudioConsole32` - Icono usado en este ejemplo
- `CategoryNew32` - Para filtros de categoría
- `Time32` - Para filtros de tiempo/fecha
- `Location32` - Para filtros de ubicación

## Componente Filter

El componente Filter está diseñado para ser:

- Fácil de usar con diferentes iconos
- Adaptable a diferentes estados (normal, hover, pressed, disabled, focused)
- Coherente con el sistema de diseño general
- Accesible para todos los usuarios

Consulta la documentación de Storybook para ver ejemplos y opciones de personalización.
