import gulp from "gulp";
import nodemon from "gulp-nodemon";
import livereload from "gulp-livereload";

gulp.task("start", () => {
  livereload.listen();
  nodemon({
    script: "server.js",
    ext: "js html css",
    ignore: ["node_modules/**", "client/**"],
  }).on("restart", () => {
    gulp.src("server.js").pipe(livereload());
  });
});

gulp.task("watch", () => {
  livereload.listen();
  gulp.watch("public/**/*").on("change", livereload.changed());
});

gulp.task("default", gulp.series("start", "watch"));
