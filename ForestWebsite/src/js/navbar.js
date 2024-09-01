document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerMenuLines = hamburgerMenu.querySelectorAll('.hamburger-menu__line');
    const navBar = document.querySelector('.nav__menu');
    const navItems = navBar.querySelectorAll('.nav__menu-item');

    function toggleHamburger() {
        navBar.classList.toggle('nav__menu--active');
        hamburgerMenu.classList.toggle('is-active');
        hamburgerMenuLines.forEach(line => line.classList.toggle('hamburger-menu__line--active'));
    }

    hamburgerMenu.addEventListener('click', toggleHamburger);

    function closeNav() {
        navBar.classList.remove('nav__menu--active');
        hamburgerMenu.classList.remove('is-active');
        hamburgerMenuLines.forEach(line => line.classList.remove('hamburger-menu__line--active'));
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && !e.target.closest('.hamburger-menu')) {
            closeNav();
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Highlight the current menu item
            navItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');

            // Close the nav when a menu item is clicked (for mobile)
            closeNav();
        });
    });

    function highlightCurrentMenuItem() {
        const currentPath = window.location.pathname;
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const href = link.getAttribute('href');
            const cleanHref = href.replace('/', ''); // Cleaned up href for comparison

            if (href === currentPath || (currentPath === '/' && href === '/#home')) {
                item.classList.add('active');
            } else if (currentPath !== '/' && currentPath.includes(cleanHref)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop;
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const href = link.getAttribute('href');
            const id = href.replace('/', '').substring(1);
            const section = document.getElementById(id);

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop - 400 && scrollPos < sectionTop + sectionHeight) {
                    navItems.forEach(item => item.classList.remove('active'));
                    item.classList.add('active');
                }
            }
        });
    }

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.addEventListener('scroll', onScroll);
        onScroll();
    }

    highlightCurrentMenuItem();
});
