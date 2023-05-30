console.log('Hello world!');

// Header element
const headerEl = document.querySelector('.header');

//////////////////////////////////////////////////////////////
// Enable mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});

//////////////////////////////////////////////////////////////
// Sticky navigation
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting)
            document.body.classList.add('sticky');
        else
            document.body.classList.remove('sticky');
    },
    {
        // In the viewport
        root: null,
        // Strikes as soon as the hero is outside of the viewport
        threshold: 0,
        rootMargin: '-96px'
    })
obs.observe(headerEl);

//////////////////////////////////////////////////////////////
// Education - Tab Links
const tabLinks = document.getElementsByClassName('tab-link');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('tab-link--active');
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('tab-contents--active');
    }

    event.currentTarget.classList.add('tab-link--active');
    event.stopPropagation();
    document.getElementById(tabName).classList.add('tab-contents--active');
}

//////////////////////////////////////////////////////////////
// Work Experience - Accordion
let workExpAccItem = document.querySelectorAll(".accordion-item");
workExpAccItem.forEach(workAccItem => {
    workAccItem.addEventListener("click", () => {
        workAccItem.classList.toggle('accordion-item--open');

        const itemIcon = workAccItem.children[3];
        itemIcon.name = (itemIcon.name === 'chevron-down-outline')
            ? 'chevron-up-outline' : 'chevron-down-outline';
    })
});
