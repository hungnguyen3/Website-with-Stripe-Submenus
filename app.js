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
});

closeBtn.addEventListener('click', ()=>{
    sidebarWrapper.classList.remove('show');
});

// set sidebar
// sublinks has 3 items and for each items
// map func does iterate over a parent array
sidebar.innerHTML = sublinks.map((item)=>{
    // set the link and page fields accordingly
    const {links,page} = item;
    return `<article>
    <h4>${page}</h4>
    <div class = "sidebar-sublinks">
    ${links.map((link)=>{
        return `<a href = "${link.url}">
        <i class="${link.icon}"></i>${link.label}
        </a>`
    }).join('')}
    </div>
    </article>`
}).join("");