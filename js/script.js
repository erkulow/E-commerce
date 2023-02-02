const catalogBtn = document.getElementById('catalog')
const header = document.querySelector('.header')

catalogBtn.addEventListener('click', () => {
	const catalogContent = document.getElementById('catalog_wrapper')
	if (catalogContent.classList.contains('catalog_wrapper_show')) {
		catalogContent.classList.remove('catalog_wrapper_show')
		catalogContent.classList.add('catalog_wrapper_hide')
	} else {
		catalogContent.classList.add('catalog_wrapper_show')
		catalogContent.classList.remove('catalog_wrapper_hide')
	}
})

var shrinkHeader = 1

function getCurrentScroll() {
	return window.pageYOffset
}

window.addEventListener('scroll', () => {
	var scroll = getCurrentScroll()
	if (scroll >= shrinkHeader) {
	   header.style.cssText = 'box-shadow: 3px 3px 9px rgba(0,0,0,0.2);'
	} else {
		header.style.cssText = 'box-shadow:none;'
	}
})
