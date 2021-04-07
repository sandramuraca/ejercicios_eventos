/*paleta
Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado. */


const muestraColor = document.querySelector("#muestra");
const rojo = document.querySelector(".rojo");
const amarillo = document.querySelector(".amarillo");
const verde = document.querySelector(".verde");
const azul = document.querySelector(".azul");
const gris = document.querySelector(".gris");
const violeta = document.querySelector("violeta");

rojo.addEventListener("click", ()=>{
    muestraColor.classList.add("rojo");
});
amarillo.addEventListener("click", ()=>{
    muestraColor.classList.add("amarillo");
});
verde.addEventListener("click", ()=>{
    muestraColor.classList.add("verde");
});
azul.addEventListener("click", ()=>{
    muestraColor.classList.add("azul");
});
gris.addEventListener("click", ()=>{
    muestraColor.classList.add("gris");
});
violeta.addEventListener("click", ()=>{
    muestraColor.classList.add("violeta");
});