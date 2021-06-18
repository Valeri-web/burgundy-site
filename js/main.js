$(function () {
  $('.photos__slider').slick({

    prevArrow: '<button type="button" class="slick-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right.svg" alt=""></button>',
    centerMode: true,
    variableWidth: true,
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 941,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 441,
        settings: {
          arrows:false,
          dots:true,
          autoplay:3000

        }
      }
    ]
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  new WOW().init();

});