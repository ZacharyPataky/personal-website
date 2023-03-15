// Tabbing block for "Education"
let tabLinks_edu = document.getElementsByClassName('tab-link-edu');
let tabContents_edu = document.getElementsByClassName('tab-contents-edu');

function openTab_edu(tabName) {
    for (tabLink_edu of tabLinks_edu) {
        tabLink_edu.classList.remove('active-link-edu');
    }
    for (tabContent_edu of tabContents_edu) {
        tabContent_edu.classList.remove('active-tab-edu');
    }

    event.currentTarget.classList.add('active-link-edu');
    document.getElementById(tabName).classList.add('active-tab-edu');
}

// Reset the "Contact Me" form
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

// Toggle navigation menu
let navMenu = document.getElementById('mobile-nav-menu');
let menuButton = document.getElementById('open-menu');
let closeButton = document.getElementById('close-menu');
let header = document.getElementById('header');

function openMenu() {
    menuButton.style.display = 'none';
    navMenu.style.display = 'flex';
}

function closeMenu() {
    menuButton.style.display = 'block'
    navMenu.style.display = 'none';
}