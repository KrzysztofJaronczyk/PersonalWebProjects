document.addEventListener('DOMContentLoaded', function () {
	const themeToggle = document.getElementById('theme-toggle')

	function setThemePreference() {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (prefersDarkMode) {
			document.body.classList.add('dark-mode')
		} else {
			document.body.classList.remove('dark-mode')
		}
	}

	setThemePreference()

	themeToggle.addEventListener('click', function () {
		document.body.classList.toggle('dark-mode')
	})
})
