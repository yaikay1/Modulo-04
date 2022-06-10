let texto = document.querySelector("#texto");
let boton = document.querySelector("button");
let div = document.querySelector("#contenedor");
let formulario = document.querySelector("form")


boton.addEventListener("click", function(e){
    //capture el texto
    let dato = texto.value;
    //crear nuevo elemento
    let nuevoElemento = document.createElement("p");
    //modifica nuevo elemento 
    nuevoElemento.innerText = dato;
    nuevoBotoneliminar.innerText = "eliminar";
    //
    nuevoBotoneliminar.addEventListener("click",function(){
        div.removeChild(nuevoElemento);
        div.removeChild(nuevoBotoneliminar);
    })
    /*
    //eliminar con click en el text
    nuevoElemento.addEventListener("click",function(e){
        div.removeChild(nuevoElemento);
    }) */
    //agregar nuevo elemento al html
    div.appendChild(nuevoElemento);
})
formulario.addEventListener("submit", function(e){
    e.preventDefault();
})