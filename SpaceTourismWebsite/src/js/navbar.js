const navItems = document.querySelectorAll('.nav-item')
const hamburgerMenu = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-list')

navItems.forEach(item => {
	item.addEventListener('click', () => {
		navItems.forEach(item => {
			item.classList.remove('nav-item--active')
			toggleHamburger(false)
		})
		item.classList.add('nav-item--active')
		navBar.classList.remove('nav-list--active')
	})
})

hamburgerMenu.addEventListener('click', toggleHamburger)

function toggleHamburger(bool = true) {
	if (bool === false) {
		navBar.classList.remove('nav-list--active')
		hamburgerMenu.classList.remove('is-active')
		return
	}
	navBar.classList.toggle('nav-list--active')
	hamburgerMenu.classList.toggle('is-active')
}

//click outside of the nav bar to close it
function closeNav(e) {
	if (!e.target.closest('.nav-list') && !e.target.closest('.hamburger')) {
		navBar.classList.remove('nav-list--active')
		hamburgerMenu.classList.remove('is-active')
	}
}

document.addEventListener('click', closeNav)
