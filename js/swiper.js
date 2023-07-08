const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  fadeEffect: { crossFade: true },
  direction: "horizontal",
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  grids: {
    rows: 1,
    columns: 2,
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
  rewind: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    978: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".top-cat-next-btn",
    prevEl: ".top-cat-prev-btn",
  },
});

const featuredSwiper = new Swiper(".ftd-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  keyboard: {
    enabled: true,
  },
  centeredSlides: true,

  navigation: {
    nextEl: ".ftd-next-btn",
    prevEl: " .ftd-prev-btn",
  },
});

const SpecialOffersSwiper = new Swiper(".so-swiper", {
  spaceBetween: 30,
  grid: {
    rows: 2,
    fill: "row",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },
  slidesPerView: 2,
  navigation: {
    nextEl: ".so-next-btn",
    prevEl: " .so-prev-btn",
  },
});
