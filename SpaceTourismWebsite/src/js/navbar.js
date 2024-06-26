const hamburgerMenu = document.querySelector('.hamburger')
const navBar = document.querySelector('#navbar')
const navItems = navBar.querySelectorAll('.nav-item')
const allSections = document.querySelectorAll('.section')
const logo = document.querySelector('.logoContainer')
const circle = document.querySelector('.circle')

function setBackgroundHeight() {
	const activeSection = document.querySelector('.section--active')
	const shadow = activeSection.querySelector('.shadow')
	const wrapper = activeSection.querySelector('.wrapper')

	const height = wrapper.clientHeight

	if (window.innerWidth < 768) {
		shadow.style.height = `${height + 150}px`
	}
}

navItems.forEach(item => {
	item.addEventListener('click', () => {
		navItems.forEach(item => {
			item.classList.remove('nav-item--active')
			toggleHamburger(false)
		})
		item.classList.add('nav-item--active')
		//get item id
		const id = item.getAttribute('data-id')
		// console.log(id)
		//show section with the same id
		allSections.forEach(section => {
			section.classList.remove('section--active')
			if (section.getAttribute('id') === id) {
				section.classList.add('section--active')
				setBackgroundHeight()
			}
		})
	})
})

logo.addEventListener('click', () => {
	navItems.forEach(item => {
		item.classList.remove('nav-item--active')
	})
	allSections.forEach(section => {
		section.classList.remove('section--active')
	})
	allSections[0].classList.add('section--active')
	navItems[0].classList.add('nav-item--active')
})

circle.addEventListener('click', () => {
	navItems.forEach(item => {
		item.classList.remove('nav-item--active')
	})
	allSections.forEach(section => {
		section.classList.remove('section--active')
	})
	allSections[1].classList.add('section--active')
	navItems[1].classList.add('nav-item--active')
})

window.addEventListener('resize', setBackgroundHeight)

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
hamburgerMenu.addEventListener('click', toggleHamburger)
