'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch([
      './app/templates/*.pug',
      './app/templates/basic/*.pug',
      './app/templates/blocks/*.pug',
      './app/templates/layout/*.pug',
      './app/templates/pages/*.pug'
    ], $.gulp.series('html'));
    $.gulp.watch([
      './app/styles/*.scss',
      './app/styles/basic/*.scss',
      './app/styles/blocks/*.scss',
      './app/styles/layout/*.scss',
      './app/styles/sprites/*.scss'
      ], $.gulp.series('styles'));
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:common'));
    $.gulp.watch('./app/img/**/*.*', $.gulp.series('images'));
    $.gulp.watch('./app/fonts/**/*.*', $.gulp.series('fonts'));
    $.gulp.watch('./app/img/sprites/png/*.*', $.gulp.series('sprite:png'));
    $.gulp.watch('./app/img/sprites/svg/*.*', $.gulp.series('sprite:svg'));
    $.gulp.watch('./app/img/svg-pictures/**/*.*', $.gulp.series('imagesSVG'));
  });
};

// gulp.task('watch', function() {
//   gulp.watch('sass/**/*.scss', gulp.series('style'));
// });
// Не используйте в вотчере такую конструкрую, пишите прямо все папки где искать, к примеру вот так
// gulp.watch(['sass/*.scss', 'sass/block/*.scss', 'sass/page/*.scss'], gulp.series('style'));
