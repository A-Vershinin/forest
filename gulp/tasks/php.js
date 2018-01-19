'use strict';

module.exports = function() {
  $.gulp.task('php', function() {
    return $.gulp.src('./app/php/**/*.*', { since: $.gulp.lastRun('php') })
      .pipe($.gulp.dest($.config.root + '/php'))
  })
};
