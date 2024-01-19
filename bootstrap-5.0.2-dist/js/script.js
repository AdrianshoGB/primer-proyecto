document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: false, // Deshabilitar el bucle infinito
      slidesPerGroup: 4, // Número de slides a desplazar en cada transición
      effect: 'rotate',
      rotateEffect: {
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  });