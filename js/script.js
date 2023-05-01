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