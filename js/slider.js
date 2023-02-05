const swiper = new Swiper('.mySwiper', {
	slidesPerView: 7,
	spaceBetween: 16,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		top: 200,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
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

var swiperBanner = new Swiper('.bannerSwiper', {
	grabCursor: true,
	effect: 'creative',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	creativeEffect: {
		prev: {
			shadow: true,
			translate: [0, 0, -400],
		},
		next: {
			translate: ['100%', 0, 0],
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

const swiperDetailProduct = new Swiper('.productSwiper', {
	spaceBetween: 10,
	slidesPerView: 4,
	direction: 'vertical',
	freeMode: true,
	watchSlidesProgress: true,
})
const swiper2 = new Swiper('.productSwiperSmall', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: swiperDetailProduct,
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

var cardSwiper = new Swiper('.swiperCard', {
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
})
