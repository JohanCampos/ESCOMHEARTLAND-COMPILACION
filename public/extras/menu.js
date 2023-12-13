const menu = document.querySelector(".items-navbar");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const itemMenu = document.querySelectorAll(".item-menu")


function toogleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenu.addEventListener("click",toogleMenu);
closeMenu.addEventListener("click",toogleMenu);

itemMenu.forEach(item =>{
    item.addEventListener("click",toogleMenu);
})
