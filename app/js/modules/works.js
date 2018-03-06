
function works () {
  const placeholder = $(".works__filter .placeholder a");
  let placeholderText = placeholder.text();
  const placeholderValue = "Выбрать";
  const tabFilter = $(".works__filter");
  const itemFilter = $(".filters__item");
  const tabOpen = "is-open";
  const gallaryList = $(".gallery__list");
  const failMessage = $(".gallery__fail-message");
  const selectClass = "selected";
  const gallaryMixActive = "gallery__list--no-mix";

  // remove on load gallary-list class no-mix-active
  gallaryList.removeClass(gallaryMixActive);

  itemFilter.on("click", (event) => {
    event.preventDefault();
    // detect which tab filter item was selected
    const selectedFilter = $(event.target).data("type");

    // check if user has clicked the placeholder item
    if ($(event.target).is(placeholder)) {
      (placeholderValue == placeholder.text()) ? placeholder.text(placeholderText) : placeholder.text(placeholderValue);
      tabFilter.toggleClass(tabOpen);

      // check if user has clicked a filter already selected
    } else if (placeholder.data("type") == selectedFilter) {
      placeholder.text($(event.target).text());
      tabFilter.removeClass(tabOpen);
    } else {
      // close the dropdown and change placeholder text/data-type value
      tabFilter.removeClass(tabOpen);
      placeholder.text($(event.target).text()).data("type", selectedFilter);
      placeholderText = $(event.target).text();

      // add class selected to the selected filter item, don't change classes
      $(".filters__item .selected").removeClass(selectClass);
      $(event.target).addClass(selectClass);
    }
  });

  function onTabClose () {
    if (tabFilter.hasClass(tabOpen)) {
      tabFilter.removeClass(tabOpen);
    }
  }

  function onOutElementClose (e) {
    if (!itemFilter.is(e.target)
      && itemFilter.has(e.target).length === 0) {
      tabFilter.removeClass(tabOpen);
    }
  }

  // fix tab on top when scroll
  // const mainContent = $(".works__outer");
  // const contentFixed = "is-fixed";
  function fixGallery () {
    const offsetTop = mainContent.offset().top;
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop >= offsetTop);
    console.log(scrollTop);
    console.log(offsetTop);
    (scrollTop >= offsetTop) ? mainContent.addClass(contentFixed) : mainContent.removeClass(contentFixed);
  }

  function onScrollFixDropdown () {
    (!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
  }

  // remove tab open class on resize
  $(window).on("resize", () => {
    onTabClose();
  });

  // remove tab open when click out from dropdown
  $(document).mouseup((e) => {
    onOutElementClose(e);
  });

  // fix lateral filter and gallery on scrolling
  // $(window).on("scroll", function () {
  //   onScrollFixDropdown();
  // });

  /** ***************************************************
   MixItUp - Define a single object literal
   to contain all filter custom functionality
   **************************************************** */
  const buttonFilter = {
    // Declare any variables we will need as properties of the object
    $filters: null,
    groups: [],
    outputArray: [],
    outputString: "",
    // The "init" method will run on document ready and cache any jQuery objects we will need.
    init () {
      const self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
      const gallaryList = $(".gallery__list");
      const mainContent = $(".works__outer");
      const filters = ".filters";
      self.$filters = mainContent;
      self.$container = gallaryList;
      self.$filters.find(filters).each(function () {
        const $this = $(this);
        self.groups.push({
          $inputs: $this.find(".filter"),
          active: "",
          tracker: false,
        });
      });
      self.bindHandlers();
    },
    // The "bindHandlers" method will listen for whenever a button is clicked.
    bindHandlers () {
      const self = this;
      self.$filters.on("click", "a", (e) => {
        self.parseFilters();
      });
    },
    parseFilters () {
      const self = this;
      // loop through each filter group and grap the active filter from each one.
      for (let i = 0, group; group = self.groups[i]; i++) {
        group.active = [];
        group.$inputs.each(function () {
          const $this = $(this);
          if ($this.is("select")) {
            group.active.push($this.val());
          } else if ($this.find(".selected").length > 0) {
            group.active.push($this.attr("data-filter"));
          }
        });
      }
      self.concatenate();
    },
    concatenate () {
      const self = this;
      self.outputString = ""; // Reset output string
      for (let i = 0, group; group = self.groups[i]; i++) {
        self.outputString += group.active;
      }
      // If the output string is empty, show all rather than none:
      !self.outputString.length && (self.outputString = "all");
      // Send the output string to MixItUp via the 'filter' method:
      if (self.$container.mixItUp("isLoaded")) {
        self.$container.mixItUp("filter", self.outputString);
      }
    },
  };

  /** **********************************
   MitItUp filter settings
   More details:
   https://mixitup.kunkalabs.com/
   or:
   http://codepen.io/patrickkunka/
   ************************************ */
  buttonFilter.init();
  gallaryList.mixItUp({
    controls: {
      enable: false,
    },
    selectors: {
      target: ".gallery__item",
    },
    animation: {
      enable: true,
      queueLimit: 2,
      queue: true,
    },
    callbacks: {
      onMixStart () {
        failMessage.fadeOut(200);
      },
      onMixFail () {
        failMessage.fadeIn(200);
      },
    },
  });
}

export default works;
