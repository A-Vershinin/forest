'use strict';

module.exports = function() {
  $.gulp.task('favicons', function() {
    return $.gulp.src('./app/favicons/**/*.*', { since: $.gulp.lastRun('favicons') })
      .pipe($.gulp.dest($.config.root + '/favicons'));
  });
};
