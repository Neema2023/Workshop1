import './style.css';

const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menu-icon');

if (!menuButton || !mobileMenu || !menuIcon) {
    console.error(
        'Navbar elements not found. Check index.html and make sure Vite is loading the correct project.'
    );
} else {
    menuButton.addEventListener('click', () => {
        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        mobileMenu.classList.toggle('hidden');

        menuButton.setAttribute('aria-expanded', String(!isOpen));

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Open navigation menu' : 'Close navigation menu'
        );

        menuIcon.textContent = isOpen ? '☰' : '✕';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute(
                'aria-label',
                'Open navigation menu'
            );
            menuIcon.textContent = '☰';
        });
    });
}