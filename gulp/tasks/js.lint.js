"use strict";

module.exports = function () {
  $.gulp.task("js:lint", function () {
    // Вариант 1. Линтим один файл по пути $.path.app, ошибки в консоле без форматирования

    // return $.gulp.src($.path.app)
    // .pipe($.gp.eslint({
    //   configFile: '.eslintrc'
    // }))
    // .pipe($.gp.eslint.format())
    // .pipe($.gp.eslint.failAfterError())
    // .on('error', $.gp.notify.onError({
    //   title: 'JavaScript syntax error',
    //   message: "Error: <%= error.message %",
    // }));

    // Вариант 2. Линтим все файлы из массива по очереди, ошибки в консоле форматируем с помощью
    // пакета friendlyFormatter

    return $.gulp.src($.path.app.modules)
      .pipe($.gp.eslint({
        configFile: '.eslintrc'
      }))
      .pipe($.gp.eslint.format($.gp.friendlyFormatter))
      .pipe($.gp.eslint.failAfterError()) // если были ошибки таск падает с ошибкой
      .on("error", $.gp.notify.onError({
          title: "ESLint error",
          message: "Error: <%= error.message %",
        })
      );

      // дополнительно этот таск с пламбером или без
      // .pipe($.gp.plumber({
      //     errorHandler: $.gp.notify.onError(function(err) {
      //       return {
      //         title: "ESLint error",
      //         message: err.message,
      //       };
      //     }),
      //   }));

    // Вариант 3. Линтим все файлы из массива и выводим сообщение об ошибке в окне и в консоль +
    // + короткий цветной вид ошибок в консоле. Показывает сколько errors. Можно добавить
    // friendlyFormatter и чтобы таск падал если были ошибки

    // return $.gulp.src($.path.app.modules)
    //   .pipe($.gp.plumber())
    //   .pipe($.gp.eslint({
    //     configFile: ".eslintrc"
    //   }))
    //   // .pipe($.gp.eslint.format($.gp.friendlyFormatter))
    //   // .pipe($.gp.eslint.failAfterError()) // если были ошибки таск падает с ошибкой, выводил errors
    //   .pipe($.gp.notify((file) => {
    //     if (!file.eslint.errorCount) {
    //       return false;
    //     }
    //     const messages = file.eslint.messages.reduce((previous, current) => {
    //       const {line, severity, column, message, ruleId} = current;
    //       // console.log(current);
    //       return (
    //         " " + previous +
    //         line + ":" + column + "  " + severity + " " +
    //         message + " " +
    //         ruleId + "\n"
    //       );
    //     }, "");
    //     return {
    //       title: "ESLint error",
    //       message: file.relative + "\n\n" + messages
    //     };
    //   }));
  });
};
