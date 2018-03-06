

import isMobile from "./isMobile";

// функция для parallax заднего фона
function parallaxBg() {
  const layersClass = "parallax-layer";
  const layers = document.getElementsByClassName(layersClass);
  const noParallax = document.getElementsByClassName("no-parallax")[0];

  // промис который будет проверять наличие dom-элементов для параллакса на странице
  // const parallaxPromise = new Promise (function(resolve, reject) {
  //   if (parallaxContainer.length) {
  //     resolve();
  //   } else {
  //     reject();
  //   }
  // });

  // функция при наличии главного параллакса
  // parallaxPromise.
  //   then(function() {
  //     window.addEventListener('mousemove', parallaxBg);
  //   })
  //   .catch(function() { return;
  //   });
  function noParallaxBg (element) {
    if (element) {
      element.classList.remove("no-parallax");
    }
  }

  const parallaxBg = (function (e) {
      let pageX = e.pageX,
        pageY = e.pageY,
        initialX = (window.innerWidth / 2) - pageX,
        initialY = (window.innerHeight / 2) - pageY;

      [].slice.call(layers).forEach((layer, i) => {
        let divider = (i + 1) / 70,
          positionX = initialX * divider,
          positionY = initialY * divider,
          layerStyle = layer.style,
          transformString = `translate3d(${positionX}px, ${positionY}px, 0)`;

        layerStyle.transform = transformString;
        layerStyle.msTransform = transformString;
        layerStyle.webkitTransform = transformString;
        layerStyle.oTransform = transformString;
        layerStyle.mozTransform = transformString;
      });
  });

  window.addEventListener("mousemove", parallaxBg);

  if (isMobile.any()) {
    const arrLayers = Array.from(layers);
    arrLayers.forEach(elem => elem.classList.remove(layersClass));
  } else {
    noParallaxBg(noParallax);
    window.addEventListener("mousemove", parallaxBg);
  }
}

export default parallaxBg;
