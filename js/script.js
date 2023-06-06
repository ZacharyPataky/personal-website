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
// Smooth scrolling animation

const mobileNavLinks = document.querySelectorAll(".main-nav-link");

mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

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
