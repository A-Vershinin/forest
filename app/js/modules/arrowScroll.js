function arrowScroll() {
  const arrowDown = $(".js-arrow-down");
  const arrowUp = $(".js-arrow-up");
  const body = $("body, html");
  const headerHeight = $(".header").height();

  if (arrowDown) {
    // функция при нажатии
    arrowDown.click(() => {
      // анимация скролла
      body.animate({ scrollTop: headerHeight }, 1500);
    });
  }
  if (arrowUp) {
    // функция при нажатии
    arrowUp.click(() => {
      // анимация скролла
      body.animate({ scrollTop: 0 }, 1500);
    });
  }
}


export default arrowScroll;
