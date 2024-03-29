// Loader
const fade = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("fade")
}
window.addEventListener('load',fade);

// const navItem = document.querySelector('.nav-item')
// NavHover = () => {
//     navItem.classList.add('.nav-item-hover')
// }
// navItem.addEventListener('mouseover',NavHover)
// navItem.addEventListener('mouseout')
// Category Menu drop Down
const category = document.querySelector(".nav-dropdown")
const categoryMenu = document.querySelector(".category-content")

category.addEventListener('mouseover',function(){
    categoryMenu.style.display="flex";
})
category.addEventListener('mouseout',function(){
    categoryMenu.style.display="none";
})

categoryMenu.addEventListener('mouseleave',function(){
    categoryMenu.style.display="none"
})

//Menu btn
const menuBtn = document.querySelector(".menu_btn")

const navList = document.querySelector('.nav_list')

menuBtn.addEventListener('click',function(){
    navList.classList.toggle('menu-show')
})