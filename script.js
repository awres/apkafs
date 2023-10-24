const inpSearch = document.querySelector('.search')
const listItems = document.querySelectorAll('li')
const searchItem = e => {
	const text = e.target.value.toLowerCase()
	listItems.forEach(elem => {
		if (elem.textContent.toLowerCase().indexOf(text) != -1) {
			elem.style.display = 'block'
		} else {
			elem.style.display = 'none'
		}
	})
}
inpSearch.addEventListener('keyup', searchItem)
