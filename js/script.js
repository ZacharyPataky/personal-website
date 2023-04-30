console.log('Hello world!');

//////////////////////////////////////////////////////////////
// Enable mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});


//////////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
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
        rootMargin: '-80px'
    })
obs.observe(sectionHeroEl);