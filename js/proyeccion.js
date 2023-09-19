document.addEventListener('DOMContentLoaded', function () {
    const iconAdd = document.querySelector(".icon_add");
    const form = document.querySelector(".form");
    const containerIconAdd = document.querySelector(".container_icon_add");
    const btnLimpiar = document.querySelector(".btnLimpiar");
    const btnResolver = document.querySelector(".btnResolver");
    const txtRespuesta = document.querySelector(".txtRespuesta_dark");

    let click = 0;
    iconAdd.addEventListener("click", function (event) {
        if (click < 3) {
            let newDivAdd = document.createElement("div");
            newDivAdd.innerHTML = "<label class='text_input'>Ingresa salario:</label><input class='input' type='text'>";
            newDivAdd.classList.add('container_label_input');
            form.appendChild(newDivAdd);
            click++;
            if (click == 3) {
                containerIconAdd.classList.add("icon_add_none");
            };
        };
    });

    btnLimpiar.addEventListener("click", function () {
        const input = document.querySelectorAll(".input"); /* el input recibe una lista con todos los elementos que tienen la misma clase  */
        txtRespuesta.value = "";
        input.forEach(function (elemnto) { /* recorremos la lista input (funciona como un arreglo pero no es un arreglo) */
            elemnto.value = "";
        });
    });

    btnResolver.addEventListener("click", function () {
        const input = document.querySelectorAll(".input"); /* el input recibe una lista con todos los elementos que tienen la misma clase  */
        let arraySalarios = [];
        for (let i = 1; i < input.length; i++) {
            if (input[i].value != 0) {
                arraySalarios.push(Number(input[i].value));
            };
        };
        
        let tasaArray = [];
        for (let i = 1; i < arraySalarios.length; i++) {
            let tasaCrecimiento = ((arraySalarios[i] - arraySalarios[i-1]) / arraySalarios[i-1]) * 100;
            tasaArray.push(tasaCrecimiento);
        };
        
        let suma = tasaArray.reduce(function(a,b){
            return a + b;
        },0);

        let promedio = (suma / tasaArray.length) / 100;
        let lastSalary = arraySalarios[arraySalarios.length - 1];
        let aumento = lastSalary * promedio;
        let proyeccionProximoYear = lastSalary + aumento;
        
        let alertMostrada = false;
        input.forEach(function () {
            if (input[0].value.length > 0) {
                txtRespuesta.value = input[0].value + ", tu proyección salarial para el próximo año es de " + proyeccionProximoYear;
            } else {
                if (!alertMostrada) {
                    alert("Escriba su nombre o el de su empresa");
                    alertMostrada = true;
                };
            };
        });
    });
});