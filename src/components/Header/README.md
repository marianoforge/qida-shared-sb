# Header Component

El componente Header proporciona una barra de navegación superior para diferentes tipos de usuarios y dispositivos en la aplicación.

## Componentes

Este módulo incluye los siguientes componentes:

1. **Header**: La barra superior que muestra el logo y acciones principales.
2. **NavBar**: Barra de navegación con enlaces e iconos.

## Variantes del Header

### Por rol de usuario

- **Operator**: Para operadores/coordinadores del sistema.
- **Client**: Para clientes de la aplicación.

### Por dispositivo

- **Desktop**: Vista para escritorio, con más espacio y elementos.
- **Mobile**: Vista compacta para dispositivos móviles.

## Propiedades

### Header

| Prop                  | Tipo                   | Descripción                                            | Valor por defecto          |
| --------------------- | ---------------------- | ------------------------------------------------------ | -------------------------- |
| `variant`             | "operator" \| "client" | Tipo de header según el rol del usuario                | "operator"                 |
| `showCoordinatorTag`  | boolean                | Mostrar etiqueta de coordinador                        | false                      |
| `showNotifications`   | boolean                | Mostrar notificaciones                                 | false                      |
| `device`              | "mobile" \| "desktop"  | Tipo de dispositivo                                    | "desktop"                  |
| `avatarSrc`           | string                 | URL de la imagen del avatar                            | Depende de los otros props |
| `onMenuClick`         | () => void             | Callback al hacer clic en el menú                      | -                          |
| `onChatClick`         | () => void             | Callback al hacer clic en chat                         | -                          |
| `onNotificationClick` | () => void             | Callback al hacer clic en notificaciones               | -                          |
| `onAvatarClick`       | () => void             | Callback al hacer clic en el avatar                    | -                          |
| `onPhoneClick`        | () => void             | Callback al hacer clic en teléfono (sólo cliente)      | -                          |
| `onSettingsClick`     | () => void             | Callback al hacer clic en configuración (sólo cliente) | -                          |

### NavBar

| Prop    | Tipo      | Descripción             | Valor por defecto |
| ------- | --------- | ----------------------- | ----------------- |
| `items` | NavItem[] | Elementos de navegación | []                |

### NavItem

| Prop       | Tipo       | Descripción                | Valor por defecto |
| ---------- | ---------- | -------------------------- | ----------------- |
| `icon`     | ReactNode  | Ícono del elemento         | -                 |
| `label`    | string     | Texto del elemento         | -                 |
| `isActive` | boolean    | Si el elemento está activo | false             |
| `onClick`  | () => void | Callback al hacer clic     | -                 |

## Uso

```jsx
// Header para operador (desktop)
<Header
  variant="operator"
  showCoordinatorTag={true}
  device="desktop"
  onMenuClick={() => console.log('Menu clicked')}
/>

// Header para cliente (móvil)
<Header
  variant="client"
  device="mobile"
  onMenuClick={() => console.log('Menu clicked')}
/>

// Barra de navegación
<NavBar
  items={[
    {
      icon: <HomeIcon />,
      label: "Inicio",
      isActive: true,
      onClick: () => console.log('Home clicked')
    },
    {
      icon: <UsersIcon />,
      label: "Usuarios",
      onClick: () => console.log('Users clicked')
    },
  ]}
/>
```

## Responsive

Los componentes se adaptan automáticamente según el prop `device` y utilizan media queries para ajustarse a diferentes tamaños de pantalla.

## Diseño

El componente Header sigue el diseño VCX con colores específicos:

- Fondo: #004039
- Tag de coordinador: #ff8a5d
- Texto: #ffffff
