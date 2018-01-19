'use strict';

module.exports = function() {
  $.gulp.task('styles', function() {
    return $.gulp.src([
      './app/styles/*.scss',
      './app/styles/basic/*.scss',
      './app/styles/blocks/*.scss',
      './app/styles/layout/*.scss'
    ])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(err) {
          return {
            title: "Styles",
            message: err.message,
          };
        }),
      }))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
      .pipe($.gp.sass({
        errLogToConsole: true,
        "sourcemap=none": true,
        indentType: 'tab',
        noCache: true,
        outputStyle: 'expanded'
      }))
      // .pipe($.gp.cssunit({
      //   type :'px-to-rem',
      // 	rootSize : 16
      // }))
      .pipe($.gp.if(!$.dev, $.gp.autoprefixer({
        browsers: $.config.autoprefixerConfig,
        cascade: true
      })))
      .pipe($.gp.csscomb($.config.cssCombConfig))
      .pipe($.gp.postcss([
        $.mqpacker({
          sort: true
        })
      ]))
      .pipe($.gp.concat("app.css"))
      .pipe($.gulp.dest($.config.root + "/css"))
      .pipe($.gp.if(!$.dev, $.gp.csso()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
      .pipe($.gulp.dest($.config.root + "/css"))
      .pipe($.browserSync.stream());
  });
};
