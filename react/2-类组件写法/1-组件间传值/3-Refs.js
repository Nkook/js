// 获取子组件或者DOM元素的引用，可以用来进行一些操作。具体使用案例：
// 子组件
import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef}>
        <p>Hello World</p>
      </div>
    );
  }
}
