var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var tinylr;


// Compile Our Sass
gulp.task('styles', function () {
	gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets'))
		.pipe(livereload());
});

// watch js files
gulp.task('scripts', function () {
	return gulp.src('public/javascripts/*.js')
		.pipe(livereload());
});

// watch ejs files
gulp.task('ejs', function () {
	return gulp.src('views/**/*.ejs')
		.pipe(livereload());
});

gulp.task('reloadCss', function () {
	return gulp.src('public/stylesheets/*.css')
		.pipe(livereload());
});

gulp.task('test', function () {
	console.log("test ran");
});

gulp.task('watch', function () {
	livereload.listen(35729);
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('public/stylesheets/*.css', ['reloadCss']);
	gulp.watch('public/javascripts/*.js', ['scripts']);
	gulp.watch('views/**/*.ejs', ['ejs']);
});


gulp.task('default', ['watch', 'reloadCss', 'styles', 'scripts', 'ejs']);
