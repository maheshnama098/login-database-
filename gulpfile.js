const gulp = require('gulp'),
      concat = require('gulp-concat'),
      htmlmin = require('gulp-htmlmin'),
      sass = require('gulp-ruby-sass');

gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html']);