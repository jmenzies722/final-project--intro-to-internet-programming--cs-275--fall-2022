/*
Joshua Menzies
Final Project
*/

//off to start
window.onload = () => {
    const body = document.querySelector(`body`); //selecting the body
    const menu = document.querySelector(`nav`); // selecting the nav

    // shows the  menu or dismiss the menu when toggled
    const showMenu = document.getElementById(`menu`); //selecting the menu
    showMenu.addEventListener(`click`, () => {
        menu.classList.toggle(`hidden`);
    });

    // when the modal option is clicked that will indicate the modal is on
    const modal_On = document.getElementById(`modal`); //selecting the modal
    modal_On.addEventListener(`click`, () => {
        modal_Off.classList.toggle(`hidden`);
        body.classList.toggle(`no-scroll`);
    });

    // when model is on the, user will be allowed to  click anywhere to dismiss the modal
    const modal_Off = document.querySelectorAll(`div`)[0];
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

