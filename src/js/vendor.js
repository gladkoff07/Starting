// Import Libs from npm
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import mask from 'jquery-mask-plugin';
import 'slick-carousel';
import { Fancybox } from '@fancyapps/ui';

// Fancybox init
Fancybox.bind("[data-fancybox]", {
  animationEffect : "zoom-in-out",
  slideClass : 'modal-close'
});
