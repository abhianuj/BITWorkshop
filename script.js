'use strict'
const menuBtn = document.getElementById('menubtn');
const menu = document.getElementById('nav');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle("menuOpen");
})