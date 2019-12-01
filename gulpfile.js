const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');
const shelljs = require('shelljs');
const del = require('del');
const merge = require('webpack-merge');
let devConfig = require('./build/webpack.dev.config');

// 主题样式文件夹的监听
gulp.task('watch', (cb) => {
    gutil.log(gutil.colors.green('文件夹监听...'))
    gulp.watch('theme', gulp.series('dev'))
    gulp.watch('component', gulp.series('dev'))
    cb()
})

// 编译主题样式文件
gulp.task('compile_theme', (cb) => {
    gutil.log(gutil.colors.green('编译主题...'))
    shelljs.exec('node script/combine.theme.js')
    cb()
})

// 编译组件样式文件
gulp.task('compile_style', (cb) => {
    gutil.log(gutil.colors.green('编译组件样式...'))
    shelljs.exec('node script/combine.style.js')
    cb()
})

gulp.task('compile_less', gulp.parallel('compile_theme', 'compile_style'))

gulp.task('clean_less', (cb) => {
    gutil.log(gutil.colors.green('清空style...'))
    del(['style/*.less'])
    cb()
})

gulp.task('buildDev', () => {
    let config = {
        mode: 'development'
    }
    gutil.log('执行webpack编译项目...')
    webpack(merge(devConfig, config), (err, stats) => {
        if (err || stats.hasErrors()) {
            gutil.log(gutil.colors.red('构建失败！！！'))
        } else {
            gutil.log(gutil.colors.green('构建成功！！！'))
        }
        gutil.log(gutil.colors.green(`Visit localhost:${devConfig.devServer.port}/index.html`))
    });

})

/**
 * 编译开发环境代码9*8
 */
gulp.task('dev', gulp.series('compile_less', gulp.parallel('watch', 'buildDev')))
