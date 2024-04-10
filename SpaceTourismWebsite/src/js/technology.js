const techItems = document.querySelectorAll('.slider-container .dot')
const techTitle = document.querySelector('.subtitle--h3--technology')
const techText = document.querySelector('.text--technology')
const techImage = document.querySelector('.rocketImg')

let isAnimatingTech = false

techItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (isAnimatingTech) {
			return
		}
		isAnimatingTech = true
		techItems.forEach(dot => {
			dot.classList.remove('dot--active')
		})
		item.classList.add('dot--active')

		const selectedIndex = Array.from(item.parentElement.children).indexOf(item)

		switch (selectedIndex) {
			case 0:
				techTitle.textContent = 'Launch Vehicle'
				techText.textContent =
					"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
				techImage.style.backgroundImage = 'url(/dist/img/rockets/launch.webp)'
				techImage.style.backgroundPositionY = 'bottom'

				break
			case 1:
				techTitle.textContent = 'Spaceport'
				techText.textContent =
					'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
				techImage.style.backgroundImage = 'url(/dist/img/rockets/spaceport.webp)'
				techImage.style.backgroundPositionY = 'bottom'

				break
			case 2:
				techTitle.textContent = 'SPACE CAPSULE'
				techText.textContent =
					"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
				techImage.style.backgroundImage = 'url(/dist/img/rockets/capsule.webp)'
				techImage.style.backgroundPositionY = 'center'

				break
			default:
				techTitle.textContent = 'Launch Vehicle'
				techText.textContent =
					"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
				techImage.style.backgroundImage = 'url(/dist/img/rockets/launch.webp)'
				techImage.style.backgroundPositionY = 'bottom'

				break
		}
		fadeInAnimationTech()
	})
})

function fadeInAnimationTech() {
	techTitle.classList.add('activeCrew', 'active')
	techText.classList.add('activePlanet', 'active')
	techImage.classList.add('activePlanet', 'active')
	setTimeout(() => {
		techTitle.classList.remove('activeCrew', 'active')
		techText.classList.remove('activePlanet', 'active')
		techImage.classList.remove('activePlanet', 'active')
		isAnimatingTech = false
	}, 1000)
}
