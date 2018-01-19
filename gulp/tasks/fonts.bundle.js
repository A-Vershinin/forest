'use strict';

module.exports = function() {
  $.gulp.task('fonts:bundle', function() {
    return $.gulp.src($.path.fontsFoundation)
      .pipe($.gulp.dest($.config.root + '/fonts'))
      .pipe($.browserSync.stream());
  });
};
