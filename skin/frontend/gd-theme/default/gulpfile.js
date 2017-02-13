var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    notify = require('gulp-notify'),
    rimraf = require('gulp-rimraf'),
    browserSync = require('browser-sync'),
    replace = require('gulp-replace'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin');
    env = process.env.NODE_ENV || 'development';
    //env = 'development';


// SASS tasks
gulp.task('sass', function() {
    return gulp.src('src/scss/styles.scss')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(gulpif(env === 'development', sass.sync().on('error', sass.logError)))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulpif(env === 'production', sass({errLogToConsole: true})))
        .pipe(gulpif(env === 'production', cleancss()))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'))
        .pipe(notify('Successfully compiled SASS'));
});

// JS tasks
gulp.task('js', function() {
    return gulp.src([
        'bower_components/foundation-sites/js/foundation.core.js',
        'bower_components/foundation-sites/js/foundation.util.*.js',
        // Pick the components you need in your project
        'bower_components/foundation-sites/js/foundation.abide.js',
        'bower_components/foundation-sites/js/foundation.accordion.js',
        'bower_components/foundation-sites/js/foundation.accordionMenu.js',
        //'bower_components/foundation-sites/js/foundation.drilldown.js',
        //'bower_components/foundation-sites/js/foundation.dropdown.js',
        //'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
        'bower_components/foundation-sites/js/foundation.equalizer.js',
        'bower_components/foundation-sites/js/foundation.interchange.js',
        'bower_components/foundation-sites/js/foundation.magellan.js',
        'bower_components/foundation-sites/js/foundation.offcanvas.js',
        //'bower_components/foundation-sites/js/foundation.orbit.js',
        'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
        'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
        'bower_components/foundation-sites/js/foundation.reveal.js',
        //'bower_components/foundation-sites/js/foundation.slider.js',
        'bower_components/foundation-sites/js/foundation.sticky.js',
        'bower_components/foundation-sites/js/foundation.tabs.js',
        'bower_components/foundation-sites/js/foundation.toggler.js',
        //'bower_components/foundation-sites/js/foundation.tooltip.js',
        'bower_components/foundation-sites/js/foundation.zf.responsiveAccordionTabs.js',
        'bower_components/jquery.cookie/jquery.cookie.js',
        'bower_components/jquery.cookieBar/jquery.cookieBar.js',
        'bower_components/raty-fa/lib/jquery.raty-fa.js',
        'bower_components/owl.carousel/src/js/owl.carousel.js',
        'bower_components/owl.carousel/src/js/owl.animate.js',
        'bower_components/owl.carousel/src/js/owl.autoheight.js',
        'bower_components/owl.carousel/src/js/owl.autoplay.js',
        'bower_components/owl.carousel/src/js/owl.autorefresh.js',
        'bower_components/owl.carousel/src/js/owl.hash.js',
        'bower_components/owl.carousel/src/js/owl.lazyload.js',
        'bower_components/owl.carousel/src/js/owl.navigation.js',
        'bower_components/owl.carousel/src/js/owl.support.js',
        'bower_components/owl.carousel/src/js/owl.video.js',
        'bower_components/jquery-mousewheel/jquery.mousewheel.js',
        'bower_components/lightgallery/dist/js/lightgallery.js'
        ])
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(concat('script.js'))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest('js'))
        .pipe(notify('Successfully compiled JS'));
});

// JS tasks
gulp.task('app_js', function() {
    return gulp.src([
            'src/js/app.js'
        ])
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(concat('app.js'))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest('js'))
        .pipe(notify('Successfully compiled APP JS'));
});

// copy Files
gulp.task('copy_js', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js'
        ])
        .pipe(gulp.dest('js'))
        .pipe(notify('Successfully copy JS'));
});

gulp.task('copy_fonts', function() {
    return gulp.src([
            'bower_components/components-font-awesome/fonts/*',
            'bower_components/lightgallery/dist/fonts/*',
        ])
        .pipe(gulp.dest('fonts'))
        .pipe(notify('Successfully copy Fonts'));
});

// Imagemin tasks
gulp.task('imagemin', function() {
    return gulp.src([
            'src/images/skin/**/*'
        ])
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
        .pipe(notify('Successfully Imagemin'));
});

// Imagemin tasks
gulp.task('imagemin_brands', function() {
    return gulp.src([
            'src/images/media/**/*'
        ])
        .pipe(imagemin())
        .pipe(gulp.dest('../../../../media'))
        .pipe(notify('Successfully Imagemin'));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['css', 'js'], {read: false})
    .pipe(rimraf());
});

// BrowserSync
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "magento.gastro.lan",
        port: 3000
    });
});

// Watch
gulp.task('watch', function() {
        // Watch .scss files
        gulp.watch('src/scss/**/*.scss', ['sass']);
        // Watch .js files
        gulp.watch('src/js/**/*.js', ['js', browserSync.reload]);
    
});

// Default task
gulp.task('default', ['sass', 'imagemin', 'imagemin_brands', 'js', 'app_js', 'watch', 'browser-sync'], function() {

});