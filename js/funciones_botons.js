e.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = 2.71;
    } else {
        input_resultado.value += 2.71;
    };
});

porcentaje.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "%";
    } else {
        input_resultado.value += "%";
    };
});

function radianes(numero) {
    numeroRadian = ((numero * Math.PI) / 180);
    return numeroRadian;
}

function grados(numero) {
    numeroGrados = (numero*(180 / Math.PI));
    return numeroGrados;
}

deg.addEventListener("click", function(){
    let numeroIngre = input_resultado.value;
    let respuestGrados = grados(numeroIngre);
    input_operacion.value = "gra " + input_resultado.value;
    input_resultado.value = parseFloat(respuestGrados.toFixed(3));
});

rad.addEventListener("click", function(){
    let numeroIngresado = input_resultado.value;
    let respuestaFinal = radianes(numeroIngresado);
    input_operacion.value = "rad " + input_resultado.value;
    input_resultado.value = parseFloat(respuestaFinal.toFixed(3));
});

c.addEventListener("click", function(){
    input_operacion.value = "";
    input_resultado.value = "";
});

parentesis1.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "(";
    } else {
        input_resultado.value += "(";
    };
});

parentesis2.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = ")";
    } else {
        input_resultado.value += ")";
    };
});

division.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "/";
    } else {
        input_resultado.value += "/";
    };
});

number_7.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "7";
    } else {
        input_resultado.value += "7";
    };
});

number_8.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "8";
    } else {
        input_resultado.value += "8";
    };
});

number_9.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "9";
    } else {
        input_resultado.value += "9";
    };
});

signo_x.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "*";
    } else {
        input_resultado.value += "*";
    };
});

number_4.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "4";
    } else {
        input_resultado.value += "4";
    };
});

number_5.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "5";
    } else {
        input_resultado.value += "5";
    };
});

number_6.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "6";
    } else {
        input_resultado.value += "6";
    };
});

signo_menos.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "-";
    } else {
        input_resultado.value += "-";
    };
});

number_1.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "1";
    } else {
        input_resultado.value += "1";
    };
});

number_2.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "2";
    } else {
        input_resultado.value += "2";
    };
});

number_3.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "3";
    } else {
        input_resultado.value += "3";
    };
});

signo_mas.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "+";
    } else {
        input_resultado.value += "+";
    };
});

number_cero.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "0";
    } else {
        input_resultado.value += "0";
    };
});

number_doble_cero.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = "00";
    } else {
        input_resultado.value += "00";
    };
});

signo_punto.addEventListener("click", function(){
    if (!input_resultado.value) {
        input_resultado.value = ".";
    } else {
        input_resultado.value += ".";
    };
});

signo_equals.addEventListener("click", function(){
    let result = eval(input_resultado.value);
    input_operacion.value = input_resultado.value;
    input_resultado.value = result;
});