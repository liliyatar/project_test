'use strict';

// eslint-disable-next-line no-undef
$(document).ready(function() {
  // eslint-disable-next-line no-undef
  $('.menu__trigger').click(function() {
    // eslint-disable-next-line no-undef
    $('#menu').slideToggle(500);
  });

  // eslint-disable-next-line no-undef
  $(window).resize(function() {
    // eslint-disable-next-line no-undef
    if ($(window).width() > 800) {
      // eslint-disable-next-line no-undef
      $('#menu').removeAttr('style');
    }
  });
});

(function() {
  setTimeout(function() {
    document.querySelector('header')
      .style.filter = 'opacity(100%) grayscale(0%)';
    document.querySelector('header').style.transition = '2s';
  }, 1000);
})();
