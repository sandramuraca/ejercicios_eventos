/*playlist
Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada */

alert("le pediremos sus 5 canciones favoritas para armanar un playlist");

const dato1 = prompt("Ingrese la primer cancion");
const dato2 = prompt("Ingrese la segunda cancion");
const dato3 = prompt("Ingrese la tercer cancion");
const dato4 = prompt("Ingrese la cuarta cancion");
const dato5 = prompt("Ingrese la quinta cancion");

const cancion1 = document.querySelector("#cancion1");
const cancion2 = document.querySelector("#cancion2");
const cancion3 = document.querySelector("#cancion3");
const cancion4 = document.querySelector("#cancion4");
const cancion5 = document.querySelector("#cancion5");

cancion1.innerHTML = dato1; 
cancion2.innerHTML = dato2;
cancion3.innerHTML = dato3;
cancion4.innerHTML = dato4;
cancion5.innerHTML = dato5;