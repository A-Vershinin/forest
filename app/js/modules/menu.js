function menu () {
  const hamburger = document.querySelector(".header__toggle");
  const hamburgerActive = "is-active";
  // const wrapperMenu = document.querySelector(".wrapper__menu");
  const wrapperMenu = document.querySelector(".header__menu");
  // const wrapperMenuActive = "wrapper__menu--show";
  const wrapperMenuActive = "header__menu--show";

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      const toggle = this.firstElementChild;
      toggle.classList.toggle(hamburgerActive);
      wrapperMenu.classList.toggle(wrapperMenuActive);

      // if (btn.classList.contains(hamburgerActive)) {
      //   console.log("on")
      // }
    });
    if (!hamburger.firstElementChild.classList.contains(hamburgerActive)) {
      // console.log("on")
    }
  }
}

export default menu;
