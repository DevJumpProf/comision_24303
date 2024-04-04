/* DESTRUCTURING ARRAYS */
//                    0       1         2
let seleccion = ["Messi", "De Paul", "Banini"];

/* accedemos */
console.log(seleccion[2]);

/* copiar un dato sin DESTRUCTURING */

/* let estefania = seleccion[2]
console.log(estefania); */

/* copiar un dato con DESTRUCTURING */

//    0 1 2
let [leo, rodrigo, estefania] = seleccion;
console.log(leo);
console.log(rodrigo);
console.log(estefania);
console.log(seleccion);

/* DESTRUCTURING OBJETOS */
let auto = {
  marca: "Ssanyoung",
  modelo: "Caravan",
  anio: 1999,
};

/* copiar un dato sin DESTRUCTURING */
let miModelo = auto.modelo;
console.log(miModelo);

/* copiar un dato con DESTRUCTURING */
let { marca: miMarca, modelo, anio } = auto;
console.log(miMarca);
console.log(modelo);
console.log(anio);
console.log(auto);
console.log(`Hola mi modelo de auto es : ${modelo}`);

/* Tanto ARRAYS como OBJETOS no se modifican , sino que copio su información en nuevas variables */

/* SPREAD OPERATOR */

/* ARRAY */
let rocky = ["Rocky", "Rocky II", "RockyIII"];
let creed = ["creed", "Creed II"];

let peliculasBox = [...creed, ...rocky, "Creed III la venganza de Nasty"];

console.log(peliculasBox);

/* OBJETOS */

let generoAventura = {
nombreGenero: "Aventura",
popularidad: 10,
};


let volverAlFuturo = {
    titulo: "volver al futuro",
    ranking: 1,
    ...generoAventura
    };

    let volverAlFuturoDos = {
        ...volverAlFuturo,
        anio : 1985
    }

    console.log(volverAlFuturoDos);



