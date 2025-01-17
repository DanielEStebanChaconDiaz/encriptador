**¡Bienvenidas y bienvenidos a nuestro primer desafío!**

Durante estas cuatro horas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

```tex
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```

**Requisitos:**

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:

```tex
"gato" => "gaitober"
gaitober" => "gato"
```

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

**Extras:**

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro horas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.

En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.

En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.

Por fin, en la columna Concluido estarán los elementos ya concluidos.

El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!

**Desencripta nuestro mensaje secreto!**

```tex
¡Fenterlimescimesdaidenters, hais lobergraidober dentersbloberqufatenterair enterstenter menternsaijenter!
```



## Documentacion del encriptador

**Instalar dependencias**
```
npm i
```

**Configuracion del archivo .env**

```
EXPRESS_PORT = '5001'
EXPRESS_HOST = 'localhost'
```

**Iniciar projecto**

```
npm run dev
```

**Tecnologias utilizadas**

- Web Components: Utiliza la API de Web Components para crear un componente reutilizable encapsulado.

- Shadow DOM: Aísla el estilo y el comportamiento del componente del resto del documento.

- HTML5: Estructura del componente y el formulario.

- CSS: Estiliza el componente (se asume que existe un archivo css/style.css).

- JavaScript: Implementa la lógica de encriptación, desencriptación y manejo de eventos.

**Importacion del componente**


En el html importar de la siguiente manera:
```
<my-form-component></my-form-component>
```