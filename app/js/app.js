import someModule from "./modules/someModule";
import isJsAndTouchSupported from "./modules/isJsAndTouchSupported";
import menu from "./modules/menu";
import works from "./modules/works";


document.addEventListener("DOMContentLoaded", function() {
  (function() {
    someModule("start js code");

    // check js
    isJsAndTouchSupported();

    // for SVG-elements in IE
    svg4everybody();

    // toggleMenu
    menu();

    // grid and filter works
    works();






  })();
});
