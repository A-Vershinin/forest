'use strict';

module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src('./app/fonts/**/*.{woff,woff2}', { since: $.gulp.lastRun('fonts') })
      .pipe($.gulp.dest($.config.root + '/fonts'));
  });
};
