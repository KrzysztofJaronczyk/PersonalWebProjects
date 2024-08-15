document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const hamburgerMenuLines = hamburgerMenu.querySelectorAll('.hamburger-menu__line');
	const navBar = document.querySelector('.nav__menu');
	const navItems = navBar.querySelectorAll('.nav__menu-item');
	const allSections = document.querySelectorAll('section');

	function toggleHamburger() {
		navBar.classList.toggle('nav__menu--active');
		hamburgerMenu.classList.toggle('is-active');
		hamburgerMenuLines.forEach(line => line.classList.toggle('hamburger-menu__line--active'));
	}

	hamburgerMenu.addEventListener('click', toggleHamburger);

	function closeNav(e) {
		if (!e.target.closest('.nav') && !e.target.closest('.hamburger-menu')) {
			navBar.classList.remove('nav__menu--active');
			hamburgerMenu.classList.remove('is-active');
			hamburgerMenuLines.forEach(line => line.classList.remove('hamburger-menu__line--active'));
		}
	}
	document.addEventListener('click', closeNav);

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.forEach(item => item.classList.remove('active'));
			item.classList.add('active');

			const id = item.querySelector('a').getAttribute('href').substring(1);

			allSections.forEach(section => {
				section.classList.remove('section--active');
				if (section.getAttribute('id') === id) {
					section.classList.add('section--active');
				}
			});

			toggleHamburger();
		});
	});

	// Scrollspy function
	function onScroll() {
		let scrollPos = window.scrollY || document.documentElement.scrollTop;

		navItems.forEach(item => {
			const link = item.querySelector('a');
			const section = document.querySelector(link.getAttribute('href'));
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPos >= sectionTop - 400 && scrollPos < sectionTop + sectionHeight) {
				navItems.forEach(item => item.classList.remove('active'));
				item.classList.add('active');
			}
		});
	}

	window.addEventListener('scroll', onScroll);
});
