// 以通过在组件中声明 事件处理 函数来响应事件：
function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

//   注意，onClick={handleClick} 的结尾没有小括号！
// 不要 调用 事件处理函数：你只需 传递给事件 即可。
// 当用户点击按钮时，React 会调用你的事件处理函数。