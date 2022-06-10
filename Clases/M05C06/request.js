// buscar en google pero a lo loco xD
var url1 = new URL("https://www.google.cl/search?q=animales");
console.log(url1);
//es los mismo de arriba pero estructurao
var url2= new URL("search","https://www.google.cl");
url2.searchParams.append("q", "animales")
console.log(url2)

var url3= new URL("search","https://www.google.cl");
url3.searchParams.append("q", "ñandú");
console.log(url3);

//pkeapi
var url4= new URL("search","https://pokeapi.co/api/v2");
url3.searchParams.append("limit", "100");
url3.searchParams.append("offset", "0");
console.log(url4);

//solcitidu similar a la api (similar a al fetch)
//creamos objeto resques
var request = new XMLHttpRequest(); 
request.addEventListener("load", function(e){
    console.log("listo");
    console.log("statud scode: "+ request.status);
    console.log("status : "+request.statusText);
    console.log("response: "+ request.response);
    console.log("texto response: " +request.responseText);    
})
//implem,entar el evento para cuando el estado de la resuqes
request.onreadystatechange=function(){
    if(request.readyState ==3){
        console.log("loading");
    }else if(request.readyState ==4){
        console.log("FINALIZADO");
        console.log(request.response);
    }
}
//inicar
request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
//ejecutar
request.send();