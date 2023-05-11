import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('组件渲染完成执行！');
    return () => {
      // 组件卸载或下一次渲染前清理副作用操作
    };
  }, []);

  useEffect(() => {
    console.log('count状态被更新执行！');
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

/**
 * useState和useEffect Hook在函数组件渲染时都会被执行，但它们执行的时机不同。
 * 
 * useState用于定义和修改状态。
 *      在组件首次渲染时，useState会根据初始状态值定义组件状态，从而重新渲染组件。
 *      在组件渲染过程中，useState会根据用户交互或其他条件更新状态，从而引起组件重新渲染。
 * 
 * useEffect用于处理副作用操作（side effects，如发送网络请求、修改DOM节点等），
 *      而这些操作与组件渲染过程无关。
 *      组件渲染完成后，useEffect中定义的副作用操作会立即执行。
 *      如果副作用操作有依赖列表（dependencies），则仅当依赖值发生改变时，副作用操作才会重新执行；
 *      否则，每次组件渲染完成后，副作用操作只会执行一次。
 * 
 * 上方案例详解：
 *      组件首次渲染时，会输出"组件渲染完成！"这个日志信息。
 *      在点击按钮增加组件状态时，会输出"count状态被更新！"这个日志信息。
 *      每次增加状态都会引起组件重新渲染，而useEffect中定义的依赖count、空数组（表示没有依赖）则会影响日志是否会输出。
 * 
 * 在大多数情况下，
 * 我们使用useState来管理和更新组件状态，
 * 使用useEffect来处理与组件渲染无关的操作。
 * 这样可以使组件逻辑更清晰、可维护和可重用。
 * 
 */