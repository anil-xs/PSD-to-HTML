$(document).ready(function(){

  var swiper = new Swiper('.xs-client-logo', {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
    });

});