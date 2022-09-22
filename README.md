# ToriaPay

## Resumen
ToriaPay es una página ficticia de pago de la web de Laboratoria para validar las tarjetas de créditos.
Visita la página en el siguiente [link](https://misdelymorales.github.io/Project-card-validation/)

![product-Screenshot]
***

## Investigación UX

### 1. Usuarios
El proyecto va dirigido a cualquier persona que realice compra ficticia en la web de Laboratoria, donde una vez seleccionado el producto accede a página __Toriapay__ para válidar tarjeta de crédito y continuar con la transacción.

### 2. Prototipo inicial

![productMockup-screenshot]

El proyecto fue realizado con los siguientes lenguajes:

* [![HTML][Vue.html]][html-url]
* [![CSS][Vue.css]][css-url]
* [![JavaScript][Vue.js]][JS-url]

### 3. Feedback

* Buen diseño y elección de colores.
* Orientación en código js para la aceptación de sólo números en el input.
* Realizar un protito dinámico para observar la funcionalidad del producto final
* Orientación en función maskify y expresiones regulares

### 4. Prototipo Final

![product-Screenshot]
![tarjetaValida]
![tarjetaInvalida]

La válidación es realizada mediante [Algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), además se aplica una función para enmáscarar los dígitos de la tarjeta exceptuando los últimos 4 y de esta manera brindarle mayor seguridad al usuario al válidar su método de pago.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Vue.html]:https://img.shields.io/badge/-HTML-black.svg?style=for-the-badge&logo=data:image/png;base64,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&colorB=555

[HTML-url]:https://html.com/

[Vue.css]:https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png
[css-url]:https://www.w3.org/Style/CSS/Overview.en.html

[Vue.js]:https://img.shields.io/badge/-JavaScript-black.svg?style=for-the-badge&logo=javascript&colorB=555

[JS-url]:https://www.javascript.com/

[productMockup-screenshot]: https://github.com/misdelymorales/SCL021-card-validation/blob/main/src/imagenes/Dise%C3%B1o.png?raw=true

[product-Screenshot]: ./src/imagenes/ToriaPay.PNG
[tarjetaValida]:./src/imagenes/tarjetaValida.PNG
[tarjetaInvalida]:./src/imagenes/tarjetaInvalida.PNG

