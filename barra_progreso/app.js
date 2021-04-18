/*progreso
Crear un documento html con

una barra de progreso (con un div dentro de otro)
un elemento de texto que indique el progreso (p. ej. 50%)
dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
el incremento/decremento es del 10%*/
 

const divhijo = document.querySelector(".divhijo");
const parrafo = document.querySelector(".parrafo");
const botonMas = document.querySelector(".mas");
const botonMenos = document.querySelector(".menos");
let porcentaje = 0;
parrafo.textContent = `${porcentaje}%`;
const body = document.querySelector("body");

const sumar = () =>{

    if (porcentaje < 100){
        porcentaje = porcentaje + 10;
        divhijo.style = `width: ${porcentaje}%;`
    } else {
        porcentaje = 100;
    }
    parrafo.textContent = `${porcentaje}%`;
}

const restar = () =>{
    
    if (porcentaje > 0 && porcentaje <= 100){
    porcentaje = porcentaje - 10;
    divhijo.style = `width: ${porcentaje}%;`
    }
    parrafo.textContent = `${porcentaje}%`;
}

botonMas.addEventListener("click", sumar);
botonMenos.addEventListener("click", restar);

const teclaSumar = (event) => {
    if(event.key == "ArrowRight"){
        sumar();
    }
}

const teclaRestar = (event) => {
    if(event.key == "ArrowLeft"){
        restar();
    }
}

body.addEventListener("keydown", teclaSumar);
body.addEventListener("keydown", teclaRestar);
