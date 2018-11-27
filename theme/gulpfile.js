'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('compile', function() {
  var plugins = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano()
];
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
