import fancybox from "./js/fancybox";
import theme from './js/theme';
import inputmask from "./js/inputmask";
import scrollTo from "./js/scrollTo";
import myGsap from "./js/gsap";
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import ripple from 'npm-kit-ripple';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, EffectCreative, Lazy } from 'swiper';


import './index.scss';
import Qwiz from "./js/qwiz";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, EffectCreative, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
	fancybox.init()
	scrollTo.init()
	tab.init()
	toggle.init()
	ripple.init()
	theme.init()
	inputmask.init(document)
	myGsap.init()

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
	
	document.body.classList.add('loaded');


	const $qwiz = document.querySelector('.qwiz');
	const qwizSlider = $qwiz.querySelector('.qwiz-content .swiper').swiper;
	new Qwiz($qwiz, qwizSlider).init()

	window.addEventListener('toggleopen', toggleopenHaandler)
	window.addEventListener('toggleclose', togglecloseHaandler)
}



function toggleopenHaandler(event) {
	if (event.detail.target.classList.contains('-menu-')) {
		document.body.classList.add('menu-open')
	}
}

function togglecloseHaandler(event) {
	if (event.detail.target.classList.contains('-menu-')) {
		document.body.classList.remove('menu-open')
	}
}