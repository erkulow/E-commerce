const swiper = new Swiper('.mySwiper', {
	slidesPerView: 7,
	spaceBetween: 16,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	breakpoints: {
		// when window width is >= 320px
		300: {
			slidesPerView: 2,
			spaceBetween: 12,
		},
		// when window width is >= 480px
		560: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		// when window width is >= 640px
		730: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
		900: {
			slidesPerView: 5,
			spaceBetween: 16,
		},
		1000: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
	},
})
