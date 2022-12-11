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

      // when the modal option is clicked that will indicate the modal is on
    const modal_On = document.getElementById(`modal`);
    modal_On.addEventListener(`click`, () => {
        modal_Off.classList.toggle(`hidden`);
        body.classList.toggle(`no-scroll`);
    });


};
