import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import throttle from "./throttle";


const gsapAnimation = {
  fadeInLeft: {
    from: { x: '-50%', opacity: 0 },
    to: { x: 0, opacity: 1 }
  },
  fadeInRight: {
    from: { x: '50%', opacity: 0 },
    to: { x: 0, opacity: 1 }
  },
  fadeInUp: {
    from: { y: '50%', opacity: 0 },
    to: { y: 0, opacity: 1 }
  },
  fadeInDown: {
    from: { y: '-50%', opacity: 0 },
    to: { y: 0, opacity: 1 }
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  scaleIn: {
    from: { scale: 1.5 },
    to: { scale: 1 }
  },
  clipInUp: {
    from: {
      y: '10px',
      webkitClipPath: 'polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)',
      clipPath: 'polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)',
    },
    to: {
      y: '0',
      webkitClipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    }
  }
}

const sheetsMouseListeners = []

function gsapInit() {
  const scrollElements = document.querySelectorAll('.gsap-scroll');
  scrollElements.forEach((element) => {
    const key = element.getAttribute('data-animation')
    const duration = element.getAttribute('data-duration') || 1.00
    const end = element.getAttribute('data-end') || 'top center'
    const start = element.getAttribute('data-start') || 'top 95%'
    const delay = element.getAttribute('data-delay') || 0.100

    const instance = gsap.fromTo(element, gsapAnimation[key].from, {
      ...gsapAnimation[key].to,
      duration,
      delay,
      scrollTrigger: {
        trigger: element.parentElement,
        start: start,
        end: end,
        // scrub: true,
        // markers: true,
        // id: "scrub"
      }
    });

  })


}



const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsapInit()


}

export default { init }