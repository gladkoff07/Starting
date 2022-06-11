// Import Libs from npm
import $ from "jquery";
window.jQuery = $;
window.$ = $;

import mask from "jquery-mask-plugin";
import { Fancybox } from "@fancyapps/ui";
import Swiper, { Navigation, Pagination } from "swiper";

// Fancybox init
Fancybox.bind("[data-fancybox]", {
  animationEffect: "zoom-in-out",
  slideClass: "modal-close",
});

// Swiper init
const swiperWorksVideo = new Swiper(".js-slider-name", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  // spaceBetween: 0,
  // centeredSlides: true,
  roundLengths: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
