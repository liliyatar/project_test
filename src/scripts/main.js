'use strict';

(function() {
  setTimeout(function() {
    document.querySelector('header')
      .style.filter = 'opacity(100%) grayscale(0%)';
    document.querySelector('header').style.transition = '2s';
  }, 1000);
})();
