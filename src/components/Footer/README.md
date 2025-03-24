# Footer Component

El componente Footer está diseñado para proporcionar información de contacto de un asesor para los usuarios, facilitando la comunicación directa.

## Características

- Diseño adaptativo con versiones para desktop y móvil
- Personalización de la información del asesor
- Soporta imagen del asesor, nombre, título y datos de contacto
- Altamente configurable a través de props

## Uso

```jsx
import { Footer } from "../components/Footer";

// Uso básico con valores por defecto
const BasicExample = () => <Footer />;

// Uso personalizado
const CustomExample = () => (
  <Footer
    imageSrc="https://example.com/advisor-image.jpg"
    advisorName="María López"
    phone="612 345 678"
    email="maria.lopez@qida.es"
    title="¿Necesitas ayuda?"
    subtitle="tu asesora personal"
  />
);
```

## Props

| Prop          | Tipo   | Descripción                              | Valor por defecto                                    |
| ------------- | ------ | ---------------------------------------- | ---------------------------------------------------- |
| `imageSrc`    | string | URL de la imagen del asesor              | `"https://randomuser.me/api/portraits/women/44.jpg"` |
| `advisorName` | string | Nombre del asesor                        | `"Alicia Martín"`                                    |
| `phone`       | string | Número de teléfono de contacto           | `"635 847 129"`                                      |
| `email`       | string | Dirección de correo electrónico          | `"alicia.martin@qida.es"`                            |
| `title`       | string | Título principal del footer              | `"¿Tienes alguna duda?"`                             |
| `subtitle`    | string | Descripción del rol del asesor           | `"tu asesora familiar"`                              |
| `className`   | string | Clase CSS adicional para personalización | `""`                                                 |

## Responsive

El componente se adapta automáticamente a dispositivos móviles a través de media queries:

- En pantallas más grandes de 768px, se muestra la versión desktop con un diseño horizontal
- En pantallas más pequeñas de 768px, se muestra la versión móvil con un diseño vertical

## Integración con el diseño

El componente sigue las directrices de diseño de Qida, utilizando variables CSS para colores y tipografía, lo que facilita la consistencia visual con el resto de la aplicación.
