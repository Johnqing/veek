var fs = require('fs');
// 引入 gulp
var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass');

var sassFiles = './assets/sass/**/*.scss';
// sass => css
gulp.task('sass2css', function () {
    gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
});
// 开发
gulp.task('dev', function(){
    gulp.run('sass2css');
    gulp.watch(sassFiles, ['sass2css']);
});