const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const cleanDist = () => {
  return del(['dist']);
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'));
}

const styles = () => {
  return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/images'))
}
const scripts = () => {
  return src([
      'src/js/components/**/*.js',
      'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src([
      'src/images/**/*.jpg',
      'src/images/**/*.png',
      'src/images/*.svg',
      'src/images/**/*.jpeg',
    ])
    .pipe(image())
    .pipe(dest('dist/images'))
}

const fonts = () => {
  return src([
      'src/fonts/**/*.woff',
      'src/fonts/**/*.woff2',
    ])
    .pipe(dest('dist/fonts'))
}


const cleanProd = () => {
  return del(['prod']);
}

const scriptsProd = () => {
  return src([
      'dist/app.js'
    ])
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('prod'))
}

const stylesProd = () => {
  return src('dist/**/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('prod'))
}

const imagesProd = () => {
  src([
      'dist/images/**/*.jpg',
      'dist/images/**/*.png',
      'dist/images/**/*.svg',
      'dist/images/**/*.jpeg',
    ])
    .pipe(dest('prod/images'))
}

const failedProd = () => {
  return src([
      'dist/**/*.html',
      'src/resources/**'
    ])
    .pipe(dest('prod'));
}

const watchFales = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
};
watch('src/**/*.html', htmlMinify);
watch('src/styles/**/*.css', styles);
watch('src/img/svg/**/*.svg', svgSprites);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resources);
exports.styles = styles;
exports.scripts = scripts;
exports.htmlMinify = htmlMinify;
exports.dev = series(cleanDist, resources, htmlMinify, scripts, styles, images, svgSprites, watchFales);
exports.build = series(cleanProd, failedProd, stylesProd, scriptsProd, imagesProd);


exports.default = series(cleanDist, resources, htmlMinify, scripts, styles, fonts, images, svgSprites, watchFales);
