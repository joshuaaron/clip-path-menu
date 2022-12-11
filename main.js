import './style.scss';

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
    if (nav.getAttribute('data-state') === 'open') {
        nav.setAttribute('data-state', 'closing');
        nav.addEventListener(
            'animationend',
            () => {
                nav.setAttribute('data-state', 'closed');
            },
            { once: true },
        );
    } else {
        nav.setAttribute('data-state', 'open');
    }
});
