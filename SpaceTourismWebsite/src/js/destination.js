const sliderMenu = document.querySelector('#destinationSlider')
const sliderItems = sliderMenu.querySelectorAll('.nav-item')

const planetImg = document.querySelector('.planet')
const destinationTitle = document.querySelector('#destinationTitle')
const destinationText = destinationTitle.nextElementSibling
const distance = document.querySelector('.one .mainSubheading')
const time = document.querySelector('.two .mainSubheading')

sliderItems.forEach(item => {
	item.addEventListener('click', () => {
		sliderItems.forEach(item => {
			item.classList.remove('nav-item--active')
		})
		item.classList.add('nav-item--active')

		let planet = item.getAttribute('data-id')

		if (planet === destinationTitle.textContent.toLowerCase()) {
			return
		}

		switch (planet) {
			case 'moon':
				planetImg.src = '/dist/img/planets/moon.webp'
				destinationTitle.textContent = 'Moon'
				destinationText.textContent =
					'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
				distance.textContent = '384,400 km'
				time.textContent = '3 days'
				break
			case 'mars':
				planetImg.src = '/dist/img/planets/mars.webp'
				destinationTitle.textContent = 'Mars'
				destinationText.textContent =
					'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
				distance.textContent = '225 MIL. km'
				time.textContent = '9 months'
				break
			case 'europa':
				planetImg.src = '/dist/img/planets/europa.webp'
				destinationTitle.textContent = 'Europa'
				destinationText.textContent =
					'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
				distance.textContent = '628 MIL. km'
				time.textContent = '3 years'
				break
			case 'titan':
				planetImg.src = '/dist/img/planets/titan.webp'
				destinationTitle.textContent = 'Titan'
				destinationText.textContent =
					'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
				distance.textContent = '1.6 BIL. km'
				time.textContent = '7 years'
				break
			default:
				planetImg.src = '/dist/img/planets/moon.webp'
				destinationTitle.textContent = 'Moon'
				destinationText.textContent =
					'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
				distance.textContent = '384,400 km'
				time.textContent = '3 days'
		}
		fadeInAnimation()
	})
})

function fadeInAnimation() {
	planetImg.classList.add('activePlanet', 'active')
	destinationTitle.classList.add('activePlanet', 'active')
	destinationText.classList.add('activePlanet', 'active')
	distance.classList.add('activePlanet', 'active')
	time.classList.add('activePlanet', 'active')

	setTimeout(() => {
		planetImg.classList.remove('activePlanet', 'active')
		destinationTitle.classList.remove('activePlanet', 'active')
		destinationText.classList.remove('activePlanet', 'active')
		distance.classList.remove('activePlanet', 'active')
		time.classList.remove('activePlanet', 'active')
	}, 1000)
}
