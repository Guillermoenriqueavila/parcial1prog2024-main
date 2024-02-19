const boton_lectura = document.getElementById("horas_lectura");
const label_lectura = document.getElementById("n_horas_hechas");
let contador = 0;

boton_lectura.addEventListener("click", () => {
    contador += 1;
    label_lectura.innerHTML = "¡Tienes " + contador + " horas de lectura!";
    if (contador > 10) {
        contador_diabetes = contador - 10;
        label_lectura.innerHTML = "¡Tienes muchos conocimientos, te felicito! y " + contador + " horas de lectura";
    }
});

boton_lectura.addEventListener("focus", () => {
    // Acciones cuando el botón obtiene el foco
    boton_lectura.style.backgroundColor = "yellow";
});

boton_lectura.addEventListener("mouseover", () => {
    // Acciones cuando el mouse está sobre el botón
    boton_lectura.style.backgroundColor = "lightblue";
});

boton_lectura.addEventListener("blur", () => {
    // Acciones cuando el botón pierde el foco
    boton_lectura.style.backgroundColor = "";
});
