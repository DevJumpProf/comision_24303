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

const elevarAlCuadrado = (num) => num * num;
console.log(elevarAlCuadrado(4));

const elevarAlCuadradoMath = (num) => Math.pow(num, 2);
console.log(elevarAlCuadradoMath(4));

const elevarAlCubo = (num) => Math.pow(num, 3);
console.log(elevarAlCubo(4));

const elevar = (num, exponent) => Math.pow(num, exponent);
console.log(elevar(4, 3));

const redondearNumero = (num) => Math.round(num);
console.log(redondearNumero(1.4));

const redondearHaciaArriba = (num) => Math.ceil(num);
console.log(redondearHaciaArriba(6.9));
/* .floor */

const numeroRandom = () => Math.round(Math.random() * 45);
console.log(numeroRandom());

const esPositivo = (numero) =>
  numero === 0 ? false : numero > 0 ? "Es positivo" : "Es negativo";
console.log(esPositivo(-1));
//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
/*   Federico Tripodi Percivali */
/*  return numero>0 ? "Es positivo" : numero<0 ? "Es negativo" : false ; */

/* Diego Cavalli */
/* if(numero > 0){
  console.log("Es positivo");
} else if (numero < 0) {
  console.log("El negativo");
} else {
  console.log(false);
}
 */
const agregarSimboloExclamacion = (str) => `${str} Codo !`;
console.log(agregarSimboloExclamacion("Hola Codo a"));

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:

const combinarNombres = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`;
console.log(combinarNombres("Bruce", "Wayne"));

const obtenerSaludo = (nombre) => `Hola ${nombre}`;
console.log(obtenerSaludo("Robin"));

const obtenerAreaRectangulo = (alto, ancho) => alto * ancho;
console.log(obtenerAreaRectangulo(10, 20));

const retornarPerimetro = (lado) => lado * 4;
console.log(retornarPerimetro(34));

const areaDelTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaDelTriangulo(10, 8));

const deEuroAdolar = (euro) =>
  `tenes ${euro} euros; el cambio de euro a dolar es : ${euro * 1.2}`;
console.log(deEuroAdolar(500));
//Supongamos que 1 euro equivale a 1.20 dólares.
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí

const esVocal = (letra) => {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  letra = letra.toLowerCase();
  if (letra.length != 1) {
    return "dato incorrecto ingresaste mas de un caracter";
  } else if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return `la letra ${letra} es vocal `;
  } else {
    return `la letra ${letra} NO es vocal`;
  }
};

/* console.log(esVocal("A".toLowerCase())); */
console.log(esVocal("A"));

const esVocalMatrix = (letra) => {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  let vocales = ["a", "e", "i", "o", "u"];

  if (letra.length === 1) {
    for (i = 0; i < vocales.length; i++) {
      if (letra.toLowerCase() == vocales[i]) {
        return "es vocal";
      }
    }
    return `dato incorrecto ingresaste una consonante y es la ${letra}`
  }
  return `dato incorrecto ingresaste mas de una vocal ingresaste ${letra}`
};

console.log(esVocalMatrix("e"));
