'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require("babelify");

gulp.task('build', () => {
    runSequence(['browserify']);
});

gulp.task('browserify', () => {
    browserify('./js/es2015.js', {
        debug:   true,
    })
        .transform(babelify)
        .bundle()
        .pipe(source('es2015.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
