"use strict";

function isJsAndTouchSupported() {
  /*! no-touch & no-js | https://gist.github.com/mhulse/4704893 */

  /* CSS usage example:
		.no-touch .foo { ... }
		.touch .baz { ... }
		.no-js .bar { ... }
		.js .bing { ... }
	*/
  function checkSupport (window, document, navigator) {
    (("ontouchstart" in window) || (window.DocumentTouch && document instanceof DocumentTouch) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) && (document.documentElement.className = document.documentElement.className.replace(
      /\bno-touch\b/, "touch"));
    document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,
      "js");
  }
  function run () {
    checkSupport(window, document, navigator);
  }
  run();
}

export default isJsAndTouchSupported;
