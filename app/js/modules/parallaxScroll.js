

import isMobile from "./isMobile";

// функция для parallax при скроле
function parallaxScroll () {
  const bg = document.querySelector(".parallax-bg");
  const user = document.querySelector(".parallax-user");
  const paralaxArr = [bg, user];

  // промис который будет проверять наличие dom-элементов для параллакса на странице
  const parallaxPromise = new Promise(((resolve, reject) => {
    if (paralaxArr.length) {
      resolve();
    } else {
      reject();
    }
  }));

  // функция при наличии главного параллакса
  parallaxPromise
    .then(() => {
      window.addEventListener("scroll", () => {
        const wScroll = window.pageYOffset;
        parallaxScroll.init(wScroll);
      });
    })
    .catch(() => {
    });

  const parallaxScroll = (function () {
    return {
      move (block, windowScroll, strafeAmount) {
        let strafe = `${windowScroll / -strafeAmount}%`,
          style = block.style;
          style.marginTop = strafe;
      },
      unmove (block) {
        block.removeAttribute("style");
      },
      init (wScroll) {
        this.move(bg, -wScroll, 25);
        this.move(user, wScroll, 55);
      },
      destroy () {
        this.unmove(bg);
        this.unmove(user);
      },
    };
  }());

  if (isMobile.any()) {
    parallaxPromise
      .then(() => {
        window.addEventListener("scroll", () => {
          parallaxScroll.destroy();
        });
      })
      .catch(() => {
    });
    // noParallax.className = "parallax bg_forest-bottom";
    // wrapper.insertBefore(noParallax, document.getElementsByClassName("footer")[0]);
  } else {
    window.addEventListener("scroll", () => {
      const wScroll = window.pageYOffset;
      parallaxScroll.init(wScroll);
    });
  }
}

export default parallaxScroll;
