const icon_theme = document.querySelector(".icon_theme");
const body = document.querySelector(".body");
const title = document.querySelector(".title");
const link_item_nav_cal = document.querySelector(".link_item_nav_cal");
const link_item_nav_mod = document.querySelector(".link_item_nav_mod");
const link_item_nav_med = document.querySelector(".link_item_nav_med");
const link_item_nav_pro = document.querySelector(".link_item_nav_pro");
const container_results = document.querySelector(".container_results");

icon_theme.addEventListener("click", function(){
    body.classList.toggle("body_dark");
    title.classList.toggle("title_dark");
    link_item_nav_cal.classList.toggle("link_item_nav_cal_dark");
    link_item_nav_mod.classList.toggle("link_item_nav_mod_dark");
    link_item_nav_med.classList.toggle("link_item_nav_med_dark");
    link_item_nav_pro.classList.toggle("link_item_nav_pro_dark");
    container_results.classList.toggle("container_results_dark");
});