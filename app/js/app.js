import someModule from "./modules/someModule";
import isJsAndTouchSupported from "./modules/isJsAndTouchSupported";
import menu from "./modules/menu";
import works from "./modules/works";
import parallaxScroll from "./modules/parallaxScroll";
import parallaxBg from "./modules/parallaxBg";
import moveFooter from "./modules/move-footer";
import googleMap from "./modules/google.map";
import arrowScroll from "./modules/arrowScroll";
import preloader from "./modules/preloader";


document.addEventListener("DOMContentLoaded", () => {
  (function() {
    someModule("start js code");

    // check js
    isJsAndTouchSupported();

    // for SVG-elements in IE
    svg4everybody();

    preloader();

    if (loadScript(".header")) {
      menu();
      parallaxScroll();
      parallaxBg();
      arrowScroll();
    }

    if (loadScript(".welcome")) {
      parallaxBg();
    }

    if (loadScript(".auth")) {
      parallaxBg();
    }

    if (loadScript(".feedback")) {
      window.onload = window.onresize = function () {
        moveFooter(".footer", ".feedback");
      };
    }

    if (loadScript(".works")) {
      works(); // grid and filter works
    }

    if (loadScript(".adress")) {
      googleMap();
    }


    function loadScript(elem) {
      return $(elem).length;
    }
  }());
});

// запустить какую-либо функцию, если element существует на странице
const forElement = function(element) {
  return new Promise(((resolve, reject) => {
    if (element) {
      resolve();
    } else {
      reject();
    }
  }));
};

