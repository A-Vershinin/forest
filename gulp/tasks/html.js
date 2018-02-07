'use strict';

module.exports = function() {
  $.gulp.task('html', function () {
    return $.gulp.src(['./app/templates/pages/*.pug'])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'Pug',
            message: err.message
          }
        })
      }))
      .pipe($.gp.pug({
        // locals: JSON.parse($.fs.readFileSync($.config.pageContent, "utf-8")),
        outputStyle: 'expand',
        pretty: true
      }))
      .pipe($.gp.if(!$.dev, $.gp.htmlmin({collapseWhitespace: true})))
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  });
}
