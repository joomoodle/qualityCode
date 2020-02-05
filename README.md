
##1. Escribe un ejemplo sencillo de una función que se ejecute inmediatamente y que imprima la suma de todos los elementos del siguiente arreglo const array = [1,2,3,4];
const array = [1,2,3,5];
let sum = array.reduce((x,y) => {
   return x + y;
})

console.log(sum)

##2. Define ¿qué es un closure? y ¿cómo funciona? 
Un closure es la manera de como una función dentro de una funcion contenedora puede hacer referencia a las variables despues de que la funcion contenedora ha terminado de ejecutarse

¿Como funciona?
  Se declara una funcion contenedora en la cual tendra variables locales dentro de la funcion contenedora se crea una funcion en la cual podra acceder a las variables
  de la funcion contenedora

##3. Describe Hoisting 
  Se refiere a las fases de ejecucion y de creación de las funciones

##4. Proporciona una breve descripción y ejemplo sobre algunos patrones de diseño que hayas aplicado en tus proyectos 
  MVC (Modelo vista controlador) Modelo se refiere al modelado de datos, Vista hace referencia a como mostrar los datos, Controlador es el que controla los datos y los manda a la vista
##5. Define 2 ejemplos prácticos de cómo se debe utilizar “const” y “let” 
   Const es una contante por la cual no cambiara su valor de igual forma solo esta accesible dentro de un bloque de codigo
   let se usa apartir de un bloque de codigo por ejemplo dentro de un loop se declara una variable "let number" solo estara accesible dentro del loop
##6. Menciona 2 paradigmas de lenguaje que son soportados por Javascript 
   programación orientada a objetos


##7. Describe con palabra propias cómo funciona redux
   Redux nos ayuda al manejo del estado global dentro de una aplicación nos brinda un mayor control sobre el flujo de datos

##8. Utilizando tus habilidades con ReactJs o ES6, realiza una llamada a la siguiente API y obtén la siguiente información 
