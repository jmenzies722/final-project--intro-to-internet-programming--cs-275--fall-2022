/*
Joshua Menzies
Final Project
Intro to Web Dev
*/
//off to start
window.onload = () => {
    let body = document.querySelector(`body`); //selecting the body
    let menu = document.querySelector(`nav`); // selecting the nav

    // shows the  menu or dismiss the menu when toggled
    let showMenu = document.getElementById(`show_menu`); //selecting the menu
    showMenu.addEventListener(`click`, () => {
        menu.classList.toggle(`hidden`);
    });

    // when the modal option is clicked that will indicate the modal is on
    let modal_On = document.getElementById(`show_modal`); //selecting the modal
    modal_On.addEventListener(`click`, () => {
        modal_Off.classList.toggle(`hidden`);
        body.classList.toggle(`no-scroll`);
    });

    // when model is on the, user will be allowed to click anywhere to dismiss the modal
    let modal_Off = document.querySelectorAll(`div`)[0];
    modal_Off.addEventListener(`click`, () => {
        modal_Off.classList.toggle(`hidden`);
        body.classList.toggle(`no-scroll`);
    });

    // an alternative to dismiss the modal will be to use the esc key on the keyboard
    document.addEventListener(`keydown`, (e) => {
        if (e.key === `Escape` && !modal_Off.classList.contains(`hidden`)) {
            modal_Off.click();
        }
    });
};

