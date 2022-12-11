/*
Joshua Menzies
Final Project
*/

//off to start
window.onload = () => {
    const body = document.querySelector(`body`); //selecting the body
    const menu = document.querySelector(`nav`); // selecting the nav

     // shows the  menu or dismiss the menu when toggled
     const showMenu = document.getElementById(`menu`);
     showMenu.addEventListener(`click`, () => {
         menu.classList.toggle(`hidden`);
     });

};
