let gulp = require('gulp');
let less = require('gulp-less');
let cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


gulp.task('build_CSS', function (done) {
    
    gulp.src('src/back/less/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/back/css/'));
        
    gulp.src('src/front/less/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/front/css/'));
        
    done();
    
});

gulp.task('build_JS', function(done){

    gulp.src('src/back/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/back/js/'));
        
    gulp.src('src/front/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/front/js/'));
        
    done();
    
});

gulp.task('default',function(){
    gulp.watch('src/**/less/*.less',gulp.series('build_CSS'));
    gulp.watch('src/**/js/*.js',gulp.series('build_JS'));
});