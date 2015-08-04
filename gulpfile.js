/*
* Dependencias
*/
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus');

/*
* Configuración de la tarea
*/
gulp.task('stylus2css',function(){
  gulp.src('stylus/ed-grid.styl')
  .pipe(plumber())
    .pipe(stylus({compress:true}))
    .pipe(gulp.dest('css/'))
});

gulp.task('default',['stylus2css']);