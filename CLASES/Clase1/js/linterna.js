let estado_linterna = "apagado";

/* capturo el sonido */
let sonido_batman = document.querySelector("#bati_encendido");
let sonido_click = document.querySelector("#bati_click");

let batman = document.querySelector(".batman");
let bati_boton = document.querySelector(".bati_boton");

/* evento */

bati_boton.addEventListener("click", controlar_linterna);

function controlar_linterna() {
  if (estado_linterna == "apagado") {
    estado_linterna = "encendido";
    sonido();
    batman.classList.add("batman_activo");
  } else {
    estado_linterna = "apagado";
    sonido();
    batman.classList.remove("batman_activo");
  }
}

function sonido() {
  if (sonido_batman.paused) {
    sonido_click.play();
    sonido_batman.play();
  } else {
    sonido_click.play();
    sonido_batman.pause();
  }
}
