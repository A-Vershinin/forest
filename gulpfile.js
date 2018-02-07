"use strict";
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

global.$ = {
  dev: isDevelopment,
  package: require("./package.json"),
  config: require("./gulp/config"),
  cssCombConfig: require("./csscomb.json"),
  path: {
    task: require("./gulp/paths/tasks.js"),
    jsFoundation: require("./gulp/paths/js.bundle.js"),
    cssFoundation: require("./gulp/paths/css.bundle.js"),
    fontsFoundation: require("./gulp/paths/fonts.bundle.js"),
    app: require("./gulp/paths/app.js")
  },
  gulp: require("gulp"),
  del: require("del"),
  merge: require("merge-stream"),
  browserify : require("browserify"),
  source : require("vinyl-source-stream"),
  buffer : require("vinyl-buffer"),
  babel : require("babelify"),
  fs : require("fs"),
  sortCss: require("sort-css-media-queries"),
  postReporter: require("postcss-reporter"),
  mqpacker: require("css-mqpacker"),
  browserSync: require("browser-sync").create(),
  gp: require("gulp-load-plugins")({
    rename: {
      "gulp-html-minifier": "htmlmin"
    }
  })
};
$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});
$.gulp.task("dev", $.gulp.series(
  "clean",
  $.gulp.parallel(
    "html",
    "styles",
    "styles:bundle",
    "js:common",
    "js:bundle",
    "sprite:png",
    "sprite:svg",
    "images",
    "imagesSVG",
    "fonts",
    // "fonts:bundle",
    "favicons"
    // 'styles:lint'
    // 'js:lint'
  ),
  $.gulp.parallel(
    "watch",
    "serve"
  )
));

$.gulp.task("default", $.gulp.series(
  "dev",
  $.gulp.parallel(
    "watch",
    "serve"
  )
));
