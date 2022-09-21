// Custom Scripts
// Custom scripts
// Initialize Swiper
  var reviewsSwiper = new Swiper(".reviews__slider-container", {
    cssMode: true,
    // centeredSlides,
    // slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
