// Main script to initialize other modules
import { openMenu, closeMenu } from './menu.js';
import { setupTyped } from './typedSetup.js';
import { formHandler } from './formHandler.js';
import { TabManager } from './TabManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.fa-bars');
    const closeToggle = document.querySelector('.fa-xmark');
    const form = document.forms['submit-to-google-sheet'];

    menuToggle.addEventListener('click', openMenu);
    closeToggle.addEventListener('click', closeMenu);
    form.addEventListener('submit', formHandler);

    new TabManager();
    setupTyped();
});
