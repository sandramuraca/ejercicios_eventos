const boton1 = document.querySelector("#button1");
const boton2 = document.querySelector("#button2");
const boton3 = document.querySelector("#button3");
const respuesta = document.querySelector("#respuesta");


boton2.addEventListener("click", ()=>{
    respuesta.textContent = "Correcto!";
    respuesta.style ="color: green";
    boton2. style = "background-color: green";
});


boton1.addEventListener("click", ()=>{
    respuesta.textContent = "Inorrecto!";
    respuesta.style ="color: red";
    boton1. style = "background-color: red";
    boton2. style = "background-color: green";
});


boton3.addEventListener("click", ()=>{
    respuesta.textContent = "Inorrecto!";
    respuesta.style ="color: red";
    boton3. style = "background-color: red";
    boton2. style = "background-color: green";
});
