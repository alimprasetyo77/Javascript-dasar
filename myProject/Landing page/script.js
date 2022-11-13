const menuBar = document.querySelector('.menu-bar')
const menuNavigation = document.querySelector('.menu-navigation')

menuBar.addEventListener('click',() =>{
    menuNavigation.classList.toggle('menu-active')
})