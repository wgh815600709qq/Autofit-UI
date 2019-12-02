/***
 * 自适应字体
 * iphone5  320px => 16px
 * 公式:  width / ? = 320 / 16
 *   =>   ? width * 16 /320
 */

export const adaption = () => {
    let width = window.innerWidth
    let fontSize = width * 16 / 320
    document.querySelector('html').style.fontSize = `${fontSize}px`
}


 