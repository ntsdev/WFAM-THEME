const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass'); 

// compile sass

gulp.task('sass',function(){
    return gulp.src(['scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css')) 
    .pipe(browserSync.stream());
});

// watch & serve

gulp.task('serve', ['sass'],function(){
    browserSync.init({
  proxy: 'http://localhost/projects/Wellsfargo/new/demo/index.html'
   
});
    gulp.watch(['scss/*.scss'], ['sass']); 
    gulp.watch(['demo/*.html'].on('change', browserSync.reload));
});

//default

gulp.task('default', ['serve']);

