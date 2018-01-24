# PROYECTO EXTRACT URLS

extractURLs es un módulo de Node.js que hace más fácil poder encontrar todas las url de un texto a partir de un string en formato Markdown.

Este módulo retornará los links encontrados en un arreglo de objetos.

### Dependencias NPM

+ Desarrollo:
  - NodeJS
  - ESlint
  - Mocha
  - Chai

+ Producción:
  - Bootstrap

### Instalación

  `npm install --save extractURLs`

### Uso

/require(extractURLs)/

1. Ve a la terminal en la carpeta raíz de tu proyecto

2. Ejecuta:
  ` node ./index.js`

3. Ingresa un texto en formato **Markdown**: _tu-texto_
  - Ejemplo: ` # Lorem ipsum`

    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.; ` 

4. Obtendrás un arreglo de objetos con todas las urls encontradas.
  - Ejemplo:
  ` [
     { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
     { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
     { href: 'http://foo.com', text: 'foo' },
    ] `


