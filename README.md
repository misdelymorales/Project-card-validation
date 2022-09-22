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

[Vue.html]:data:image/png;base64,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

[HTML-url]:https://html.com/

[Vue.css]:https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png
[css-url]:https://www.w3.org/Style/CSS/Overview.en.html

[Vue.js]:https://img.shields.io/badge/-JavaScript-black.svg?style=for-the-badge&logo=javascript&colorB=555

[JS-url]:https://www.javascript.com/

[productMockup-screenshot]: https://github.com/misdelymorales/SCL021-card-validation/blob/main/src/imagenes/Dise%C3%B1o.png?raw=true

[product-Screenshot]: ./src/imagenes/ToriaPay.PNG
[tarjetaValida]:./src/imagenes/tarjetaValida.PNG
[tarjetaInvalida]:./src/imagenes/tarjetaInvalida.PNG

