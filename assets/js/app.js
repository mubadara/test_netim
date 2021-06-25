import { lazyLoad } from './lazy-load.js';
if(window.innerWidth > 1200){

    let navBar = document.querySelector('.navbar__list');
    // Mobile menu display
    document.getElementById('BURGER').addEventListener('click', function(){
        navBar.style.display = 'block'
    })
    // Mobile menu close
    document.querySelector('.close').addEventListener('click', function(){
        navBar.style.display = 'none'
    })
}
// Open submenu
let navItems = document.querySelectorAll('.navbar__list__items');
navItems.forEach(i => {
    i.addEventListener('click', function(){
        i.firstElementChild.classList.toggle('hidden')
    })
})
lazyLoad();

