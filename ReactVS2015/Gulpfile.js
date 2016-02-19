var gulp = require("gulp");
var del = require("del");

var config = {
    vendorjs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/react/dist/react.js",
        "node_modules/materialize-css/bin/materialize.js"
    ],
    vendorcss: [
        "node_modules/materialize-css/bin/materialize.css",
        "node_modules/animate.css/animate.css",
        "Content/css/font-awesome.css"
    ],
    vendorfont: [
        "node_modules/materialize-css/font/**/*",
        "node_modules/font-awesome/fonts/**/*"
    ],
    sitecss: [
        "Content/css/site.css"
    ],
    favicon: "Content/images/favicon.ico",
    root: "wwwroot/"
};

gulp.task("default", ["vendor-js", "vendor-css", "vendor-font", "site-css", "favicon"]);

gulp.task("clean", function() {
    del(config.root + "lib/*");
});

gulp.task("vendor-js", function () {
    gulp.src(config.vendorjs)
        .pipe(gulp.dest(config.root + "lib/js/"));
});

gulp.task("vendor-css", function() {
    gulp.src(config.vendorcss)
        .pipe(gulp.dest(config.root + "lib/css/"));
});

gulp.task("vendor-font", function () {
    gulp.src(config.vendorfont)
        .pipe(gulp.dest(config.root + "lib/font/"));
});

gulp.task("site-css", function () {
    gulp.src(config.sitecss)
        .pipe(gulp.dest(config.root + "lib/css/"));
});

gulp.task("favicon", function() {
    gulp.src(config.favicon)
        .pipe(gulp.dest(config.root));
});