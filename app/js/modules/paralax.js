function paralax () {
  const parallaxContainer = document.getElementsByClassName('wrapper')[0];
  const layers = parallaxContainer.getElementsByClassName('parallax-layer');

  window.addEventListener('mousemove', function(e) {
    let pageX = e.pageX,
      pageY = e.pageY,
      initialX = (window.innerWidth / 2) - pageX,
      initialY = (window.innerHeight / 2) - pageY;

    [].slice.call(layers).forEach(function(layer, i) {
      let divider = (i + 1) / 70,
        positionX = initialX * divider,
        positionY = initialY * divider,
        layerStyle = layer.style,
        transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';

      layerStyle.transform = transformString;
      layerStyle.msTransform = transformString;
      layerStyle.webkitTransform = transformString;
      layerStyle.oTransform = transformString;
      layerStyle.mozTransform = transformString;
    });
  });

  const parallaxScroll = (function () {
    const bg = document.querySelector('.parallax-bg');
    const user = document.querySelector('.parallax-user');

    return {
      move: function (block, windowScroll, strafeAmount) {
        const strafe = windowScroll / -strafeAmount + '%',
          style = block.style;

        style.marginTop = strafe;
      },
      init: function (wScroll) {
        this.move(bg, -wScroll, 35);
        this.move(user, wScroll, 45);
      }
    }
  })();

  window.addEventListener('scroll', () => {
    const wScroll = window.pageYOffset;
    parallaxScroll.init(wScroll);
  });
}

export default paralax;
