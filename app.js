import sublinks from './data.js'

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
//array of 3 link buttons
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

// hide and show sidebar
toggleBtn.addEventListener('click', ()=>{
    // add a class list 'show'
    sidebarWrapper.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
    sidebarWrapper.classList.remove('show');
})