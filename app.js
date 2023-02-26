// Tabbing block for "Work Experience"

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

// Tabbing block for "Work Experience"

let tabLinks_we = document.getElementsByClassName('tab-link-we');
let tabContents_we = document.getElementsByClassName('tab-contents-we');

function openTab_we(tabName) {
    for (tabLink_we of tabLinks_we) {
        tabLink_we.classList.remove('active-link-we');
    }
    for (tabContent_we of tabContents_we) {
        tabContent_we.classList.remove('active-tab-we');
    }

    event.currentTarget.classList.add('active-link-we');
    document.getElementById(tabName).classList.add('active-tab-we');
}