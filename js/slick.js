$(document).ready(function () {
  $('.slick').slick({
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }, ]
  })
})