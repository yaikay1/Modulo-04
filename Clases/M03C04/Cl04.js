//carga del selector
var opciones = document.getElementsByClassName("opciones");
//varga
const inputUrl = document.getElementById("url")
const textoJson = document.getElementsByClassName("textoLargo");
const btn1 = document.getElementsByClassName("opcion")
//respuestas
let textStatus = document.querySelector("h3")
let textoRespuesta = document.querySelector("p");
//funciones
async function enviarGet(url){
    let respuesta = await fetch(url);
    textStatus.innerText = "Codigo" + respuesta.status;
    textStatus.innerText = " "+ respuesta.ok?"ok":"error"    
    let datos = respuesta.json();
    textoRespuesta.innerText = JSON.stringify(datos);

}

async function enviarPost(url){
    let respuesta = await fetch(url,{
        method:POST
    });
    textStatus.innerText = "Codigo" + respuesta.status;
    textStatus.innerText = " "+ respuesta.ok?"ok":"error"    
    let datos = respuesta.json();
    textoRespuesta.innerText = JSON.stringify(datos);
}

async function enviarDelete(){
    let respuesta = await fetch(url, {
        method:"DELETE"
    });
    textStatus.innerText = "Codigo" + respuesta.status;
    textStatus.innerText = " "+ respuesta.ok?"ok":"error"    
    textoRespuesta.innerText = ""
}
//eventos
BOT