'use strict';
const fs = require("fs");
const path = require("path");

module.exports = function() {
  $.gulp.task('js:bundle', function() {
    // return $.gulp.src($.path.jsFoundation)
    //   .pipe($.gp.concat('bundle.js'))
    //   .pipe($.gulp.dest($.config.root + '/js'))
    //   .pipe($.gp.if(!$.dev, $.gp.uglifyes()))
    //   .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
    //   .pipe($.gp.if(!$.dev, $.gulp.dest($.config.root + '/js')))
    //   .pipe($.browserSync.stream());

    if ($.path.app.length === 0) {
      fs.mkdirSync($.config.root);
      fs.mkdirSync(path.join($.config.root, "/js"));

      let file = path.join($.config.root, "/js");
      file = !$.dev
        ? path.join(file, "bundle.min.js")
        : path.join(file, "bundle.js");

      fs.writeFile(file, "console.log('Hello Node.js')", err => {
        if (err) throw err;
        cb();
      });
    } else {
      return $.gulp.src($.path.jsFoundation)
        .pipe($.gp.concat("bundle.js"))
        .pipe($.gulp.dest($.config.root + "/js"))
        .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
        .pipe($.gp.if(!$.dev, $.gp.uglifyes()))
        .pipe($.gulp.dest($.config.root + "/js"));
    }
  })
};



