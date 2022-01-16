window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.about__swiper', {
    // breakpoints: {
    //   200: {
    //     slidesPerView: 1,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 34,
    //     slidesPerGroup: 4,
    //   },
    //   1510: {
    //     slidesPerView: 6,
    //     spaceBetween: 50,
    //     slidesPerGroup: 6,
    //   },
    // },
    // loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    keyboard: {
      enabled: true,
    },
    a11y: {
      enabled: false,
    },
  });
});
