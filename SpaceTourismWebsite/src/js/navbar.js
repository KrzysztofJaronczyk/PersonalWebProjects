const navItems = document.querySelectorAll('.nav-item')
const hamburgerMenu = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-list')

navItems.forEach(item => {
	item.addEventListener('click', () => {
		navItems.forEach(item => {
			item.classList.remove('nav-item--active')
		})
		item.classList.add('nav-item--active')
	})
})

hamburgerMenu.addEventListener('click', () => {
	navBar.classList.toggle('nav-list--active')
})
