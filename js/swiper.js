const swiper = new Swiper(".swiper", {
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

  // navigation: {
  //      nextEl: ".swiper-button-next",
  //      prevEl: ".swiper-button-prev",
  //  },

  // Navigation arrows

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
//
// if(swiperBlockIsblur){

// }
