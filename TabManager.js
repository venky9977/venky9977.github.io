// ES6 Class for managing tab functionality
export class TabManager {
    constructor() {
        this.tabLinks = document.querySelectorAll('.tab-links');
        this.tabContents = document.querySelectorAll('.tab-contents');

        this.tabLinks.forEach(link => {
            link.addEventListener('click', (e) => this.openTab(e, link.getAttribute('data-tab')));
        });
    }

    openTab(event, tabName) {
        this.tabContents.forEach(content => {
            content.classList.remove('active-tab');
            content.style.display = 'none';
        });

        this.tabLinks.forEach(link => {
            link.classList.remove('active-link');
        });

        document.getElementById(tabName).style.display = 'block';
        document.getElementById(tabName).classList.add('active-tab');
        event.currentTarget.classList.add('active-link');
    }
}
