// 加法
var a = (function () {
  var n = 10
  var m = 20
  function add() {
    console.log(n+m)
  }
  return add
})()

// 如果不用闭包，n和m都是全局变量。b.js里的n和m会把a.js中的值覆盖掉
// var n = 10
// var m = 20
// function add() {
//   console.log(n+m)
// }