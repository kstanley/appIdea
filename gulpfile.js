var gulp = require('gulp');

var sass = require('gulp-sass');
// Compile Our Sass
gulp.task('styles', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets'))
});

//Watch task
gulp.task('default', function () {
	gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('hello', function () {
	console.log("hello world");
});
