// Preloader jQuery

function preloader () {
  let percents = 0,
    preloader = $("#preloader"),
    percrnts = $("#percrnts");

  const imgPath = $("*").map((i, el) => {
    let bg = $(el).css("background-image"),
      img = $(el).is("img"),
      path = "";

    if (bg != "none") {
      path = bg.replace("url(\"", "").replace("\")", "");
    }

    if (img) {
      path = $(el).attr("src");
    }

    if (path) {
      return path;
    }
  });

  const setPercents = function (total, current) {
    const persents = Math.ceil(current / total * 100);

    percrnts.text(persents);

    if (persents >= 100) {
      preloader.fadeOut();
    }
  };

  const loadImages = function (images) {
    if (!images.length) {
      preloader.fadeOut();
    }

    images.forEach((img, i, images) => {
      const fakeImage = $("<img>", {
        attr: {
          src: img
        }
      });

      fakeImage.on("load error", () => {
        percents++;
        setPercents(images.length, percents);
      });
    });
  };

  const imgs = imgPath.toArray();
  loadImages(imgs);
}

export default preloader;
