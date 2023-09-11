const txtNumeros = document.querySelector("#txtNumeros");
const btnResolver = document.querySelector(".btnResolver");
const btnLimpiar = document.querySelector(".btnLimpiar");
const imprimirRespuesta = document.querySelector(".imprimirRespuesta");

txtNumeros.addEventListener("input", function(event){
    const valorInput = event.target.value;
    const expresionSoloNumeros = /^[0-9,]+$/;
    const inputSinComas = valorInput.replace(/,+/g, ',');

    if(!expresionSoloNumeros.test(valorInput)) { /* Si el valorInput no cumple con los requisitos (expresion) entra a reemplazar */
        event.target.value = valorInput.replace(/[^0-9,]/g, ""); /* Si no encuentra numeros ni comas (lo cual está permitido), lo reemplaza por vacio */
    }

    if (valorInput !== inputSinComas) {
        txtNumeros.value = inputSinComas;
    }
});

btnLimpiar.addEventListener("click", function(){
    txtNumeros.value = "";
    imprimirRespuesta.textContent = "";
});

btnResolver.addEventListener("click", function(){
    
});