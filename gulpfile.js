const gulp = require('gulp'),
      concat = require('gulp-concat'),
      htmlmin = require('gulp-htmlmin'),
      sass = require('gulp-ruby-sass'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function(){
    sass('./src/sass/*.scss', {
            sourcemap: true, 
            style: 'compressed'
        })
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['html', 'styles']);