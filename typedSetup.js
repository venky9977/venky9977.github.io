// Setup for the Typed.js functionality
import Typed from 'https://cdn.skypack.dev/typed.js';

export function setupTyped() {
    new Typed(".auto-type-roles", {
        strings: ["Software Engineer", "Forward Deployed Engineer", "Technical Consultant", "Cloud and Infrastructure Engineer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
}
