const handleTitle = () => {
	const title = document.querySelector('title')
	const hidden = 'To Infinity and Beyond!'
	const visible = 'Space Tourism'
	const isVisible = document.visibilityState === 'visible'

	title.textContent = isVisible ? visible : hidden
}

addEventListener('visibilitychange', handleTitle)
