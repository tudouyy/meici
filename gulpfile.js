var gulp=require("gulp");
var sass=require("gulp-sass");
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var rename=require("gulp-rename");


gulp.task("copy-html",function(){
	gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\meici"));
});

gulp.task("sassfile",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("D:\\meici\\css"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\meici\\css"));
});
gulp.task("copy-jpg",function(){
	gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\meici\\img"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\meici\\js"));
});

gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["sassfile"]);
	gulp.watch("img/**/*",["copy-jpg"]);
	gulp.watch("js/**/*",["copy-js"]);
});