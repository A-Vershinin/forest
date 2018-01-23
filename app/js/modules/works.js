function works () {

  const grid = document.getElementById('works');
  const gridItem = ".works__gallery-item";
  const filter = document.getElementById('filter');
  const filterItem = filter.children;
  const filterActive = "works__filter-item--active";
  let iso;

  function createGrid() {
    if (!grid) return;

    imagesLoaded(grid, function() {
      iso = new Isotope(grid, {
        itemSelector: gridItem,
        percentPosition: true,
        masonry: {
          columnWidth: gridItem,
          gutter: ".works__sizer"
        },
        animationOptions: {
          duration: 1500,
          easing: 'easeOutQuart',
          queue: false
        }
      });
    });

    function toggleClass(parentElem, childElems, className) {
      for (let i = 0; i < childElems.length; i++) {
        if (childElems[i] === parentElem) {
          childElems[i].classList.add(className);
        }
        else {
          childElems[i].classList.remove(className);
        }
      }
    }

    filter.addEventListener("click", evt => {
      evt.preventDefault();
      const filterParent = evt.target.parentNode;
      let sortValue = evt.target.getAttribute('data-filter');
      iso.arrange({ filter: sortValue });
      toggleClass(filterParent, filterItem, filterActive);
    });
  }
  createGrid();
}

export default works;
