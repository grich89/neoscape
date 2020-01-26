export function navFunctions() {
    const navToggler = document.querySelector('.main-nav--toggler');
    const searchToggler = document.querySelector('.search-form--toggler');
    const mainNav = document.querySelector('.main-nav--items');
    const searchForm = document.querySelector('#search-form--form');

    navToggler.addEventListener('click', () => {
        toggle(mainNav, navToggler);
    });

    searchToggler.addEventListener('click', () => {
        toggle(searchForm, searchToggler);
    });

    let toggle = (item, button) => {
        if (item.classList.contains('open')) {
            button.setAttribute('aria-expanded', false);
            button.classList.remove('active');
            item.setAttribute('aria-hidden', true);
            item.classList.remove('open');
        } else {
            button.setAttribute('aria-expanded', true);
            button.classList.add('active');
            item.setAttribute('aria-hidden', false);
            item.classList.add('open');
        }
    }
}