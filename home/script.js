const catalogBtn = document.getElementById('catalog')

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
