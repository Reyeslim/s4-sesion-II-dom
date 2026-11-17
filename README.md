# Manipulación del DOM

Este ejercicio completo integra todos los conceptos de manipulación del DOM de forma práctica y paso a paso.

## Objetivos

1. **Capturar elementos del DOM** con `getElementById()`
2. **Insertar elementos dinámicamente** recorriendo arrays de objetos
3. **Combinar `filter()` + `map()`** para mostrar datos filtrados
4. **Comparar dos técnicas de inserción**:
   - `innerHTML` (más rápido y simple)
   - `createElement()` + `appendChild()` (más control)
5. **Event Listeners** con `addEventListener()`
6. **Toggle de modo oscuro** con manipulación de clases CSS
7. **Botones interactivos** que muestran diferentes vistas de datos

## 📋 Estructura del Ejercicio

### HTML (`index.html`)

- **Cabecera**: Título + botón de modo oscuro
- **Sección 1**: Productos insertados con `innerHTML` + `map()`
- **Sección 2**: Productos filtrados con `filter()` + `map()`
- **Sección 3**: Productos insertados con `createElement()`
- **Sección 4**: Botones interactivos con diferentes acciones
- **Footer**: Información del ejercicio

## 🔍 Conceptos Clave

### innerHTML vs createElement

**innerHTML** (más simple y rápido):

- ✅ Menos código
- ✅ Perfecto con plantillas template literals
- ✅ Ideal para insertar múltiples elementos
- ⚠️ Reemplaza todo el contenido existente

**createElement()** (más control):

- ✅ Más seguro ante inyección de código
- ✅ Permite manipulación granular de elementos
- ✅ Mejor rendimiento al añadir elementos individuales
- ⚠️ Más verboso y largo de escribir
