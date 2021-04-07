/* contador
Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.*/

/**/

const resultado = document.querySelector("#resultado");

let resultadoOperaciones = 0;

const sumar1 = document.querySelector("#suma1");
const restar1 = document.querySelector("#resta1");
const sumar5 = document.querySelector("#suma5");
const restar5 = document.querySelector("#resta5");
const sumar10 = document.querySelector("#suma10");
const restar10 = document.querySelector("#resta10");

sumar1.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones + 1;
    resultado.textContent = resultadoOperaciones;
})

restar1.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones - 1;
    resultado.textContent = resultadoOperaciones;
})

sumar5.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones + 5;
    resultado.textContent = resultadoOperaciones;
})

restar5.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones - 5;
    resultado.textContent = resultadoOperaciones;
})

sumar10.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones + 10;
    resultado.textContent = resultadoOperaciones;
})

restar10.addEventListener("click", () =>{
    resultadoOperaciones = resultadoOperaciones - 10;
    resultado.textContent = resultadoOperaciones;
})
