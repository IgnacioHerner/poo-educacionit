
// alert('Hola mundo desde JS');
/*
let numero = -12;
let numero2 = 2.636;

let direccion = 'San martin 1360'

let estado = true;

let nombre = prompt('Ingrese su nombre');
*/

let nombre = prompt("Por favor, ingresa tu nombre de usuario:");

if (nombre === "root") {
    let apellido = prompt("Por favor, ingresa tu apellido:");
    alert("Bienvenido, " + nombre + " " + apellido + "!");
} else {
    alert("Acceso denegado. Solo el usuario 'root' tiene acceso.");
}
