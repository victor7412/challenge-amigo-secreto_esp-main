// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const  lista = document.getElementById("listaAmigos");
const elResultado = document.getElementById("resultado");

function agregarAmigo(){
 listaAmigos.push(inputAmigo.value)
 lista.innerHTML += `<li>${inputAmigo.value}</li>`;
    if(amigo.value === ""){
        alert("No hay ingresado ningun nombre, ingrese un nombre nuevamente");
    }
inputAmigo.value = "";
inputAmigo.focus();
}


function sortearAmigo(){
    if(listaAmigos.length != 0){
       const indice = Math.floor(Math.random() * listaAmigos.length)
        elResultado.innerHTML = `Tu amigo secreto es : ${listaAmigos[indice]}`
    }else{
        alert("No hay ningun nombre, por favor ingrese un nombre")
    }

}
