var palabra = "hola que tal"

if(palabra[0] == "h" || palabra[0] =="H"){
    console.log("si")

}else{
    console.log("no")
}

let palabraMay = palabra.toUpperCase(); //conviernte a mayuscula
console.log(palabra);
console.log(palabraMay);

let resultado = palabraMay.startsWith("A");
console.log("REs : "+resultado);

function ejecutar(){
    console.log("fuera");
}
var objeto ={
    ejecutar:function(){
        console.log("dentro")
    },
    comprobar:function(){
        ejecutar();
        this.ejecutar();
    }
}
objeto.comprobar();
//---------- FUNCIONES FLECHA
//funcion tradicional
function escribir(texto){
    console.log(texto);
}
//funcion fecha   directamente en vez de escribir funtion se coloca fecla y es resumida
var f = texto=>console.log(texto);
f("hola");

var s = num=> num * num;
console.log(s(5));

//sin nungun parametro
f = ()=>console.log("hola")
f();
//funcion con mas de 1 parametro
function mostrarPersona(nombre, apellido){
    console.log(nombre, apellido);
}
mostrarPersona("Alejandro", "Contuliano");
let m = (n,a)=>console.log(n+" "+a);
m("alejandra","ruiz")

//construccion funcion flecha
//(parte1m par2, part3)=>{instrucion1, instrucion2m instrucion3}
//si hay 1 parametro, se pueden iomitir los parentesis
//si hay una instrucion, se pueden omitir las llaves
var notas = [6.5, 5.4, 3.0, 4.5];

for (let i =0; i <= notas.length -1; i++){
    console.log(notas[i]);
}
console.log("----------")
//forma practica de for
notas.map(n=> console.log(n));
console.table(notas);

notasCopia = notasCopia.map(n=>n+0.2);
console.table(notasCopia);


let fruta = []