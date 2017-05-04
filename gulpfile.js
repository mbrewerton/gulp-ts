var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    order = require('gulp-order');

gulp.task('default', function() {
    return gulp.src('src/**/*.ts')
        // .pipe(order([
        //     'src/app.ts',
        //     'src/app.*.ts',
        //     'src/modules/**/_module.ts',
        //     'src/modules/**/*.ts'
        // ]))
        .pipe(ts({
            out: 'output.js'
        }))
        .pipe(gulp.dest('./src/compiled/'));
});