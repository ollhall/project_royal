import * as flsMob from "./modules/mobile.js";
flsMob.isMob();

// import * as flsSlick from "./modules/slick.js";
// flsSlick.isSlick();

import * as flsScript from "./modules/script.js";
flsScript.isScript();

import * as flsBurger from "./modules/burger.js";
flsBurger.isBurger();

import * as flsHeaderScroll from "./modules/header_scroll.js";
flsHeaderScroll.isHeaderScroll();

import * as flsWebp from "./modules/webp.js";
flsWebp.isWebp();

import * as flsdynamicAdapt from "./modules/dynamic_adapt.js";
flsdynamicAdapt.isdynamicAdapt();

import * as flsAnchor from "./modules/anchor.js";
flsAnchor.isAnchor();

// import * as flsSpoller from './modules/spoller.js'
// flsSpoller.isSpoller()

import * as flsSpollers from "./modules/spollers.js";
flsSpollers.isSpollers();

// import * as flsAriaExpanded from './modules/aria-expanded.js'
// flsAriaExpanded.isAriaExpanded()

// import * as flsSearch from './modules/search.js'
// flsSearch.isSearch()

// import * as flsRating from "./modules/rating.js";
// flsRating.isRating();

import * as flsPopup from "./modules/popup.js";
flsPopup.isPopup();

import * as flsSelect from "./modules/select.js";
flsSelect.isSelect();

// import * as flsQuantity from "./modules/quantity.js";
// flsQuantity.isQuantity();

import * as flsMyTabs from "./modules/mytabs.js";
flsMyTabs.isMyTabs();

// import * as flsTabs from "./modules/tabs.js";
// flsTabs.isTabs();

// import tippy, {roundArrow} from 'tippy.js';

// tippy('[data-tippy-content]');

// tippy('#tabs_1', {
//   content: '<p class="tippy__tabs">Миємо та натираємо кахель</p>',
//   arrow: false,
//   maxWidth: 260,
//   allowHTML: true,
// });

// import * as flsNumb from "./modules/wNumb.js";
// flsNumb.isNumb();

// import * as flsVideoButton from "./modules/video_button.js";
// flsVideoButton.isVideoButton();

// import * as flsVideoPlayer from "./modules/video_player.js";
// flsVideoPlayer.isVideoPlayer();

// import * as flsHidden from "./modules/hidden.js";
// flsHidden.isHidden();

// import * as flsValidation from './modules/validation.js'
// flsValidation.isValidation()

// import * as flsParallaxMouse from './modules/parallax-mouse.js'
// flsParallaxMouse.isParallaxMouse()

// import * as flsShowMore from "./modules/show_more.js";
// flsShowMore.isShowMore();

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
  Thumbs,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax, Thumbs]);

if (document.querySelector(".why-us")) {
  new Swiper(".why-us__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 16,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    watchOverflow: true,
    speed: 800,
    // loop: true,
    // effect: "fade",
    // parallax: true,
    // loopAdditionalSlides: 5,
    // preloadImages: false,
    pagination: {
      // el: '.control-slide-top__dotts',
      // clickable: true
      // renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: ".why-us__arrow_left",
      prevEl: ".why-us__arrow_right",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.8,
      },
      650: {
        slidesPerView: 2.3,
      },
      700: {
        slidesPerView: 2.8,
      },
      768: {
        slidesPerView: 3.2,
      },
      992: {
        slidesPerView: 3.5,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelector(".reviews")) {
  new Swiper(".reviews__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 16,

    watchOverflow: true,
    speed: 800,
   

    navigation: {
      nextEl: ".reviews__arrow_left",
      prevEl: ".reviews__arrow_right",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      650: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2.2,
      },
      990: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".other")) {
  new Swiper(".other__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 16,

    watchOverflow: true,
    speed: 800,
   

    navigation: {
      nextEl: ".other__arrow_left",
      prevEl: ".other__arrow_right",
    },

    breakpoints: {
      320: {
        slidesPerView: 2.2,
      },
      550: {
        slidesPerView: 2.5,
      },
      650: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3.5,
      },
      890: {
        slidesPerView: 4,
      },
    },
  });
}





if (document.querySelector(".work-third")) {
  new Swiper(".work-third__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 16,

    watchOverflow: true,
    speed: 800,
  
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      450: {
        slidesPerView: 1.3,
      },
      500: {
        slidesPerView: 1.6,
      },
      600: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      890: {
        slidesPerView: 3,
      },
    },
   
  });
}









/*

// Плавная прокрутка

    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    
    autoplay: {
      enabled: true,
      delay: 1,
    },
    speed: 5000,
    loop: true,

  &__swiper {
        transition-timing-function: linear;
    }

*/

// import * as flsRange from "./modules/range.js";
// flsRange.isRange();

// import AirDatepicker from 'air-datepicker';
// // new AirDatepicker('#date');
// new AirDatepicker('#date', {
//     timepicker: true,
//     // timeFormat: 'hh:mm aa'
// });
