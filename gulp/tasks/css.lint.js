"use strict";

module.exports = function() {
  const reporterr = require('postcss-reporter');

  $.gulp.task("styles:lint", function() {
    return $.gulp.src("./app/styles/**/*.s+(a|c)ss")
      // .pipe($.gp.stylelint({
      //   failAfterError: false,
      //   reporters: [{
      //     formatter: "string",
      //     console: true
      //   }]
      // }))
      // .pipe($.gp.plumber({
      //     errorHandler: $.gp.notify.onError(function(err) {
      //       return {
      //         title: "Styleslint",
      //         message: err.message,
      //       };
      //     }),
      //   }));
      // .on("error", $.gp.notify.onError({
      //       title: "Styleslint error",
      //       message: "Error: <%= error.message %",
      // }));

      // .pipe($.gp.postcss([
      //   $.gp.stylelint({
      //     failAfterError: true,
      //     reporters: [{
      //       formatter: "string",
      //       console: true
      //     }]
      //   }),
      //   $.postReporter({ clearMessages: true})
      // ]))

    // $.postReporter({ clearMessages: true})
    //     .on("error", $.gp.notify.onError({
    //       title: "Styleslint error",
    //       message: "Error: <%= error.message %",
    //     }));

    // .pipe($.gp.postcss([
    //   $.gp.stylelint({ /* options */
    //     failAfterError: true,
    //     reporters: [{
    //       formatter: "string",
    //       console: true
    //     }]
    //   }),
    //   reporterr({ clearMessages: true })
    // ]));

      .pipe($.gp.stylelint({
        reporters: [
          {
            failAfterError: true,
            formatter: 'string',
            console: true
          }
        ]
      }))
      .on('error', $.gp.notify.onError({
        message: 'There is a CSS error, please look the console for details'
      }));
      // .pipe($.gp.plumber({
      //     errorHandler: $.gp.notify.onError(function(err) {
      //       return {
      //         title: "Styleslint",
      //         message: err.message,
      //       };
      //     }),
      //   }));
  })
};

