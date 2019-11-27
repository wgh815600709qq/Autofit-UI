let gulp = require('gulp');
// let webpack = require('webpack');
let gutil = require('gulp-util');
const shelljs = require('shelljs');
const del = require('del');

// webpack console配置
// let defaultStatsOptions = {
//   colors: gutil.colors.supportsColor,
//   chunks: false,
//   children: false
// }

// let devConfig = require('./build/webpack.dev.config')

// 主题样式文件夹的监听
gulp.task('watch', () => {
    gutil.log('theme文件夹监听')
    gulp.watch('theme/*.less', gulp.series('compile_theme'))
})

// 编译主题样式文件
gulp.task('compile_theme', done => {
    gutil.log('开始编译主题样式文件')
    shelljs.exec('npm run compile-themeLess')
    done()
})

// 编译组件样式文件
gulp.task('compile_style', done => {
    gutil.log('开始编译组件样式文件')
    shelljs.exec('npm run compile-styleLess')
    done()
})

gulp.task('compile_less', gulp.series('compile_theme', 'compile_style'))



gulp.task('clean_less', cb => {
    del(['style/*.less'])
    gutil.log(gutil.colors.green('清空style样式文件！！！'))
    cb()
})
/**
 * 编译开发环境代码
 */
gulp.task('dev', gulp.series('clean_less','compile_less', 'watch', function(cb) {
    gutil.log('执行webpack编译项目...')
    shelljs.exec('npm run build-devServer')
    cb()
}))
