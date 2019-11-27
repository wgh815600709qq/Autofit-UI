/**
 * combine theme script
 */

const path = require('path');
const UserDefine_LessFile_Path = path.resolve(__dirname, '../theme/user.defined.less');
const DefaultTheme_LessFile_Path = path.resolve(__dirname, '../theme/theme.default.less');
const fs = require('fs')

let UserDefine_LessFile = fs.readFileSync(UserDefine_LessFile_Path).toString();
let DefaultTheme_LessFile = fs.readFileSync(DefaultTheme_LessFile_Path).toString();

const Combined_LessFile_Path = path.join(__dirname, '../style/theme.combined.less');
(function combine(str1, str2) {
    // 过滤注释
    str1 = str1.replace(/\/\*[^\/]+\*\/|\/\/[^\n]+/g, '')
    str2 = str2.replace(/\/\*[^\/]+\*\/|\/\/[^\n]+/g, '')
    // 原理：用户定义变量覆盖系统默认变量
    let combineStr = `/*default-theme*/${str2}\n/*user-defined*/${str1}`
    fs.writeFileSync(Combined_LessFile_Path, combineStr)
    console.log('主题样式文件构建成功！！！')
})(UserDefine_LessFile, DefaultTheme_LessFile)