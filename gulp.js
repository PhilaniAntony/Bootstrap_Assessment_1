var gulp = require('gulp');
var browserSynch = require('browser-sync').create();
var sass = requre('sass');

//Compile saa

gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});
//Move javascript intoour src/js folder
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquer/dist/jquery.min.js','node_modules/tether/dist/tether.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream())
});
//stativ server
gulp.task('server',['sass'],function(){

    browserSync.init({
      server : "./src"
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss',['align-self-sm-baseline']]);
    gulp.watch("src/*.html").on('change', browserSynch.reload);

});
gulp.task('default',['js','serve'])