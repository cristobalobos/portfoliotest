# Portfolio Calculator

## Descripción

Este ejercicio consiste en una calculadora de portfolio que calcula dos valores clave para un portafolio de inversión:

1. **Ganancia ($)**: La diferencia entre el valor inicial y final de las acciones.
2. **Retorno anualizado (%)**: El rendimiento de la inversión calculado sobre un periodo de tiempo anualizado, basándose en los valores inicial y final de las acciones.

El ejercicio tiene como objetivo mostrar cómo se puede calcular estos valores a partir de entradas dinámicas de un usuario, actualizar los resultados en tiempo real a medida que se modifican los valores, y aplicar estilos de validación para asegurar que los valores de entrada sean correctos.

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

1. **index.html**: Contiene la estructura HTML de la página, que incluye campos de entrada para los precios iniciales y finales de las acciones, y secciones para mostrar los resultados.
2. **styles.css**: Contiene el diseño y los estilos de la página, usando los colores de Fintual (verde) y aplicando un diseño responsivo.
3. **script.js**: Contiene la lógica de negocio que realiza los cálculos de ganancia y retorno anualizado, y actualiza los resultados a medida que el usuario interactúa con los campos de entrada.

## Cómo Funciona el Código

### 1. **HTML (index.html)**

En el archivo `index.html`, tenemos una estructura simple con los siguientes elementos:

- **Campos de entrada (`input`)**: Estos permiten que el usuario ingrese los valores de los precios iniciales y finales de las acciones de Apple y Google.
- **Secciones de resultado**: Dos áreas donde se muestran los valores calculados: Ganancia en dólares y Retorno Anualizado en porcentaje.
- **Eventos de Entrada**: Los campos de entrada están configurados para que, cada vez que el usuario cambie un valor, se ejecute el cálculo y se actualicen los resultados en la interfaz de usuario.

### 2. **CSS (styles.css)**

El archivo `styles.css` gestiona el diseño de la página y su apariencia visual:

- **Estilo Responsivo**: El código está diseñado para ser completamente responsivo, lo que significa que se adapta tanto a pantallas de escritorio como a dispositivos móviles.
- **Estilos de Validación**: Si el usuario ingresa un valor incorrecto (por ejemplo, un valor menor o igual a 0), el borde del campo de entrada se vuelve rojo, indicando que el valor es inválido.

### 3. **JavaScript (script.js)**

El archivo `script.js` contiene la lógica de negocio del ejercicio:

- **Cálculo de Ganancia**: Se calcula como la diferencia entre el valor final y el valor inicial de cada acción (Apple y Google), y luego se suman los resultados para obtener la ganancia total del portfolio.
  
  ```javascript
  function calculateProfit(startValue, endValue) {
      return endValue - startValue;
  }
