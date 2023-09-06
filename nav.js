const list_nav = document.querySelector(".list_nav");
const bar = document.querySelector(".icon_bars");
const equis = document.querySelector(".icon_close_nav");

bar.addEventListener("click", function(){
    list_nav.classList.remove("ocultar");
});

equis.addEventListener("click", function(){
    list_nav.classList.add("ocultar");
});