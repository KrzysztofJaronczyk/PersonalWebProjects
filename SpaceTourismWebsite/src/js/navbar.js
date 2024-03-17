const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach((item) => {
        item.classList.remove('nav-item--active');
        });
        item.classList.add('nav-item--active');
    });
    });