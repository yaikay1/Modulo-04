const urlBase = "https://reqres.in/api/";

async function leeUsuario(){// siempre es asincrona cuando hay un await dentro
    let respuesta = await fetch("https://reqres.in/api/user/2")// por defecto es un get sin body y sin heat
    console.log(respuesta);
            
    if(respuesta.ok){
        let datos = await respuesta.json()//obtener datos
        console.log(datos);
    }else{
        console.log("datos no encontrados")
    }
}
leeUsuario();
let usuario1 = {
    name:"Alejandro Contuliano",
    job:"Devops"
}

async function leerUsuarioID(id){
    urlFinal = urlBase+"user/"+id;
    let respuesta
}

async function crearUsusario(usuario){
    urlFinal = urlBase+"user/";//crear ruta

    //paso 2 -construir el requuest con:
    //metodo (vervo)
    //header: lo que siempre (content-type)
    //body: transfomrar el json en el objeto que quiero enviar
    let respuesta =await fetch(urlFinal,{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(usuario)
    })
    console.log(respuesta);
    //paso 3 obtener los datos
    let datos = await respuesta.json();
    console.log(datos);
}
crearUsusario(usuario1);

async function editarUsuario(id){
    urlFinal = urlBase+"user/"+id;
    let respuesta =await fetch(urlFinal,{
        method: 'PUT',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(id)
    })
    console.log(respuesta);
    //paso 3 obtener los datos
    let datos = await respuesta.json();
    console.log(datos);

}
let usuario2 = {
    id: 879,
    name: "Alejandro Aza",
    Job:"Desarrollador"
}
console.log("usaurio original");
leeUsuario(870);
//editarUsuario(usuario2);