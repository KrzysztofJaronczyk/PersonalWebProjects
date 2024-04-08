const containerCrew = document.querySelector('.container--crew')

const crewItems = containerCrew.querySelectorAll('.dot')
const crewTitle = containerCrew.querySelector('.subtitle--h3')
const crewSubtitle = containerCrew.querySelector('.subtitle--h4')
const crewText = containerCrew.querySelector('.text--crew')
const crewImg = containerCrew.querySelector('.crewImg')

let isAnimatingCrew = false

crewItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (isAnimatingCrew) {
			return
		}
		isAnimatingCrew = true
		crewItems.forEach(dot => {
			dot.classList.remove('dot--active')
		})
		item.classList.add('dot--active')

		switch (index) {
			case 0:
				crewTitle.textContent = 'Douglas Hurley'
				crewSubtitle.textContent = 'Commander'
				crewText.textContent =
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
				crewImg.src = 'dist/img/people/douglas.webp'
				break
			case 1:
				crewTitle.textContent = 'Mark Shuttleworth'
				crewSubtitle.textContent = 'Mission Specialist'
				crewText.textContent =
					'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
				crewImg.src = 'dist/img/people/mark.webp'
				break
			case 2:
				crewTitle.textContent = 'Victor Glover'
				crewSubtitle.textContent = 'PILOT'
				crewText.textContent =
					'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
				crewImg.src = 'dist/img/people/victor.webp'
				break
			case 3:
				crewTitle.textContent = 'Anousheh Ansari'
				crewSubtitle.textContent = 'Flight Engineer'
				crewText.textContent =
					'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
				crewImg.src = 'dist/img/people/ansari.webp'
				break
			default:
				crewTitle.textContent = 'Douglas Hurley'
				crewSubtitle.textContent = 'Commander'
				crewText.textContent =
					'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
				crewImg.src = 'dist/img/people/douglas.webp'
				break
		}
		fadeInAnimationCrew()
	})
})

function fadeInAnimationCrew() {
	crewTitle.classList.add('activePlanet', 'active')
	crewSubtitle.classList.add('activeCrew', 'active')
	crewText.classList.add('activePlanet', 'active')
	crewImg.classList.add('activePlanet', 'active')

	setTimeout(() => {
		crewTitle.classList.remove('activePlanet', 'active')
		crewSubtitle.classList.remove('activeCrew', 'active')
		crewText.classList.remove('activePlanet', 'active')
		crewImg.classList.remove('activePlanet', 'active')
		isAnimatingCrew = false
	}, 1000)
}
