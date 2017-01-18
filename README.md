# enAlquiler

## EJERCICIO JS DEVELOPER
Esta prueba tiene como finalidad evaluar las habilidades de front, más concretamente de  programación en Javascript, del candidato.

### Requisitos
- Solamente se pide la parte de cliente. Se te proporcionará una API a la que acceder para obtener los datos.
- Puedes utilizar cualquier librería, pero se primará la utilización de la librería React junto con ES6 para resolver la prueba.
- Intenta optimizar el rendimiento de la aplicación, tanto en la carga de ella como en la funcionalidad.

### Descripción de la prueba
Se te proporcionará una API

[http://private-d5eaa-test9068.apiary-mock.com/properties](http://private-d5eaa-test9068.apiary-mock.com/properties)

Esta API devolverá un listado de viviendas con una serie de datos, incluyendo la imágen, y descripción (Si vas a la URL podrás ver todos estos datos). Se pide crear una aplicación que lea el listado de viviendas de la api y renderice por cada vivienda obtenida de la llamada un bloque similar al siguiente:

[Image here]

La aplicación deberá:
- Mostrar un elemento select con label “Ordenar por”, que contendrá los siguientes valores:
 - Orden por defecto: Cuando esté seleccionado mostrará las viviendas sin ningún orden en particular, conforme lleguen de la petición a la API.
 - Orden por precio ASC: Ordenará las viviendas por precio ascendente.
 - Orden por precio DESC: Ordenará las viviendas por precio descendente.
 - Orden por número de habitaciones: Ordenará las viviendas por número de habitaciones de mayor a menor.
- Deberá haber también un campo de texto con etiqueta “Buscar”. Si está vacío se mostrarán todas las viviendas, si tiene texto se mostrarán únicamente las viviendas cuyo título sea una subcadena del texto que haya en el campo.

#### Duración y envío de la prueba
La duración de la prueba es de 4 horas. Una vez la hayas finalizado envianosla al siguiente mail: [xxxx@enalquiler.com](xxxx@enalquiler.com)

Si no la has finalizado completamente no te preocupes, envíanos lo que tengas y nosotros lo evaluaremos ;)

## TECNOLOGIAS

|   | Versión |
|---|---|
| ![EcmaScript](https://gitcdn.xyz/repo/vorillaz/devicons/master/!SVG/js_badge.svg) | ES2017 |
| ![Node](https://gitcdn.xyz/repo/vorillaz/devicons/master/!SVG/nodejs_small.svg) | 6.3.1 |
| ![npm](https://gitcdn.xyz/repo/vorillaz/devicons/master/!SVG/npm.svg) | 3.10.3 |
| ![react](https://gitcdn.xyz/repo/vorillaz/devicons/master/!SVG/react.svg) |  |


## BOILERPLATE
| ![Yeoman](https://raw.githack.com/andresin87/enAlquiler/master/assets/Yeoman.svg) | [https://github.com/leftstick/generator-material-react](https://github.com/leftstick/generator-material-react) |