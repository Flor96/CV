(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  // Menu responsive
  var icoMenu = $('.menu-ico');
  var menuResponsive = $('#nav-responsive');

  menuResponsive.hide();
  icoMenu.click(function () {
    menuResponsive.slideToggle('fast');
  })

  $('.js-scroll-trigger').click(function() {
    menuResponsive.hide();
  });

})(jQuery); // End of use strict