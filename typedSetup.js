// Setup for the Typed.js functionality
import Typed from 'https://cdn.skypack.dev/typed.js';

export function setupTyped() {
    new Typed(".auto-type-roles", {
        strings: ["Software Engineer", "QA Engineer", "Project Manager"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
}
