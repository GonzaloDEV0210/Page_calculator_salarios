const iconAdd = document.querySelector(".icon_add");
const form = document.querySelector(".form");
const containerIconAdd = document.querySelector(".container_icon_add");

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