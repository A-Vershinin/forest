'use strict';

module.exports = function() {
  $.gulp.task('js:lint', function() {
    return $.gulp.src($.path.app)
      // .pipe($.gp.eslint({
      //   configFile: '.eslintrc'
      // }))
      // .pipe($.gp.eslint.format())
      // .pipe($.gp.eslint.failAfterError())
      // .on('error', $.gp.notify.onError({
      //   title: 'JavaScript syntax error',
      //   message: "Error: <%= error.message %",
      // }));

    let arrFilesLint = fs.readdirSync($.path.app.src);
    arrFilesLint = arrFilesLint.map(file => $.path.app.src + file);

    return $.gulp.src(arrFilesLint)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format($.gp.friendlyFormatter))
      .pipe($.gp.eslint.failAfterError())
      .on("error", $.gp.notify.onError({
          title: "ESLint error",
          message: "Error: <%= error.message %",
    }));

      // .pipe(notify((file) => {
      //   if (!file.eslint.errorCount) {
      //     return false;
      //   }
      //   const messages = file.eslint.messages.reduce((previous, current) => {
      //     const {line, column, message, ruleId} = current;
      //     return (
      //       previous +
      //       line + ':' + column + '  ' +
      //       message + ' ' +
      //       ruleId + '\n'
      //     );
      //   }, '');
      //   return {
      //     title: 'ESLintError',
      //     message: file.relative + '\n\n' + messages
      //   };
      // }))
  })
};
