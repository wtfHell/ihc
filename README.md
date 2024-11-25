# IusWeb - Tu Plataforma Jurídica Integral

IusWeb es una plataforma en línea diseñada para simplificar y optimizar las tareas jurídicas, conectando profesionales con recursos innovadores y eficientes. Este proyecto implementa un Landing Page profesional y responsivo que refleja los servicios, casos de éxito y funcionalidades de la plataforma.

## Principios y Elementos de Diseño Visual

1. **Paleta de Colores**:
   - Se implementaron los colores definidos en el enunciado:
     - Fondo de bordes, títulos y pie: `#4F3F84`.
     - Fondo de menú y formulario: `#FF662A`.
     - Fondo del cuerpo: `#FFA22A`.
     - Títulos y subtítulos: `#82AC26`.

2. **Tipografía**:
   - **Roboto**: Para títulos, garantizando claridad y profesionalismo.
   - **Inter**: Para textos de párrafo, ofreciendo legibilidad y consistencia.

3. **Estética Visual**:
   - Bordes redondeados en tarjetas, imágenes y formularios.
   - Efectos `hover` en botones, imágenes y tarjetas para mejorar la interactividad.
   - Contraste alto entre fondo y texto para una mejor legibilidad.

4. **Responsividad**:
   - Clases de Bootstrap para asegurar que el diseño se adapte correctamente a dispositivos móviles, tablets y escritorios.

## Heurísticas de Usabilidad, Arquitectura de Información e Inclusive Design

1. **Heurísticas de Usabilidad**:
   - Navegación intuitiva: Menú desplegable con enlaces a secciones internas (Inicio, Servicios, Proyectos y Contáctanos).
   - Retroalimentación al usuario: Validaciones y mensajes dinámicos en el formulario de contacto.
   - Consistencia visual: Elementos coherentes en todo el diseño, alineados con la identidad de la plataforma.

2. **Arquitectura de Información**:
   - Jerarquía visual bien definida con secciones claras:
     - Inicio: Mensaje principal y llamada a la acción.
     - Servicios: Lista de funcionalidades ofrecidas.
     - Proyectos: Casos de éxito con imágenes representativas.
     - Contacto: Formulario accesible para conectar con la plataforma.

3. **Inclusive Design**:
   - Uso de atributos `alt` en todas las imágenes.
   - Contraste de colores para cumplir con estándares de accesibilidad (WCAG).
   - Validaciones accesibles en el formulario para mejorar la experiencia de usuarios con discapacidades.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
public/
│
├── index.html          # Página principal
├── README.md           # Documentación del proyecto
├── assets/             # Carpeta de recursos
│   ├── css/            # Estilos CSS
│   │   └── main.css    # Archivo principal de estilos
│   ├── js/             # Scripts JavaScript
│   │   └── main.js     # Validaciones y lógica interactiva
│   ├── images/         # Imágenes utilizadas en el proyecto
│   │   ├── bg.jpg      # Imagen de fondo del hero
│   │   ├── video1.jpg  # Miniatura del Proyecto 1
│   │   ├── video2.jpg  # Miniatura del Proyecto 2
