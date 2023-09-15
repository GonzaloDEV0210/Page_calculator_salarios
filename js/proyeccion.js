const iconAdd = document.querySelector(".icon_add");
const form = document.querySelector(".form");
const containerIconAdd = document.querySelector(".container_icon_add");
const btnLimpiar = document.querySelector(".btnLimpiar");
const btnResolver = document.querySelector(".btnResolver");
const input = document.querySelectorAll("input"); /* el input recibe una lista con todos los elementos que tienen la misma clase  */
const txtRespuesta = document.querySelector(".txtRespuesta_dark");

let click = 0;
iconAdd.addEventListener("click", function(event){
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

btnLimpiar.addEventListener("click", function(){
    txtRespuesta.textContent = "";
    input.forEach(function(elemnto){ /* recorremos la lista input (funciona como un arreglo pero no es un arreglo) */
        elemnto.value = "";
    });
});



btnResolver.addEventListener("click", function(){
    let alertMostrada = false;
    input.forEach(function(){
        if(input[0].value.length > 0) {
            txtRespuesta.value = input[0].value;
        } else {
            if (!alertMostrada) {
                alert("Escriba su nombre o el de su empresa");
                alertMostrada = true;
            };
        };
        let index = 1; /* Decirle que a partir del index uno me guarde los salarios en un array */
    });
});