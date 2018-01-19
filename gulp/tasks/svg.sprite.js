'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./app/img/sprites/svg/*.svg')
      .pipe($.gp.svgmin({js2svg: {pretty: true}}))
      .pipe($.gp.if(!$.dev, $.gp.svgmin({js2svg: {pretty: true}})))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
          $('[class]').removeAttr('class');
          $('defs').remove();
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../svg-icon-sprite.svg"
          }
        }
      }))
      .pipe($.gp.rename("svg-icon-sprite.svg"))
      .pipe($.gulp.dest($.config.root + '/img'))
  });
};
