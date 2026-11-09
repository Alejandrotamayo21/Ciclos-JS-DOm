let formTabla = document.getElementById("formTabla");
let listaTabla = document.getElementById("listaTabla");

function generarTabla(evento){
    evento.preventDefault();
    let numero = parseInt(document.getElementById("numeroTabla"),value);
    listaTabla.innerHTML = "";

    for (let i = 1; i<= 10; i++){
        let fila = document.createElement("li");
        fila.textContent = numero + " x " + i + " = " + numero * i;
        listaTabla.appendChild(fila);
    }
}