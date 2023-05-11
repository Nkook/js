// 经常需要组件 共享数据并一起更新
// 为了使得 MyButton 组件显示相同的 count 并一起更新，你需要将各个按钮的 state “向上” 移动到最接近包含所有按钮的组件之中，也就是MyApp。

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

/**
 * 此刻，当你点击任何一个按钮时，MyApp 中的 count 都将改变，同时会改变 MyButton 中的两个 count。
 * 首先，将 MyButton 的 state 上移到 MyApp 中：
 * 
 * 接着，将 MyApp 中的点击事件处理函数以及 state 一同向下传递到 每个 MyButton 中。你可以使用 JSX 的大括号向 MyButton 传递信息。就像之前向 <img> 等内置标签所做的那样:
 * 按这种方式传递下来的信息被称作 prop。此时，MyApp 组件包含了 count state 以及 handleClick 事件处理函数，并将它们作为 prop 传递给 了每个按钮。
 * 最后，改变 MyButton 以 读取 从父组件传递来的 prop：
 * 
 * 当你点击按钮时，onClick 处理程序会启动。
 * 每个按钮的 onClick prop 会被设置为 MyApp 内的 handleClick 函数，所以函数内的代码会被执行。
 * 该代码会调用 setCount(count + 1)，使得 state 变量 count 递增。
 * 新的 count 值会被作为 prop 传递给每个按钮，因此它们每次展示的都是最新的值。
 * 这被称为“状态提升”。通过向上移动 state，我们实现了在组件间共享它。
 */
