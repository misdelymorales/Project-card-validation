# ToriaPay

## Resumen

ToriaPay es una página ficticia de pago de la web de Laboratoria para validar las tarjetas de créditos.
Visita la página en el siguiente [link](https://misdelymorales.github.io/ToriaPay/)

![product-Screenshot]

---

## Investigación UX

### 1. Usuarios

El proyecto va dirigido a cualquier persona que realice compra ficticia en la web de Laboratoria, donde una vez seleccionado el producto accede a página **Toriapay** para válidar tarjeta de crédito y continuar con la transacción.

### 2. Prototipo inicial

![productMockup-screenshot]

El proyecto fue realizado con los siguientes lenguajes:

- [![HTML][vue.html]][html-url]
- [![CSS][vue.css]][css-url]
- [![JavaScript][vue.js]][js-url]

### 3. Feedback

- Buen diseño y elección de colores.
- Orientación en código js para la aceptación de sólo números en el input.
- Realizar un protito dinámico para observar la funcionalidad del producto final
- Orientación en función maskify y expresiones regulares

### 4. Prototipo Final

![product-Screenshot]
![tarjetaValida]
![tarjetaInvalida]

La válidación es realizada mediante [Algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), además se aplica una función para enmáscarar los dígitos de la tarjeta exceptuando los últimos 4 y de esta manera brindarle mayor seguridad al usuario al válidar su método de pago.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[vue.html]: ./src/imagenes/-HTML-black.svg
[html-url]: https://html.com/
[vue.css]: ./src/imagenes/-CSS-black.svg
[css-url]: https://www.w3.org/Style/CSS/Overview.en.html
[vue.js]: https://img.shields.io/badge/-JavaScript-black.svg?style=for-the-badge&logo=javascript&colorB=555
[js-url]: https://www.javascript.com/
[productmockup-screenshot]: https://github.com/misdelymorales/SCL021-card-validation/blob/main/src/imagenes/Dise%C3%B1o.png?raw=true
[product-screenshot]: ./src/imagenes/ToriaPay.PNG
[tarjetavalida]: ./src/imagenes/tarjetaValida.PNG
[tarjetainvalida]: ./src/imagenes/tarjetaInvalida.PNG
