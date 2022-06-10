let container=document.querySelector(".container");
let inputTarea=document.querySelector("#input");
let agregar=document.querySelector(".boton-agregar");
let instancias=[]; 

 class Item{
    constructor(nuevaTarea){
        this.nuevaTarea=nuevaTarea;

        this.crearDiv=function(nuevaTarea){

            let div1=document.createElement("div");
            div1.setAttribute("class","item-input");

            let disabled=document.createElement("input");
            disabled.setAttribute("class", "item-input");
            disabled.value=this.nuevaTarea;
            disabled.disabled=true;

                //mensaje cambio
            let btnEdit=document.createElement("button");
            btnEdit.innerHTML="<i class='fas fa-lock'></i>";
            
            let btnRemove=document.createElement("button");
            btnRemove.innerHTML="<i class='fas fa-trash'></i>"; 

            div1.appendChild(disabled);
            div1.appendChild(btnEdit); 
            div1.appendChild(btnRemove);
            container.appendChild( div1);
            
            btnEdit.addEventListener("click",function(){
                if (disabled.disabled == true) {
                    btnEdit.innerHTML='<i class="fa-solid fa-lock-open"></i>';
                    disabled.disabled = false; 
                } else {
                    btnEdit.innerHTML='<i class="fa-solid fa-lock"></i>';
                    disabled.disabled = true; 
                };
            })
            btnRemove.addEventListener("click",function(){
                div1.remove();
            })
        }
    }
} 
function validar(){
    if(!inputTarea.value==""){
        let datosInput= new Item(inputTarea.value);
        instancias.push(datosInput);
        datosInput.crearDiv(datosInput);
        inputTarea.value="";
        inputTarea.focus();
    }else{
        alert("No debe estar en blanco, debe ingresar una tarea");
    }
}
inputTarea.addEventListener("keyup", function(e){
    if(e.key=="Enter"){
       validar();
    }
})
agregar.addEventListener("click", validar);