const gulp = require('gulp'),
      concat = require('gulp-concat'),
      gls = require('gulp-live-server'),
      htmlmin = require('gulp-htmlmin'),
      imagemin = require('gulp-imagemin'),
      sass = require('gulp-ruby-sass'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('scripts', function(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('serve', function(){
    var server = gls.static('dist', 3000);
    server.start();

    gulp.watch(['dist/**/*.css', 'dist/**/*.html'], function(file){
        server.notify.apply(server, [file]);
    });
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

gulp.task('default', ['html', 'images', 'scripts', 'styles', 'serve']);