var gulp = require('gulp');
var sketch = require('gulp-sketch');

gulp.task('sketch', function(){
    gulp.src('./sketch/**/*.sketch')
        .pipe(sketch({
            export: 'pages',
            formats: 'png'
        }))
        .pipe(gulp.dest('./images/'));
});
