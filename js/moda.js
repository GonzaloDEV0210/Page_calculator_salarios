const txtNumeros = document.querySelector("#txtNumeros");
const btnResolver = document.querySelector(".btnResolver");
const btnLimpiar = document.querySelector(".btnLimpiar");
const imprimirRespuesta = document.querySelector(".imprimirRespuesta");

txtNumeros.addEventListener("input", function () {
    let valorTextArea = txtNumeros.value;
    let newValor = valorTextArea.replace(/[^0-9,]/g, "");
    txtNumeros.value = newValor;
});

btnLimpiar.addEventListener("click", function () {
    txtNumeros.value = "";
    imprimirRespuesta.textContent = ""
});

btnResolver.addEventListener("click", function () {
    let numerosIngresados = txtNumeros.value;
    let arrayNumeros = numerosIngresados.split(',').map(function(item){
        return parseFloat(item.trim());/* split() separa el string ('r','e','x') y el map() esta convirtiendo los numeros a typeOf number */
    });
    arrayNumeros.sort(); /* Ordenando ascendentemente el array */

    let objetoNumeros = {};
    for (let numero of arrayNumeros) {
        if (!objetoNumeros[numero]) {
            objetoNumeros[numero] = 1;
        } else {
            objetoNumeros[numero]++;
        }
    }
    let cantidad = 0;
    let moda = 0;
    for (let propiedad in objetoNumeros) {
        if (objetoNumeros[propiedad] > cantidad) {
            cantidad = objetoNumeros[propiedad];
            moda = propiedad;
        };
    };
    imprimirRespuesta.textContent = moda;
});