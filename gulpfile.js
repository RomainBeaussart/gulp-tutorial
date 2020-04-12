const { src, dest, series, parallel, watch, lastRun } = require('gulp')
const resizer = require('gulp-image-resize')
const gulpSass = require('gulp-sass')
const del = require('del')

function images (){
    return src('images/*.jpg', { since: lastRun(images) })
        .pipe(resizer({
            width: 100,
            height: 100,
            crop: true,
            imageMagick: true
        }))
        .pipe(dest('dist/images'))
}

function clean() {
    return del('dist')
}

function sass() {
    return src('css/*.scss', { sourcemaps: true })
        .pipe(gulpSass())
        .pipe(dest('dist/css', { sourcemaps: '.' }))
}

function watcher() {
    watch('images/*.jpg', { ignoreInitial: false },images)
}

module.exports = {
    default: series(clean, parallel(sass, images)),
    watch: series(clean, watcher)
}