/***
 * 合并组件内的less文件
 */

 /**
 * combine theme script
 */
const path = require('path');
const fs = require('fs');
const componentPath = path.resolve(__dirname, '../component');
const targetPath = path.resolve(__dirname, '../style/afu.component.less')
let temp = ''
function mapSearch(_path) {
    fs.readdir(_path, function(err, files) {
        if (err) {
            console.error(err)
        } else {
            files.forEach(function(filename) {
                let fileDir = path.join(_path, filename);
                fs.stat(fileDir, function(errs, stats) {
                    if (errs) {
                        console.warn(errs)
                        return
                    }
                    let isFile = stats.isFile();
                    if (isFile) {
                        if (filename.endsWith('.less')) {
                            addStyleFile(fileDir)
                        }
                    } else {
                        mapSearch(fileDir)
                    }
                });
            })
        }
    })
}

function addStyleFile(_path) {// button/button.less
    let replacePath = path.resolve(__dirname, '../')
    _path = _path.replace(replacePath, '')
    _path = path.join('../', _path).replace(/\\/g, '/')
    temp = temp + `@import "${_path}";\n`
    fs.writeFileSync(targetPath, temp)
}

mapSearch(componentPath)
console.log('正在生成afu.component.less样式文件')