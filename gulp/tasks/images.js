'use strict';

module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src('./app/img/**/*.{png,jpg,gif}', { since: $.gulp.lastRun('images') })
      .pipe($.gp.if(!$.dev,  $.gp.imagemin({
        optimizationLevel: 3,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        // use: [pngquant()],
        interlaced: true
      })))
      // .pipe($.gp.if(!$.dev, $.gp.tinypng(YOUR_API_KEY)))
      .pipe($.gulp.dest($.config.root + '/img'))
      .pipe($.gp.webp({quality: 75}))
      .pipe($.gulp.dest($.config.root + '/img'));
  });

  $.gulp.task('imagesSVG', function() {
    return $.gulp.src('./app/img/svg-pictures/*.*', { since: $.gulp.lastRun('imagesSVG') })
      .pipe($.gp.if(!$.dev, $.gp.svgmin({
        js2svg: {
          pretty: true
        }
      })))
      .pipe($.gp.cheerio({
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../svg-image-sprite.svg"
          }
        }
      }))
      .pipe($.gp.rename("svg-image-sprite.svg"))
      .pipe($.gulp.dest($.config.root + '/img'))
  });
};

// $.gulp.task('images:dev', function() {
//   // return $.gulp.src('./app/img/**/*.*', { since: $.gulp.lastRun('images:dev') })
//   return $.gulp.src([
//     './app/img/*.*',
//     './app/img/bg/*.*',
//     './app/img/content/*.*',
//     './app/img/decor/*.*'
//   ], { since: $.gulp.lastRun('images:dev') })
//     .pipe($.gulp.dest($.config.root + '/img'));
// });
