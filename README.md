# PROYECTO EXTRACT URLS

extractURLs es un módulo de Node.js que hace más fácil poder encontrar todas las url de un texto a partir de un string en formato Markdown.

Este módulo retornará los links encontrados en un arreglo de objetos.

### Dependencias NPM

+ Desarrollo:
  - NodeJS
  - ESlint
  - Mocha
  - Chai


### Instalación

  `npm install --save extract-url`

### Modo de Uso

#### Comprobar texto en la Consola


1. Ve a la terminal en la carpeta raíz de tu proyecto

2. Ejecuta:
  ` node input_readline.js`

3. Ingresa un texto en formato **Markdown**: _tu-texto_
  - Ejemplo: ` # Lorem ipsum  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.; 
    ` 

4. Obtendrás un arreglo de objetos con todas las urls encontradas.
  - Ejemplo:
  ` [
     { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
     { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
     { href: 'http://foo.com', text: 'foo' },
    ] `

#### Comprobar texto en fichero.js en NODEJS

1. Crear fichero en tu proyecto (ejemplo: **fichero.js**)

2. Llamar al módulo con la funcion require()
  `const extractUrls = require(./index.js);`

### Opciones

El modulo integra algunas configuraciones adicionales que permiten tener otros resultados de salida. Un ejemplo se detalla a continuación con las variantes que retorna el modulo para un mismo texto de entrada.

- Tipo: Array (Arreglo de Objetos)

- Ejemplo: 
  ```js 
  const str = '# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui http://www.officia.com deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. [Officiis](nisi veniam) quibusdam amet, odit, odio consectetur ratione quod, cupiditate repellendus voluptatum. Laudantium tempora, neque quo ex aspernatur veritatis sequi incidunt.'; 
  ```

#### Opción 1 (Principal): extractUrls.matches()
- Retorna solo los enlaces válidos escritos de las forma `[texto descriptivo](http://www.enlace.com)` 
  ```js 
  console.log(extractUrls.MdLink(str));
  // => [ 
    { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
    { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
    { href: 'http://foo.com', text: 'foo' },
    ] ```

#### Opción 2: extractUrls.url()
- Retorna solo los enlaces independiente de su estructura: 
  ```js 
  console.log(extractUrls.url(str));
  // => [ 'https://en.wiktionary.org/wiki/labore', 'https://en.wiktionary.org/wiki/dolore', 'http://foo.com', 'http://www.officia.com' ] ```

#### Opción 3: extractUrls.text()
- Retorna solo los enlaces escritos de la forma `[texto descriptivo]`: 
  ```js 
  console.log(extractUrls.text(str));
  // => [ 'labore', 'dolore', 'foo', 'Officiis' ] ```

#### Opción 4: extractUrls.mdLink()
- Retorna todo el contenido escrito de la forma `[texto descriptivo](otro texto)`, independiente de su contenido 
  ```js 
  console.log(extractUrls.mdLink(str));
  // => ['[labore](https://en.wiktionary.org/wiki/labore)',  '[dolore](https://en.wiktionary.org/wiki/dolore)', '[foo](http://foo.com)], [Officiis](nisi veniam)' ```
