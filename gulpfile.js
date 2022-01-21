const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const kit = require('gulp-kit');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;


const paths = {
    html: './html/**/*.kit',
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    imgs: './src/img/*',
    sassDist: './dist/css',
    jsDist: './dist/js',
    imgDist: './dist/img',
    dist: './dist',
}

function sassCompiler(done) {
    src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())    
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.sassDist))
    done()
}

function javaScript(done) {
    src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.jsDist));
    done()
}


function convertImages(done) {
    src(paths.imgs)
    .pipe(imagemin())
    .pipe(dest(paths.imgDist));
    done()
}   
function jpgToWebP(done) {
    src(paths.imgs)
    .pipe(webp())
    .pipe(dest(paths.imgDist));
    done()
} 

function handleKits(done) {
    src(paths.html)
        .pipe(kit())
        .pipe(dest('./'));
    done()
}

function cleanResources(done) {
    src(paths.dist, {read: false})
    .pipe(clean());
}

function startBrowserSync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    done()
}

function watchForChanges(done) {
    watch('./*.html').on("change", reload)
    watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on("change", reload)
    watch(paths.imgs, convertImages).on("change", reload)
    done()
}


const mainFunctions = parallel(handleKits, sassCompiler, javaScript, convertImages, jpgToWebP)
// Beware of using cleanResources. Use it manually as it deletes files 
exports.cleanResources = cleanResources
exports.default = series(mainFunctions, startBrowserSync, watchForChanges)