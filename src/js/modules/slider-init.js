import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 1
        },
    }
});
