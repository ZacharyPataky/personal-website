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