// The code snippet you want to highlight, as a string
var text = "body{color:red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);

//console.log(css)

var result = `
    /* 
     * 面试官你好，我是XXX
     * 我将以动画的形式来介绍我自己
     * 只用文字介绍太单调了
     * 我就用代码来介绍吧
     * 首先准备一些样式
     */

    *{
      transition:all 1s;
    }
    html{
      background: rgb(63, 82, 99);
      font-size: 16px;
    }
    #code{
      border:1px solid red;
      padding:16px;
    }
    
    /* 我需要一点代码高亮 */

    .token.selector{
      color:#690;
    }
    
    .token.property{
      color:#905;
    }
    .token.function{
      color:#DD4A68;
    }

    /* 加点3D效果 */
    #code{
      transform:rotate(360deg);
    }

    /* 下面来介绍一下我自己 */
    /* 我需要一张白纸 */

    `


var n = 0
var id = setInterval(function () {
  n += 1
  code.innerHTML = result.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
  styleTag.innerHTML = result.substring(0, n)
  console.log('一轮')
  if (n >= result.length) {
    window.clearInterval(id)
    console.log('完成')
    fn2()
    fn3(result)
  }
}, 10)

function fn2() {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(prevResult) {
  var result = `
        #paper{
          width:100px;height:100px;
          background:red;
        }
      `

  var n = 0
  var id = setInterval(() => {
    n += 1
    //console.log(result.substring(0, n))
    code.innerHTML = prevResult + result.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = prevResult + result.substring(0, n)
    if (n >= result.length) {
      window.clearInterval(id)
    }
  }, 50)
}