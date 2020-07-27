let gulp = require('gulp');
let less = require('gulp-less');
let cleanCSS = require('gulp-clean-css');

gulp.task('compileTo_CSS', function () {
    return gulp.src('less/dashboard/*.less')
        .pipe(less())
        // .pipe(cleanCSS({}))
        .pipe(gulp.dest('./final/dashboard/css/'));
});
gulp.task('default',function(){
    return gulp.watch('less/dashboard/*.less',gulp.series('compileTo_CSS'));
});