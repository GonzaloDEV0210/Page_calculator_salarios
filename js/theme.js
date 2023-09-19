const icon_theme = document.querySelector(".icon_theme");
const body = document.querySelector(".body");
const title = document.querySelector(".title");
const link_item_nav_cal = document.querySelector(".link_item_nav_cal");
const link_item_nav_mod = document.querySelector(".link_item_nav_mod");
const link_item_nav_med = document.querySelector(".link_item_nav_med");
const link_item_nav_pro = document.querySelector(".link_item_nav_pro");
const container_results = document.querySelector(".container_results");

/* icon_theme.addEventListener("click", function () {
    body.classList.toggle("body_dark");
    title.classList.toggle("title_dark");
    if (container_results == null) {
        link_item_nav_cal.classList.toggle("link_item_nav_cal_dark");
        link_item_nav_mod.classList.toggle("link_item_nav_mod_dark");
        link_item_nav_med.classList.toggle("link_item_nav_med_dark");
        link_item_nav_pro.classList.toggle("link_item_nav_pro_dark");
    } else {
        link_item_nav_cal.classList.toggle("link_item_nav_cal_dark");
        link_item_nav_mod.classList.toggle("link_item_nav_mod_dark");
        link_item_nav_med.classList.toggle("link_item_nav_med_dark");
        link_item_nav_pro.classList.toggle("link_item_nav_pro_dark");
        container_results.classList.toggle("container_results_dark");
    };
}); */

// Función para cambiar el tema
function cambiarTema() {
    body.classList.toggle("body_dark");
    title.classList.toggle("title_dark");
    link_item_nav_cal.classList.toggle("link_item_nav_cal_dark");
    link_item_nav_mod.classList.toggle("link_item_nav_mod_dark");
    link_item_nav_med.classList.toggle("link_item_nav_med_dark");
    link_item_nav_pro.classList.toggle("link_item_nav_pro_dark");

    if (container_results !== null) {
        container_results.classList.toggle("container_results_dark");
    }
    
    // Guardar el tema seleccionado en localStorage
    const temaActual = body.classList.contains("body_dark") ? "dark" : "light";
    localStorage.setItem("tema", temaActual);
}

// Agregar evento al icono de cambio de tema
icon_theme.addEventListener("click", cambiarTema);

// Verificar y aplicar el tema al cargar la página
window.onload = function () {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        cambiarTema(); // Aplicar tema oscuro si está guardado
    }
};