'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src('./app/img/sprites/png/*.png').pipe($.gp.spritesmith({
      imgName: 'icons-sprite.png',
      cssName: '_icons-sprite.scss',
      // cssFormat: "scss",
      algorithm: 'left-right',
      padding: 60
    }));

    spriteData.css.pipe($.gulp.dest('app/styles/basic/'));
    // spriteData.img.pipe($.gulp.dest('app/img/'));
    spriteData.img.pipe($.gulp.dest($.config.root + '/img'));
    return spriteData;
  });
};
