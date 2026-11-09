let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let listaNotas = document.getElementById("listaNotas");
let promedioTexto = document.getElementById("promedio");
let notasAltasTexto = document.getElementById("notasAltas");
let notaMayorTexto = document.getElementById("notaMayor");
let notaMenorTexto = document.getElementById("notaMenor");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
    evento.preventDefault();

    let suma = 0;
    let cantidadValidas = 0;
    let notasAltas = 0;
    let mayor = -1;
    let menor = 6;
    listaNotas.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(document.getElementById("nota" + i).value);
        let fila = document.createElement("li");
        fila.textContent = "Nota " + i + ": " + nota;

        if (Number.isNaN(nota) || nota < 0 || nota > 5) {
            fila.textContent += " (invalida)";
        } else {
            suma += nota;
            cantidadValidas++;

            if (nota >= 3) {
                notasAltas++;
            }
            if (nota > mayor) {
                mayor = nota;
            }
            if (nota < menor) {
                menor = nota;
            }
        }

        listaNotas.appendChild(fila);
    }

    if (cantidadValidas === 0) {
        mensaje.textContent = "No hay notas validas";
        promedioTexto.textContent = "";
        notasAltasTexto.textContent = "";
        notaMayorTexto.textContent = "";
        notaMenorTexto.textContent = "";
    } else {
        let promedio = suma / cantidadValidas;
        mensaje.textContent = "";
        promedioTexto.textContent = "Promedio: " + promedio.toFixed(2);
        notasAltasTexto.textContent = "Notas altas (3 o mas): " + notasAltas;
        notaMayorTexto.textContent = "Nota mayor: " + mayor;
        notaMenorTexto.textContent = "Nota menor: " + menor;
    }
}