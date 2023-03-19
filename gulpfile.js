const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const livereload = require("gulp-livereload");

gulp.task("start", () => {
  livereload.listen();
  nodemon({
    script: "index.js",
    ext: "js html css",
    ignore: ["node_modules/**", "client/**"],
  }).on("restart", () => {
    gulp.src("index.js").pipe(livereload());
  });
});

gulp.task("default", ["start"]);
