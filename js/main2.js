// The code snippet you want to highlight, as a string
var text = "body{color:red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);

//console.log(css)

// 把 code 写到 #code 和 style 标签里
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  // 设置闹钟
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    styleTag.innerHTML = prefix + code.substring(0, n)
    //domCode.scrollTop = 10000
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 0)
}

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(function () {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 16)
}

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
    #code{
      position:fixed;
      left:0;
      width:50%;
      height:100%;
    }
    #paper{
      position:fixed;
      right:0;
      width:50%;
      height:100%;
      background:#DDD;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:16px;
    }
    #paper > .content{
      background:white;
      width:100%;
      height:100%;
    }
    `

var result2 = `
    #paper{}
    /*
     * 接下来把 Markdown 变成 HTML - marked.js
     */
    /*
     * 接下来给 HTML 加样式
     */
    /*
     * 接下来给 HTML 加样式
     * 这就是我的会动的简历了
     * 谢谢观看
     */ 
  `

var md = `
  # 自我介绍

  我叫 XXX
  1988 年 5 月出生
  XXX 学校毕业
  自学前端半年
  希望应聘前端开发岗位

  # 技能介绍

  熟悉 Javascript CSS

  # 项目介绍

  1.XXX 轮播 
  2.XXX 简历
  3.XXX 画板

  # 联系方式

  QQ 1193368261
  Email 1193368261@qq.com
  手机 15148213909
`

writeCode('', result, () => {
  createPaper(() => {
    writeCode(result, result2, () => {
      writeMarkdown(md, () => {
        console.log('完成')
      })
    })
  })
}) // 定闹钟：指定毫秒之后开始写第一行代码

// 执行fn2
// fn2()

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}