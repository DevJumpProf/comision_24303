// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Codo a Codo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1985;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
/* console.log(nuevaResta); */

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 22 % 5 === 1; // resto

let devolverString = (str) => str;
console.log(devolverString("Cadena de texto"));

let suma = (x, y) => x + y;
console.log(suma(10, 10));

let resta = (x, y) => x - y;
console.log(resta(10, 5));

let multiplica = (x, y) => x * y;
console.log(multiplica(10, 4));

let divide = (x, y) => x / y;
console.log(divide(21, 7));

/* const para funciones FLECHAS */

const sonIguales = (x, y) => (x === y ? true : false);
console.log(sonIguales(10, 11));
/* if (x===y){
return true
}else {
return false
} */
const sonIguales2 = (x, y) => x === y;
console.log(sonIguales(10, 10));
/* if (x===y){
return true
}else {
return false
} */

const tienenMismaLongitud = (str1, str2) => {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
};
console.log(tienenMismaLongitud("1234", "doce"));

const menosQueNoventa = (num) => num < 90;
console.log(menosQueNoventa(89));

const mayorQueCincuenta = (num) => num > 50;
console.log(mayorQueCincuenta(55));

const obtenerResto = (x, y) => x % y;
console.log(obtenerResto(22, 7));

const esPar = (num) => num % 2 === 0;
console.log(esPar(5));

const esImpar = (num) => num % 2 !== 0;
console.log(esImpar(5));


const elevarAlCuadrado = num => num*num ; console.log(elevarAlCuadrado(4));

const elevarAlCuadradoMath = num =>Math.pow(num,2) ; console.log(elevarAlCuadradoMath(4));

const elevarAlCubo = num =>Math.pow(num,3) ; console.log(elevarAlCubo(4));

const elevar=(num, exponent) => Math.pow(num, exponent); console.log(elevar(4,3));

const redondearNumero = num  => Math.round(num);console.log(redondearNumero(1.4));

const redondearHaciaArriba =num=>Math.ceil (num);console.log(redondearHaciaArriba (6.9));
                              /* .floor */

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
}
