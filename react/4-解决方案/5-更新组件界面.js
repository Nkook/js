import { useState } from 'react';
// 如果你多次渲染同一个组件，每个组件都会拥有自己的 state。你可以尝试点击不同的按钮：
// 每个按钮会 “记住” 自己的 count，而不影响其他按钮。

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

// 按钮组件
function MyButton() {
  // 声明count变量, 更新它的函数 = 初始值
  // 组件初始化会更新为0，每次调用setCount会更新组件
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

