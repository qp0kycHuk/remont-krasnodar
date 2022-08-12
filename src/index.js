import showPass from "./js/show-pass";
import fancybox from "./js/fancybox";
import rangeSlider from './js/range-slider';
import theme from './js/theme';
import inputmask from "./js/inputmask";
import scrollTo from "./js/scrollTo";
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
	showPass.init()
	scrollTo.init()
	rangeSlider.init()
	tab.init()
	toggle.init()
	ripple.init()
	theme.init()
	inputmask.init(document)

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')


	const $qwiz = document.querySelector('.qwiz');
	const qwizSlider = $qwiz.querySelector('.qwiz-content .swiper').swiper;
	new Qwiz($qwiz, qwizSlider).init()


}

