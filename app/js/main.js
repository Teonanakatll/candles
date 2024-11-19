
// import {animate} from "./gsap-test"
import { setBackgrounds } from "./set-background"
// import Swiper from "swiper"

// import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay } from 'swiper/modules'
// import { jqueryTest } from "./jquery";

document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document.querySelector('.menu__btn');
	const menuMobile = document.querySelector('.header .menu__list');

	menuBtn.addEventListener('click', ()=> {
		menuMobile.classList.toggle('menu--open');
	})

	// animate();

	// jqueryTest();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

})

