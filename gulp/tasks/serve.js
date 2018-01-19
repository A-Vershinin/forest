'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      // browser: "google-chrome", //для Ubuntu
      browser: "chrome",
      notify: false,
      open: true,
      server: $.config.root,
      ui: false,
      port: 3000,
      tunnel: false,
      logPrefix: "front-end"
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css', '!**/*.html'], $.browserSync.reload);
  });
};
