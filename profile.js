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

// profile menu drop down
const profile = document.querySelector(".profile-dropdown   ")
const profileMenu = document.querySelector(".profile-menu")

profile.addEventListener('mouseover',function(){
    profileMenu.style.display="flex";
})
profile.addEventListener('mouseout',function(){
    profileMenu.style.display="none";
})

profileMenu.addEventListener('mouseleave',function(){
    profileMenu.style.display="none"
})

//Menu btn
const menuBtn = document.querySelector(".menu_btn")

const navList = document.querySelector('.nav_list')

menuBtn.addEventListener('click',function(){
    navList.classList.toggle('menu-show')
})

// navList.addEventListener('mouseout',function(){
//     navList.classList.toggle('menu-show')
// })

//carousal auto slider
const controlNext = document.querySelector('.carousel-control-next')
