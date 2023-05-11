import React, { useState, useEffect } from 'react';

/**
 * useState 和 useEffect 是 React Hooks 中的两个常用 Hook，它们分别用于管理组件的状态和副作用。
 * 1. useState 用于管理组件的状态
 *      useState 在组件每次渲染时都会被执行。
 *      它返回一个状态值和一个更新状态值的函数。
 *      通过调用这个函数，我们可以更新组件的状态，并在下一次渲染时更新 UI。
 * 
 * 2. useEffect 用于管理组件的副作用
 *      在组件渲染后执行。
 *      它接收一个回调函数作为参数，这个回调函数会在组件渲染后执行。
 *      我们可以在这个回调函数中执行副作用操作，例如订阅事件、发送网络请求等。
 *      useEffect 还可以返回一个清理函数，用于在组件卸载或下一次渲染前清理副作用操作。
 *      在使用 useEffect 时，我们可以通过传递第二个参数来控制它的执行时机。
 *      第二个参数是一个数组，包含了需要监听的状态值。当这些状态值发生变化时，useEffect 回调函数会被重新执行。
 *      如果第二个参数为空数组，那么 useEffect 只会在组件渲染后执行一次，类似于类组件中的 componentDidMount。
 */

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect executed');
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{`Count: ${count}`}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
