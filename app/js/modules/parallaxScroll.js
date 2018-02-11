'use strict';
import isMobile from './isMobile';

// функция для parallax при скроле
function parallaxScroll () {

  const bg = document.querySelector('.parallax-bg');
  const user = document.querySelector('.parallax-user');
  let paralaxArr = [bg, user];

  // промис который будет проверять наличие dom-элементов для параллакса на странице
  const parallaxPromise = new Promise (function(resolve, reject) {
    if (paralaxArr.length) {
      resolve();
    } else {
      reject();
    }
  });

  // функция при наличии главного параллакса
  parallaxPromise.
    then(function() {
      window.addEventListener('scroll', () => {
        const wScroll = window.pageYOffset;
        parallaxScroll.init(wScroll);
      });
    })
    .catch(function() {return;
    });

  const parallaxScroll = (function () {
    return {
      move: function (block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%',
          style = block.style;
          style.marginTop = strafe;
          // console.log(style);
      },
      init: function (wScroll) {
        this.move(bg, -wScroll, 35);
        this.move(user, wScroll, 45);
      }
    }
  })();

  if(isMobile.any()) {
    paralaxArr.forEach((elem, index) => {
      elem[index].removeChild(parallaxScroll);
    });
    // noParallax.className = "parallax bg_forest-bottom";
    // wrapper.insertBefore(noParallax, document.getElementsByClassName("footer")[0]);

  } else {
    window.addEventListener('scroll', () => {
      const wScroll = window.pageYOffset;
      parallaxScroll.init(wScroll);
    });
  }
}

export default parallaxScroll;
