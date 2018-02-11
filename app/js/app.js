import someModule from "./modules/someModule";
import isJsAndTouchSupported from "./modules/isJsAndTouchSupported";
import menu from "./modules/menu";
import works from "./modules/works";
import parallaxScroll from "./modules/parallaxScroll";
import parallaxBg from "./modules/parallaxBg";
import moveFooter from './modules/move-footer';


document.addEventListener("DOMContentLoaded", function() {
  (function() {
    someModule("start js code");

    // check js
    isJsAndTouchSupported();

    // for SVG-elements in IE
    svg4everybody();

    if (loadScript('.header')) {
      menu();
      parallaxScroll();
      parallaxBg();
    }

    if (loadScript('.welcome')) {
      parallaxBg();
    }

    if (loadScript('.auth')) {
      parallaxBg();
    }

    if (loadScript('.feedback')) {
      window.onload = window.onresize = function () {
        moveFooter('.footer', '.feedback');
      };
      parallaxBg();
    }

    if (loadScript('.works')) {
      works(); // grid and filter works
    }


    function loadScript(elem) {
      return $(elem).length;
    }
  })();
});

//запустить какую-либо функцию, если element существует на странице
let forElement = function(element) {
  return new Promise(function(resolve, reject) {
    if(element) {
      resolve();
    } else {
      reject();
    }
  });
};

