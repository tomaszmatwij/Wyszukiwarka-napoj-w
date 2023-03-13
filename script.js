const input = document.querySelector('.search')
const drinks = document.querySelectorAll('.drink-list__item')

const checkDrink = () => {
	const searchDrink = input.value.toLocaleLowerCase()
	console.log(searchDrink)
	drinks.forEach(el => {
		const task = el.textContent.toLocaleLowerCase()
		if (task.includes(searchDrink)) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', checkDrink)
