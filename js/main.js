(function () {
  'use strict';
  $(function () {
    // iPad and iPod detection
    var isiPad = function () {
      return navigator.platform.indexOf('iPad') != -1;
    };

    var isiPhone = function () {
      return (
        navigator.platform.indexOf('iPhone') != -1 ||
        navigator.platform.indexOf('iPod') != -1
      );
    };
    var dec_height = function () {
      var content = $('#page').height(),
        win_h = $(window).height(),
        main_h = $('#main').innerHeight(),
        need_h = win_h - content;
      if (content < win_h) {
        $('#main').css('min-height', main_h + need_h);
      }
      $(window).resize(function () {
        if (content < win_h) {
          $('#main').css('min-height', main_h + need_h);
        }
      });
    };
    // ellipsis
    var ellipsis = function () {
      $('#main .ellipsis-1').ellipsis({
        row: 1,
      });
      $('#main .ellipsis-2').ellipsis({
        row: 2,
      });
      $('#main .ellipsis-3').ellipsis({
        row: 3,
      });
      $('#main .ellipsis-4').ellipsis({
        row: 4,
      });
    };
    // Burger Menu
    var burgerMenu = function () {
      $('.menu').click(function () {
        $('.offcanvas-collapse').toggleClass('active');
        if ($('.offcanvas-collapse').hasClass('active')) {
          $('.burger').addClass('active');
        } else {
          $('.burger').removeClass('active');
        }
        $('body').toggleClass('no-scroll');
      });
    };

    var windowScroll = function () {
      $(window).scroll(function () {
        var header = $('#header'),
          scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $(header).addClass('fixed');
        } else {
          $(header).removeClass('fixed');
        }
      });
    };

    new WOW().init();

    var goToTop = function () {
      $('.js-gotop').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $('html').offset().top,
          },
          500,
          'easeInOutExpo'
        );

        return false;
      });
    };
    ellipsis();
    burgerMenu();
    goToTop();
  });
})();
