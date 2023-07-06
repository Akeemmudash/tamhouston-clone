const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  fadeEffect: { crossFade: true },
  direction: "horizontal",
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,

  //

  // Navigation arrows

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
//
// if(swiperBlockIsblur){

// }
//Another carousel

const topCatSwiper = new Swiper(".top-cat-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});
