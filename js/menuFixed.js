  // fixed menu*******************************************************
  $(document).ready(function () {

    let navPos, winPos, navHeight;

    function refreshVar() {
      navPos = $('.header').offset().top;
      navHeight = $('.header').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar);


    $(window).scroll(function () {
      winPos = $(window).scrollTop();


      if (winPos > navPos) {
        $('.header').addClass('fixed shadow');

      } else {
        $('.header').removeClass('fixed shadow');

      }
    });
  });