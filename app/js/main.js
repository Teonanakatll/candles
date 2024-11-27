
// import {animate} from "./gsap-test"
import { setBackgrounds } from "./set-background"
import Swiper from "swiper"

import LocomotiveScroll from "locomotive-scroll"

import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay } from 'swiper/modules'
// import { jqueryTest } from "./jquery";

document.addEventListener('DOMContentLoaded', () => {

	// scroll.destroy();
	const scroll = new LocomotiveScroll({
		lenisOptions: {
			el: document.querySelector("body"),
			duration: 2.7,
			smooth: true,
		},
	})

	const menuBtn = document.querySelector('.menu__btn');
	const menuMobile = document.querySelector('.header .menu__list');

	menuBtn.addEventListener('click', ()=> {
		menuMobile.classList.toggle('menu--open');
	})

	const feedbackSlider = new Swiper('.feedback__slider', {
		modules: [Mousewheel, Pagination, Parallax],
		mousewheel: true,
		pagination: {
			el: '.feedback__pagination'
		},
		parallax: true,
		spaceBetween: 40,
		loop: true,
		speed: 2000,
	})

	const sertificatesSlider = new Swiper('.sertificates__slider', {
		modules: [Mousewheel, Pagination],
		mousewheel: true,
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			1000: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			360: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
		pagination: {
			el: '.sertificates__pagination'
		},
		loop: true,
		speed: 2000,
	})

	const accordeon = document.querySelector('.accordeon');
	const accordeonTitles = accordeon.querySelectorAll('.accordeon__button');

	accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
		accordeonTitle.addEventListener('click', function() {

			const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
			
			accordeonTitle.classList.toggle('accordeon__button--active');
			currentText.classList.toggle('accordeon__text--visible');

			if (currentText.classList.contains('accordeon__text--visible')) {
				currentText.style.maxHeight = currentText.scrollHeight + 'px'
			} else {
				currentText.style.maxHeight = null;
			}

		});
	});

	// animate();

	// jqueryTest();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

})

