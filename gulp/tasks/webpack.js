var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    webpack = require('webpack'),
    webpackConfig = require('../../webpack.config.js'),
    WebpackDevServer = require("webpack-dev-server");

gulp.task('webpack', function () {
    g.webpack(webpackConfig)
        .pipe(gulp.dest("dist"));
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
//        if(err) throw new gutil.PluginError("webpack-dev-server", err);
//        // Server listening
//        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});