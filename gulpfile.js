const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
const imageminPngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const tinify = require('gulp-tinify');
const size = require('gulp-size');
const config = {
  src: './images/**/*.{jp?g,png}',
  dest: {
    tinified: './tinified',
    imagemin: './imagemin'
  }
};

gulp.task('tinify', () => {
  gulp.src(config.src)
  .pipe(tinify(process.env.TINYPNG))
  .pipe(size({
    title: 'tinify:',
    showFiles: true
  }))
  .pipe(gulp.dest(config.dest.tinified));
});

gulp.task('imagemin', () => {
  gulp.src(config.src)
  .pipe(
    imagemin([
      imageminGuetzli(),
      imageminPngquant()
    ])
  )
  .pipe(size({
    title: 'imagemin:',
    showFiles: true
  }))
  .pipe(gulp.dest(config.dest.imagemin));
});

gulp.task('default', ['tinify', 'imagemin']);
