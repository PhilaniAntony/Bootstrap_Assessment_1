//Importing module from gulp for dev purposes
const browserSync = require('browser-sync').create(),
      gulp  = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      cache = require('gulp-cache'),
      cleancss = require('gulp-cleancss'),
      imagemin = require('gulp-imagemin'),
      plumber = require('gulp-plumber'),
      sass = require('gulp-sass');

/************General Gulp plugins**************/

//Create a  browserSync task
gulp.task('browsersync', function (){
    browserSync.init({
        server :'app'
    })
});

//Create an autoprefixer task
gulp.task('autoprefix', function(){
    return gulp.src('app/scc/**/*.scss')
               .pipe(autoprefixer())
               .pipe(gulp.dest('dist'))
});

//Create a cache task
gulp.task('cache', function (){
    return gulp.src('app/images/*')
            .pipe(cache())
            .pipe(gulp.dest('dist/images'))
});
//Create a plumber task
gulp.task('plumber', function (){
    return gulp.src('app/scss/**/*.scss')
               .pipe(plumber())
               .pipe(sass())
               .pipe(cleancss())
               .pipe(autoprefixer())
               .pipe(plumber.stop())
               .pipe(gulp.dest('dist'))
               .pipe(browserSync.stream())
});
/******************** HTML  Related task**************** */
gulp.task('html', function (){
    return gulp.src('*.html')
               .pipe(gulp.dest('dist'))
               .pipe(browserSync.stream())
});
/******************** CSS  Related task**************** */
gulp.task('sass', function (){
    return gulp.src('app/scss/**/*.scss')
               .pipe(sass())
               .pipe(plumber())
               .pipe(gulp.dest('dist/scss'))
               .pipe(browserSync.stream())
});

gulp.task('cleancss', function (){
    return gulp.src('app/scss/**/*.scss')
               .pipe(cleancss())
               .pipe(plumber())
               .pipe(gulp.dest('dist/sass'))
               .pipe(browserSync.stream())
});

/****************Image Related task***********************/
//Create imagemin task
gulp.task('imagemin' , function(){
    return gulp.src('app/images/**/*')
               .pipe(cache(imagemin({optimizationLevel : 5})))
               .pipe(gulp.dest('dist/images'))
});
/****************Setting a watch task************* */
gulp.task('watch', function(){
    gulp.watch('app*.html',gulp.parallel['html'])
    gulp.watch('app/scss/**/*.scss', gulp.series['sass','autoprefixer','cleancss','plumber' ]);
    gulp.watch('app/images/*',gulp.series [ 'imagemin','cache']);
   
});
