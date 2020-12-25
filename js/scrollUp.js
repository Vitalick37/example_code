  // скролл

    'use strict';

  let scrollElem = document.querySelector('.pageup');

  window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {

          scrollElem.style.display = "flex";
      } else {
          scrollElem.style.display = "none";
      }
  })

  let timeOut;

  function goUp() {
      let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if (top > 0) {
          window.scrollBy(0, -100);
          timeOut = setTimeout('goUp()', 20);
      } else clearTimeout(timeOut);
  }

  scrollElem.addEventListener('click', goUp);

