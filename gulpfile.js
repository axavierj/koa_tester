import gulp from "gulp";
import nodemon from "gulp-nodemon";
import livereload from "gulp-livereload";
import open from "gulp-open";

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

gulp.task("open", () => {
  const options = {
    uri: "http://localhost:3000", // replace with your URL
    app: "chrome", // replace with your preferred browser
  };
  gulp.src(__filename).pipe(open(options));
});

gulp.task("default", gulp.series("start", "watch", "open"));
